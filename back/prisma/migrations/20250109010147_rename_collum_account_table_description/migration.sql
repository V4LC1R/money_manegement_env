/*
  Warnings:

  - You are about to drop the column `accountPlanId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `drescription` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `accountPlanId` on the `FinancialTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `accountPlanId` on the `Parcel` table. All the data in the column will be lost.
  - You are about to drop the column `accountPlanId` on the `Recurrence` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `FinancialTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Parcel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Recurrence` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_accountPlanId_fkey";

-- DropForeignKey
ALTER TABLE "FinancialTransaction" DROP CONSTRAINT "FinancialTransaction_accountPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Parcel" DROP CONSTRAINT "Parcel_accountPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Recurrence" DROP CONSTRAINT "Recurrence_accountPlanId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "accountPlanId",
DROP COLUMN "drescription",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "description" VARCHAR(512) NOT NULL;

-- AlterTable
ALTER TABLE "FinancialTransaction" DROP COLUMN "accountPlanId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Parcel" DROP COLUMN "accountPlanId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Recurrence" DROP COLUMN "accountPlanId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Recurrence" ADD CONSTRAINT "Recurrence_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "AccountPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "AccountPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "AccountPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialTransaction" ADD CONSTRAINT "FinancialTransaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "AccountPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
