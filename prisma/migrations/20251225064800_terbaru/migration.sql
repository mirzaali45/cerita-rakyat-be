-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "StatusCerita" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "avatar" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cerita" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT,
    "thumbnail" TEXT,
    "status" "StatusCerita" NOT NULL DEFAULT 'DRAFT',
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "kategoriId" TEXT NOT NULL,

    CONSTRAINT "cerita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scenes" (
    "id" TEXT NOT NULL,
    "urutan" INTEGER NOT NULL,
    "gambar" TEXT,
    "teks" TEXT NOT NULL,
    "audio" TEXT,
    "ceritaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scenes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizzes" (
    "id" TEXT NOT NULL,
    "pertanyaan" TEXT NOT NULL,
    "urutan" INTEGER NOT NULL DEFAULT 0,
    "ceritaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quizzes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pilihan_jawaban" (
    "id" TEXT NOT NULL,
    "teks" TEXT NOT NULL,
    "isBenar" BOOLEAN NOT NULL DEFAULT false,
    "quizId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pilihan_jawaban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasil_quiz" (
    "id" TEXT NOT NULL,
    "skor" INTEGER NOT NULL,
    "totalSoal" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "ceritaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hasil_quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progres" (
    "id" TEXT NOT NULL,
    "lastScene" INTEGER NOT NULL DEFAULT 1,
    "isSelesai" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "ceritaId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "progres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ceritaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_settings" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "app_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "kategori_nama_key" ON "kategori"("nama");

-- CreateIndex
CREATE INDEX "cerita_kategoriId_idx" ON "cerita"("kategoriId");

-- CreateIndex
CREATE INDEX "cerita_status_idx" ON "cerita"("status");

-- CreateIndex
CREATE INDEX "scenes_ceritaId_idx" ON "scenes"("ceritaId");

-- CreateIndex
CREATE UNIQUE INDEX "scenes_ceritaId_urutan_key" ON "scenes"("ceritaId", "urutan");

-- CreateIndex
CREATE INDEX "quizzes_ceritaId_idx" ON "quizzes"("ceritaId");

-- CreateIndex
CREATE INDEX "pilihan_jawaban_quizId_idx" ON "pilihan_jawaban"("quizId");

-- CreateIndex
CREATE INDEX "hasil_quiz_userId_idx" ON "hasil_quiz"("userId");

-- CreateIndex
CREATE INDEX "hasil_quiz_ceritaId_idx" ON "hasil_quiz"("ceritaId");

-- CreateIndex
CREATE INDEX "progres_userId_idx" ON "progres"("userId");

-- CreateIndex
CREATE INDEX "progres_ceritaId_idx" ON "progres"("ceritaId");

-- CreateIndex
CREATE UNIQUE INDEX "progres_userId_ceritaId_key" ON "progres"("userId", "ceritaId");

-- CreateIndex
CREATE INDEX "favorit_userId_idx" ON "favorit"("userId");

-- CreateIndex
CREATE INDEX "favorit_ceritaId_idx" ON "favorit"("ceritaId");

-- CreateIndex
CREATE UNIQUE INDEX "favorit_userId_ceritaId_key" ON "favorit"("userId", "ceritaId");

-- CreateIndex
CREATE UNIQUE INDEX "app_settings_key_key" ON "app_settings"("key");

-- AddForeignKey
ALTER TABLE "cerita" ADD CONSTRAINT "cerita_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "kategori"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scenes" ADD CONSTRAINT "scenes_ceritaId_fkey" FOREIGN KEY ("ceritaId") REFERENCES "cerita"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_ceritaId_fkey" FOREIGN KEY ("ceritaId") REFERENCES "cerita"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pilihan_jawaban" ADD CONSTRAINT "pilihan_jawaban_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quizzes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasil_quiz" ADD CONSTRAINT "hasil_quiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasil_quiz" ADD CONSTRAINT "hasil_quiz_ceritaId_fkey" FOREIGN KEY ("ceritaId") REFERENCES "cerita"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progres" ADD CONSTRAINT "progres_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progres" ADD CONSTRAINT "progres_ceritaId_fkey" FOREIGN KEY ("ceritaId") REFERENCES "cerita"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorit" ADD CONSTRAINT "favorit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorit" ADD CONSTRAINT "favorit_ceritaId_fkey" FOREIGN KEY ("ceritaId") REFERENCES "cerita"("id") ON DELETE CASCADE ON UPDATE CASCADE;
