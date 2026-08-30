/*
  Warnings:

  - You are about to drop the column `isApproved` on the `BlogComment` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CommentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "BlogComment" DROP COLUMN "isApproved",
ADD COLUMN     "status" "CommentStatus" NOT NULL DEFAULT 'PENDING';
