// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const adminEmails = [
    "faysalmohammed.shah@gmail.com",
    "zisan19393871@gmail.com",
    "estiakahmed898@gmail.com",
  ];

  for (const email of adminEmails) {
    await prisma.user.upsert({
      where: { email },
      update: { role: "ADMIN", status: "ACTIVE" },
      create: { email, role: "ADMIN", status: "ACTIVE" },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
