import Heading from "@/components/heading";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/component/ticket-item";

export default function TicketsPage() {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading title="Tickets" description="All your tickets at one place" />
			<div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
				{initialTickets.map((ticket) => {
					//console.log("@@@ DEBUG", ticketPath(ticket.id));
					return <TicketItem key={ticket.id} ticket={ticket} />;
				})}
			</div>
		</div>
	);
}
