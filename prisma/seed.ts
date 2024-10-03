import { faker } from "@faker-js/faker";
import {
  Prisma,
  PrismaClient,
  ReportSeverity,
  ReportStatus,
  ReportType,
} from "@prisma/client";
import random from "lodash/random";
import sample from "lodash/sample";
import times from "lodash/times";

const prisma = new PrismaClient();

const projects: string[] = [
  "Wallet Wonders",
  "Encrypted Exchange",
  "Hash Hacienda",
  "Public Key Party",
  "Satoshi Boulevard",
  "Key Keepers",
  "Big-Endians",
  "Small-Endians",
];

const MAX_REPORTS_PER_USER = 16 as const;
const MAX_USERS_COUNT = 1024 as const;
const MIN_USERS_COUNT = 512 as const;

async function main() {
  await createProjects();
  await createUsers();
  await createReports();
}

function createProjects() {
  return prisma.project.createMany({
    data: projects.map((name) => ({
      name,
    })),
  });
}

function createUsers() {
  return prisma.user.createMany({
    data: times(random(MIN_USERS_COUNT, MAX_USERS_COUNT), () => ({
      email: faker.internet.exampleEmail(),
    })),
  });
}

async function createReports() {
  const [projects, users] = await prisma.$transaction([
    prisma.project.findMany({
      select: {
        id: true,
      },
    }),
    prisma.user.findMany({
      select: {
        id: true,
      },
    }),
  ]);

  const reports: Prisma.ReportCreateManyInput[] = [];

  for (const { id: userId } of users) {
    times(random(MAX_REPORTS_PER_USER), () => {
      const projectId = sample(projects.map(({ id }) => id));

      if (!projectId) {
        return;
      }

      reports.push({
        title: faker.lorem.sentence(),
        severity: randomReportSeverity(),
        type: randomReportType(),
        status: randomReportStatus(),
        createdAt: faker.date.past(3),
        userId,
        projectId,
      });
    });
  }

  return prisma.report.createMany({
    data: reports,
  });
}

function randomReportSeverity(): ReportSeverity {
  const allSeverities: ReportSeverity[] = Object.values(ReportSeverity);
  const severity = sample(allSeverities);

  if (severity) {
    return severity;
  }

  throw new Error("Invalid ReportSeverity enum");
}

function randomReportType(): ReportType {
  const allReportTypes: ReportType[] = Object.values(ReportType);

  const reportType = sample(allReportTypes);

  if (reportType) {
    return reportType;
  }

  throw new Error("Invalid ReportType enum");
}

function randomReportStatus(): ReportStatus {
  const allStatuses: ReportStatus[] = Object.values(ReportStatus);
  const status = sample(allStatuses);

  if (status) {
    return status;
  }

  throw new Error("Invalid ReportStatus enum");
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
