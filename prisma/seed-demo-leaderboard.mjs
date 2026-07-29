import fs from "node:fs";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

for (const line of fs.readFileSync(".env", "utf8").split("\n")) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^"|"$/g, "");
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

const AVATAR_IDS = ["rocket", "star", "moon", "sparkles", "zap", "flame", "target", "compass"];
const SYMBOLS = ["BTC", "ETH", "BNB", "SOL", "XRP", "ADA", "DOGE", "LTC", "DOT", "AVAX"];

const NAMES = [
  "CryptoWolf", "SatoshiJr", "MoonHunter", "BlockchainBaron", "PipMaster",
  "TraderJoeX", "WhaleWatcher", "CandleKing", "FibonacciFox", "LiquidityHunter",
  "ScalpQueen", "ChartNinja", "BullRunBoris", "ShortSellerSam", "DiamondHandsDan",
  "RektRecovery", "AlphaSeeker", "TrendRider88", "VolumeViper", "MarginMaven",
  "StopLossKid", "BreakoutBella", "SwingTraderSue", "OrderBlockOllie", "ImbalanceIvan",
  "LeverageLeo", "BOSHunter", "RSIRookie", "MACDMaster", "FVGFinder",
  "PumpChaser", "DipBuyerDana", "HODLHannah", "YieldYuki", "DeFiDmitri",
  "AltcoinAnna", "StableStan", "GasFeeGary", "WickHunter", "EMAEddie",
  "VWAPVicky", "RangeRider", "ATHChaser", "RetestRuby", "SupplyZoneSam",
  "DemandDara", "TrendlineTom", "ZigZagZoe", "PivotPete", "VolatilityVal",
];

function rand(min, max) {
  return min + Math.random() * (max - min);
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
  const now = new Date();
  const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));

  for (let i = 0; i < NAMES.length; i++) {
    const name = NAMES[i];
    const email = `demo-${name.toLowerCase()}@astrex-demo.internal`;

    // Descending curve from ~+2800 at i=0 to ~-900 at i=49, with jitter.
    const t = i / (NAMES.length - 1);
    const basePnl = 2800 * Math.pow(1 - t, 1.6) - 900 * Math.pow(t, 0.8);
    const pnl = Math.round(basePnl + rand(-120, 120));

    const user = await db.user.upsert({
      where: { email },
      create: {
        email,
        name,
        avatarId: pick(AVATAR_IDS),
        emailVerified: new Date(),
        consentGiven: true,
        consentAt: new Date(),
        xp: Math.round(rand(50, 900)),
        level: Math.round(rand(1, 6)),
      },
      update: {},
    });

    const portfolio = await db.virtualPortfolio.upsert({
      where: { userId: user.id },
      create: { userId: user.id, balance: 10000 + pnl },
      update: { balance: 10000 + pnl },
    });

    // Clear any previous demo trades for this portfolio so re-runs stay clean.
    await db.virtualTrade.deleteMany({ where: { portfolioId: portfolio.id } });

    // Split pnl across 1-3 closed trades this month.
    const tradeCount = Math.floor(rand(1, 4));
    let remaining = pnl;
    for (let k = 0; k < tradeCount; k++) {
      const isLast = k === tradeCount - 1;
      const share = isLast ? remaining : Math.round(remaining * rand(0.3, 0.7));
      remaining -= share;

      const symbol = pick(SYMBOLS);
      const side = Math.random() > 0.5 ? "LONG" : "SHORT";
      const leverage = pick([1, 2, 5, 10, 20]);
      const entryPrice = rand(10, 65000);
      const quantity = rand(0.01, 5);
      const closedAt = new Date(monthStart.getTime() + rand(0, now.getTime() - monthStart.getTime()));

      await db.virtualTrade.create({
        data: {
          portfolioId: portfolio.id,
          symbol,
          side,
          orderType: "MARKET",
          entryPrice,
          exitPrice: entryPrice + (side === "LONG" ? 1 : -1) * (share / Math.max(quantity, 0.01)),
          quantity,
          leverage,
          status: "CLOSED",
          pnl: share,
          openedAt: new Date(closedAt.getTime() - 3600_000),
          closedAt,
        },
      });
    }

    console.log(`${name}: pnl=${pnl}`);
  }

  console.log(`Seeded ${NAMES.length} demo leaderboard users.`);
}

main()
  .catch((e) => console.error("ERR", e))
  .finally(() => db.$disconnect());
