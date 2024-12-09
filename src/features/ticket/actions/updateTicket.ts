"use server";

import { ticketsPath } from "@/app/paths";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdateTicket(
  ticketId: string,
  formData: FormData
) {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });

  revalidatePath(ticketsPath);
  redirect(ticketsPath);
}
