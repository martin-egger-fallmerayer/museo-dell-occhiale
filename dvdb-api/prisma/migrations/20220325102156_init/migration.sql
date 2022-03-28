-- CreateTable
CREATE TABLE "Project" (
    "name" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT E'no description',
    "model" TEXT NOT NULL DEFAULT E'no model',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Object" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT E'no image',
    "model" TEXT NOT NULL DEFAULT E'no model',
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT E'no location',
    "projectName" TEXT NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Object_name_key" ON "Object"("name");

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "Project"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
