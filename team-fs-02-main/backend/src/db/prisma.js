import { PrismaClient } from '@prisma/client';

/**
 * Prisma reads DATABASE_URL from process.env automatically (see schema.prisma).
 * We intentionally do NOT override datasources here to avoid confusing startup errors.
 */
const prisma = new PrismaClient();

export default prisma;
