import { NextResponse } from "next/server";
import { SYMBOLS, getOrderBook } from "@/lib/market-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbolParam = searchParams.get("symbol") ?? "";
  const symbol = SYMBOLS.find((s) => s.ticker === symbolParam);
  if (!symbol) return NextResponse.json({ bids: [], asks: [] }, { status: 400 });

  const book = await getOrderBook(symbol.ticker);
  return NextResponse.json(book);
}
