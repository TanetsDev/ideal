/*
  Warnings:

  - You are about to alter the column `phone` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "name" SET DEFAULT 'Box user',
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE INTEGER;
