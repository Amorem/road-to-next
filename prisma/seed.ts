import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database",
    status: "IN_PROGRESS" as const,
  },
];

async function seed() {
  const t0 = performance.now();
  console.log("DB seed started");
  await prisma.ticket.deleteMany({});
  await prisma.ticket.createMany({
    data: tickets,
  });
  const t1 = performance.now();
  console.log(`DB seed finished (${(t1 - t0).toFixed(0)}ms)`);
}

seed();
