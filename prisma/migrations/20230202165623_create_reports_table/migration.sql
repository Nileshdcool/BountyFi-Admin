-- CreateEnum
CREATE TYPE "ReportSeverity" AS ENUM ('critical', 'high', 'medium', 'low', 'none');

-- CreateEnum
CREATE TYPE "ReportType" AS ENUM ('websites_and_applications', 'smart_contract', 'blockchain_dlt');

-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('reported', 'escalated', 'confirmed', 'paid', 'closed');

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "ReportType" NOT NULL,
    "severity" "ReportSeverity" NOT NULL,
    "status" "ReportStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
