/*
  Warnings:

  - You are about to drop the column `prerequsites` on the `Subject` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "prerequsites",
ADD COLUMN     "prerequisites" JSONB[];
