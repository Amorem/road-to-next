"use server";

import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { ticketsPath } from "@/app/paths";
import {
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";

export async function updateTicketStatus(id: string, status: TicketStatus) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    await prisma.ticket.update({
      where: { id },
      data: { status },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }

  revalidatePath(ticketsPath);
  return toActionState("SUCCESS", "Status updated");
}
