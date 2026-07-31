-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT IF EXISTS "Post_userId_fkey";

-- DropTable
DROP TABLE IF EXISTS "Post";
