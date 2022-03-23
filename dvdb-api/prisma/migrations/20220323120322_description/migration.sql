/*
  Warnings:

  - You are about to drop the column `descrpition` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "descrpition",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT E'no description';
