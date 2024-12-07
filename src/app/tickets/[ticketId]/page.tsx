import Link from "next/link";
import { ticketsPath } from "@/app/paths";
import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import TicketItem from "@/features/ticket/component/ticket-item";
import { GetTicket } from "@/features/ticket/queries/getTicket";

export default async function TicketPage({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) {
  const ticketId = (await params).ticketId;
  const ticket = await GetTicket(ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant={"outline"}>
            <Link href={ticketsPath}>Go to tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
