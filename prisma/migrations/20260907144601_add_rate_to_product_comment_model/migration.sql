/*
  Warnings:

  - Added the required column `rate` to the `ProductComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductComment" ADD COLUMN     "rate" INTEGER NOT NULL;
