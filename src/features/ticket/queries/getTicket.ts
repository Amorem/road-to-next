"use server";

import { prisma } from "@/lib/prisma";
import { Ticket } from "../types";

export async function GetTicket(ticketId: string): Promise<Ticket | null> {
  return await prisma.ticket.findUnique({
    where: { id: ticketId },
  });
}
