/*
  Warnings:

  - You are about to drop the column `brand` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brand",
ADD COLUMN     "brandId" TEXT;

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
