-- AlterTable
ALTER TABLE "Object" ADD COLUMN     "location" TEXT NOT NULL DEFAULT E'no location',
ALTER COLUMN "image" SET DEFAULT E'no image',
ALTER COLUMN "model" SET DEFAULT E'no model';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "descrpition" TEXT NOT NULL DEFAULT E'no description',
ADD COLUMN     "model" TEXT NOT NULL DEFAULT E'no model';
