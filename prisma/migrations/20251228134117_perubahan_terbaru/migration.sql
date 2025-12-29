/*
  Warnings:

  - You are about to drop the column `viewCount` on the `cerita` table. All the data in the column will be lost.
  - You are about to drop the `hasil_quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `progres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "hasil_quiz" DROP CONSTRAINT "hasil_quiz_ceritaId_fkey";

-- DropForeignKey
ALTER TABLE "hasil_quiz" DROP CONSTRAINT "hasil_quiz_userId_fkey";

-- DropForeignKey
ALTER TABLE "progres" DROP CONSTRAINT "progres_ceritaId_fkey";

-- DropForeignKey
ALTER TABLE "progres" DROP CONSTRAINT "progres_userId_fkey";

-- AlterTable
ALTER TABLE "cerita" DROP COLUMN "viewCount",
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "hasil_quiz";

-- DropTable
DROP TABLE "progres";

-- CreateTable
CREATE TABLE "cerita_views" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ceritaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cerita_views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cerita_views_userId_idx" ON "cerita_views"("userId");

-- CreateIndex
CREATE INDEX "cerita_views_ceritaId_idx" ON "cerita_views"("ceritaId");

-- CreateIndex
CREATE UNIQUE INDEX "cerita_views_userId_ceritaId_key" ON "cerita_views"("userId", "ceritaId");

-- CreateIndex
CREATE INDEX "progress_userId_idx" ON "progress"("userId");

-- CreateIndex
CREATE INDEX "progress_ceritaId_idx" ON "progress"("ceritaId");

-- CreateIndex
CREATE INDEX "quiz_results_userId_idx" ON "quiz_results"("userId");

-- CreateIndex
CREATE INDEX "quiz_results_ceritaId_idx" ON "quiz_results"("ceritaId");

-- AddForeignKey
ALTER TABLE "cerita_views" ADD CONSTRAINT "cerita_views_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cerita_views" ADD CONSTRAINT "cerita_views_ceritaId_fkey" FOREIGN KEY ("ceritaId") REFERENCES "cerita"("id") ON DELETE CASCADE ON UPDATE CASCADE;
