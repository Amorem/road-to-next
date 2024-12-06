import { initialTickets } from "@/data";

type TicketPageProps = {
	params: { ticketId: string };
};

export default async function TicketPage({ params }: TicketPageProps) {
	const { ticketId } = await params;
	const ticket = initialTickets.find((item) => item.id === ticketId);

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
