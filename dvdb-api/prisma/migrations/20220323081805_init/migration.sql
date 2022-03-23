-- CreateTable
CREATE TABLE "Project" (
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Object" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Object_name_key" ON "Object"("name");
