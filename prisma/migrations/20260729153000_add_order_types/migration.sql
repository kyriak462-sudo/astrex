-- AlterEnum: TradeStatus gains PENDING and CANCELLED
ALTER TYPE "TradeStatus" ADD VALUE 'PENDING';
ALTER TYPE "TradeStatus" ADD VALUE 'CANCELLED';

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('MARKET', 'LIMIT', 'STOP_LIMIT');

-- AlterTable
ALTER TABLE "VirtualTrade" ADD COLUMN "orderType" "OrderType" NOT NULL DEFAULT 'MARKET';
ALTER TABLE "VirtualTrade" ADD COLUMN "triggerPrice" DOUBLE PRECISION;
ALTER TABLE "VirtualTrade" ADD COLUMN "triggered" BOOLEAN NOT NULL DEFAULT false;
