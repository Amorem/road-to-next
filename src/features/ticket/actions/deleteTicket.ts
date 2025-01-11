"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ticketsPath } from "@/app/paths";
import { prisma } from "@/lib/prisma";
import { setCookieByKey } from "@/actions/cookies";
import { formErrorToActionState } from "@/components/form/utils/to-action-state";

export async function deleteTicket(ticketId: string) {
  try {
    await prisma.ticket.delete({
      where: {
        id: ticketId,
      },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }
  setCookieByKey("toast", "Ticket deleted");
  revalidatePath(ticketsPath);
  redirect(ticketsPath);
}
