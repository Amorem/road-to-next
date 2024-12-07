import { getTickets } from "../queries/getTickets";
import TicketItem from "./ticket-item";

export async function TicketList() {
  const tickets = await getTickets();
  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
      {tickets.map((ticket) => {
        return <TicketItem key={ticket.id} ticket={ticket} isDetail />;
      })}
    </div>
  );
}
