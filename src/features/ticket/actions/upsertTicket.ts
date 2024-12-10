"use server";

import { ticketPath, ticketsPath } from "@/app/paths";
import {
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
});

export default async function UpsertTicket(
  ticketId: string | undefined,
  actionState: { message: string },
  formData: FormData
) {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.ticket.upsert({
      where: {
        id: ticketId || "",
      },
      update: data,
      create: data,
    });
  } catch (error) {
    return formErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath);
  if (ticketId) {
    redirect(ticketPath(ticketId));
  }
  return toActionState("SUCCESS", "Ticket created");
}
