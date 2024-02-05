/*
  Warnings:

  - Changed the type of `related` on the `Subject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `prerequisites` on the `Subject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "related",
ADD COLUMN     "related" JSONB NOT NULL,
DROP COLUMN "prerequisites",
ADD COLUMN     "prerequisites" JSONB NOT NULL;
