import Heading from "@/components/heading";
import TicketItem from "@/features/ticket/component/ticket-item";
import { getTickets } from "@/features/ticket/queries/getTickets";

export default async function TicketsPage() {
  const tickets = await getTickets();
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {tickets.map((ticket) => {
          return <TicketItem key={ticket.id} ticket={ticket} isDetail />;
        })}
      </div>
    </div>
  );
}
