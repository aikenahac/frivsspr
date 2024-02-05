/*
  Warnings:

  - Added the required column `semester` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "semester" INTEGER NOT NULL;
