import { PrismaClient } from "@prisma/client";

// Prevents multiple client instances in dev (Next.js hot reload)
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
