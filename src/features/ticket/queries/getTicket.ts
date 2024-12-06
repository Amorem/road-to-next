"use server";

import { initialTickets } from "@/data";
import { Ticket } from "../types";

export async function GetTicket(ticketId: string): Promise<Ticket | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  return new Promise((resolve) => {
    resolve(ticket || null);
  });
}
