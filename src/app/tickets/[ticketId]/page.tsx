import { initialTickets } from "@/data";

type TicketPageProps = {
	params: { ticketId: string };
};

export default function TicketPage({ params }: TicketPageProps) {
	const ticket = initialTickets.find((item) => item.id === params.ticketId);

	if (!ticket) {
		return <div>Ticket not found</div>;
	}
	return (
		<div>
			<h2 className="text-lg">{ticket?.title}</h2>
			<p>{ticket?.content}</p>
		</div>
	);
}
