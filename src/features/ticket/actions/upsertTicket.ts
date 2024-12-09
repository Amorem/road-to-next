"use server";

import { ticketPath, ticketsPath } from "@/app/paths";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpsertTicket(
  ticketId: string | undefined,
  actionState: { message: string },
  formData: FormData
) {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.upsert({
    where: {
      id: ticketId || "",
    },
    update: data,
    create: data,
  });

  revalidatePath(ticketsPath);
  if (ticketId) {
    redirect(ticketPath(ticketId));
  }
  return { message: "Ticket created" };
}
