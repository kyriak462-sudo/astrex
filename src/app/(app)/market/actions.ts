"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentPrice } from "@/lib/market-data";

async function getOrCreatePortfolio(userId: string) {
  const existing = await db.virtualPortfolio.findUnique({ where: { userId } });
  if (existing) return existing;
  return db.virtualPortfolio.create({ data: { userId, balance: 10000 } });
}

export async function openTrade(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  const symbol = String(formData.get("symbol"));
  const side = String(formData.get("side")) === "SHORT" ? "SHORT" : "LONG";
  const amount = Number(formData.get("amount"));
  if (!symbol || !amount || amount <= 0) return;

  const portfolio = await getOrCreatePortfolio(session.user.id);
  if (amount > portfolio.balance) return;

  const { price } = await getCurrentPrice(symbol);
  if (!price) return;

  const quantity = amount / price;

  await db.$transaction([
    db.virtualTrade.create({
      data: {
        portfolioId: portfolio.id,
        symbol,
        side,
        entryPrice: price,
        quantity,
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
  const notional = trade.entryPrice * trade.quantity;
  const pnl =
    trade.side === "LONG"
      ? (price - trade.entryPrice) * trade.quantity
      : (trade.entryPrice - price) * trade.quantity;

  await db.$transaction([
    db.virtualTrade.update({
      where: { id: trade.id },
      data: { status: "CLOSED", exitPrice: price, pnl, closedAt: new Date() },
    }),
    db.virtualPortfolio.update({
      where: { id: trade.portfolioId },
      data: { balance: { increment: notional + pnl } },
    }),
  ]);

  revalidatePath("/market");
}
