"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Ticket } from "@prisma/client";
import upsertTicket from "../actions/upsertTicket";
import { SubmitButton } from "@/components/form/submit-button";

export function TicketUpsertForm({ ticket }: { ticket?: Ticket }) {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={ticket?.title} />
      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />
      <SubmitButton label={ticket ? "Update" : "Create"} />{" "}
    </form>
  );
}
