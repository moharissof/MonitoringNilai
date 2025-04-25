-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Mahasiswa" (
    "id" TEXT NOT NULL,
    "nama" TEXT,
    "nim" TEXT,
    "prodi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Dosen" (
    "id" TEXT NOT NULL,
    "nama" TEXT,
    "nidn" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dosen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Dospem" (
    "id" TEXT NOT NULL,
    "dosenId" TEXT,
    "mahasiswaId" TEXT,
    "kategoriId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dospem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_nim_key" ON "public"."Mahasiswa"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_nidn_key" ON "public"."Dosen"("nidn");

-- AddForeignKey
ALTER TABLE "public"."Dospem" ADD CONSTRAINT "Dospem_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "public"."Dosen"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Dospem" ADD CONSTRAINT "Dospem_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "public"."Mahasiswa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
