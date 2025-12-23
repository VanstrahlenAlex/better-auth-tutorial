import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

// Cargar variables de entorno
config();

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;