/*
  Warnings:

  - The `rating` column on the `Subject` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER[];
