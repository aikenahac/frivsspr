/*
  Warnings:

  - You are about to drop the column `info` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `prerequisites` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `related` on the `Subject` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SubjectType" AS ENUM ('Mandatory', 'Disciplinary', 'Directionary', 'Common');

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "info",
DROP COLUMN "prerequisites",
DROP COLUMN "related",
ADD COLUMN     "code" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "notTaught" BOOLEAN,
ADD COLUMN     "points" INTEGER,
ADD COLUMN     "type" "SubjectType" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Subject_id_seq";

-- CreateTable
CREATE TABLE "_SubjectPrerequisites" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SubjectRelated" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectPrerequisites_AB_unique" ON "_SubjectPrerequisites"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectPrerequisites_B_index" ON "_SubjectPrerequisites"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectRelated_AB_unique" ON "_SubjectRelated"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectRelated_B_index" ON "_SubjectRelated"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- AddForeignKey
ALTER TABLE "_SubjectPrerequisites" ADD CONSTRAINT "_SubjectPrerequisites_A_fkey" FOREIGN KEY ("A") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectPrerequisites" ADD CONSTRAINT "_SubjectPrerequisites_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectRelated" ADD CONSTRAINT "_SubjectRelated_A_fkey" FOREIGN KEY ("A") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectRelated" ADD CONSTRAINT "_SubjectRelated_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
