/*
  Warnings:

  - You are about to drop the column `isAdminReply` on the `BlogComment` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `BlogComment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BlogComment" DROP CONSTRAINT "BlogComment_parentId_fkey";

-- AlterTable
ALTER TABLE "BlogComment" DROP COLUMN "isAdminReply",
DROP COLUMN "parentId";
