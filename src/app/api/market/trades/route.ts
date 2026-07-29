import { NextResponse } from "next/server";
import { SYMBOLS, getRecentTrades } from "@/lib/market-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbolParam = searchParams.get("symbol") ?? "";
  const symbol = SYMBOLS.find((s) => s.ticker === symbolParam);
  if (!symbol) return NextResponse.json([], { status: 400 });

  const trades = await getRecentTrades(symbol.ticker);
  return NextResponse.json(trades);
}
