import { Suspense } from "react";
import Heading from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/component/ticket-list";
import { CardCompact } from "@/components/card-compact";
import { TicketUpsertForm } from "@/features/ticket/component/ticket-upsert-form";
import { RedirectToast } from "@/components/redirect-toast";

export default function TicketsPage() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-y-8">
        <Heading title="Tickets" description="All your tickets at one place" />

        <CardCompact
          className="w-full max-w-[420px] self-center"
          title="Create Ticket"
          description="A new ticket will be created"
          content={<TicketUpsertForm />}
        />

        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
      <RedirectToast />
    </>
  );
}
