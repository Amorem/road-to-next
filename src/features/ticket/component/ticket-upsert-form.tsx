"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Ticket } from "@prisma/client";
import upsertTicket from "../actions/upsertTicket";
import { SubmitButton } from "@/components/form/submit-button";
import { useActionState } from "react";

export function TicketUpsertForm({ ticket }: { ticket?: Ticket }) {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    { message: "" }
  );
  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <SubmitButton label={ticket ? "Update" : "Create"} />

      {actionState.message}
    </form>
  );
}
