"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Ticket } from "@prisma/client";
import { useTransition } from "react";
import { LucideLoader } from "lucide-react";
import upsertTicket from "../actions/upsertTicket";

export function TicketUpsertForm({ ticket }: { ticket?: Ticket }) {
  const [isPending, startTransition] = useTransition();

  function upsertTicketAction(formData: FormData) {
    startTransition(async function () {
      upsertTicket.bind(null, ticket?.id)(formData);
    });
  }

  return (
    <form action={upsertTicketAction} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />

      <Button type="submit" disabled={isPending}>
        {isPending && <LucideLoader className="mr-2 h-4 w-4 animate-spin" />}
        {ticket ? "Update" : "Create"}
      </Button>
    </form>
  );
}
