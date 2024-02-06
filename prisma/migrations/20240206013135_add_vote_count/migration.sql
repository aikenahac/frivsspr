/*
  Warnings:

  - You are about to drop the column `rating` on the `Subject` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "rating",
ADD COLUMN     "ratings" INTEGER[];
