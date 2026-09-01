-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "images" TEXT[],
ADD COLUMN     "thumbnail" TEXT NOT NULL DEFAULT '';
