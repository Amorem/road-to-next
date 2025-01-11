"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setCookieByKey } from "@/actions/cookies";
import { ticketsPath } from "@/app/paths";
import { formErrorToActionState } from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";

export async function deleteTicket(ticketId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

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
