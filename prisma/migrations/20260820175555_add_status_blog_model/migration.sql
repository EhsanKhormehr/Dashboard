/*
  Warnings:

  - Added the required column `status` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BlogStatus" AS ENUM ('PUBLISHED', 'ARCHIVED');

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "status" "BlogStatus" NOT NULL;
