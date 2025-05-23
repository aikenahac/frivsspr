-- AlterTable
ALTER TABLE "_SubjectPrerequisites" ADD CONSTRAINT "_SubjectPrerequisites_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_SubjectPrerequisites_AB_unique";

-- AlterTable
ALTER TABLE "_SubjectRelated" ADD CONSTRAINT "_SubjectRelated_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_SubjectRelated_AB_unique";
