/*
  Warnings:

  - Added the required column `projectName` to the `Object` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Object" ADD COLUMN     "projectName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "Project"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
