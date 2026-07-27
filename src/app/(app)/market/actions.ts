"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentPrice } from "@/lib/market-data";

const STARTING_BALANCE = 10000;

async function getOrCreatePortfolio(userId: string) {
  const existing = await db.virtualPortfolio.findUnique({ where: { userId } });
  if (existing) return existing;
  return db.virtualPortfolio.create({ data: { userId, balance: STARTING_BALANCE } });
}

async function settleTrade(
  trade: {
    id: string;
    portfolioId: string;
    entryPrice: number;
    quantity: number;
    leverage: number;
    side: "LONG" | "SHORT";
  },
  exitPrice: number
) {
  if (!Number.isFinite(exitPrice) || exitPrice <= 0) return;

  const margin = (trade.entryPrice * trade.quantity) / trade.leverage;
  const pnl =
    trade.side === "LONG"
      ? (exitPrice - trade.entryPrice) * trade.quantity
      : (trade.entryPrice - exitPrice) * trade.quantity;
  const returned = Math.max(0, margin + pnl);

  if (!Number.isFinite(returned) || !Number.isFinite(pnl)) {
    console.error(`settleTrade: non-finite result for trade ${trade.id}, refusing to update balance`);
    await db.virtualTrade.update({
      where: { id: trade.id },
      data: { status: "CLOSED", exitPrice, pnl: 0, closedAt: new Date() },
    });
    return;
  }

  await db.$transaction([
    db.virtualTrade.update({
      where: { id: trade.id },
      data: { status: "CLOSED", exitPrice, pnl, closedAt: new Date() },
    }),
    db.virtualPortfolio.update({
      where: { id: trade.portfolioId },
      data: { balance: { increment: returned } },
    }),
  ]);
}

/** Auto-closes any open trades whose stop-loss or take-profit has been hit by the live price. */
export async function checkTriggers(userId: string) {
  const portfolio = await db.virtualPortfolio.findUnique({
    where: { userId },
    include: { trades: { where: { status: "OPEN" } } },
  });
  if (!portfolio || portfolio.trades.length === 0) return;

  for (const trade of portfolio.trades) {
    if (!trade.stopLoss && !trade.takeProfit) continue;
    const { price } = await getCurrentPrice(trade.symbol);
    if (!price || !Number.isFinite(price)) continue;

    const hitStop =
      trade.stopLoss != null &&
      (trade.side === "LONG" ? price <= trade.stopLoss : price >= trade.stopLoss);
    const hitTarget =
      trade.takeProfit != null &&
      (trade.side === "LONG" ? price >= trade.takeProfit : price <= trade.takeProfit);

    if (hitStop || hitTarget) {
      const exitPrice = hitStop ? trade.stopLoss! : trade.takeProfit!;
      await settleTrade(trade, exitPrice);
    }
  }
}

export async function openTrade(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  const symbol = String(formData.get("symbol"));
  const side = String(formData.get("side")) === "SHORT" ? "SHORT" : "LONG";
  const amount = Number(formData.get("amount"));
  const leverage = Math.min(20, Math.max(1, Number(formData.get("leverage")) || 1));
  const stopLossInput = formData.get("stopLoss");
  const takeProfitInput = formData.get("takeProfit");
  const stopLoss = stopLossInput ? Number(stopLossInput) : null;
  const takeProfit = takeProfitInput ? Number(takeProfitInput) : null;

  if (!symbol || !Number.isFinite(amount) || amount <= 0) return;

  const portfolio = await getOrCreatePortfolio(session.user.id);
  if (!Number.isFinite(portfolio.balance) || amount > portfolio.balance) return;

  const { price } = await getCurrentPrice(symbol);
  if (!price || !Number.isFinite(price) || price <= 0) return;

  const quantity = (amount * leverage) / price;
  if (!Number.isFinite(quantity) || quantity <= 0) return;

  await db.$transaction([
    db.virtualTrade.create({
      data: {
        portfolioId: portfolio.id,
        symbol,
        side,
        entryPrice: price,
        quantity,
        leverage,
        stopLoss: stopLoss ?? undefined,
        takeProfit: takeProfit ?? undefined,
        status: "OPEN",
      },
    }),
    db.virtualPortfolio.update({
      where: { id: portfolio.id },
      data: { balance: { decrement: amount } },
    }),
  ]);

  revalidatePath("/market");
}

export async function closeTrade(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  const tradeId = String(formData.get("tradeId"));
  const trade = await db.virtualTrade.findUnique({
    where: { id: tradeId },
    include: { portfolio: true },
  });
  if (!trade || trade.portfolio.userId !== session.user.id || trade.status !== "OPEN") return;

  const { price } = await getCurrentPrice(trade.symbol);
  if (!price || !Number.isFinite(price) || price <= 0) return;

  await settleTrade(trade, price);

  revalidatePath("/market");
}

/** Resets the caller's virtual portfolio balance back to the starting amount and clears open trades. */
export async function resetBalance() {
  const session = await auth();
  if (!session?.user?.id) return;

  const portfolio = await getOrCreatePortfolio(session.user.id);

  await db.$transaction([
    db.virtualTrade.deleteMany({ where: { portfolioId: portfolio.id, status: "OPEN" } }),
    db.virtualPortfolio.update({
      where: { id: portfolio.id },
      data: { balance: STARTING_BALANCE },
    }),
  ]);

  revalidatePath("/market");
}
