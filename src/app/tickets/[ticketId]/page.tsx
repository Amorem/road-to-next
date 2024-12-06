import { ticketsPath } from "@/app/paths";
import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import Link from "next/link";

type TicketPageProps = {
	params: { ticketId: string };
};

export default async function TicketPage({ params }: TicketPageProps) {
	const { ticketId } = await params;
	const ticket = initialTickets.find((item) => item.id === ticketId);

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
		<div>
			<h2 className="text-lg">{ticket?.title}</h2>
			<p>{ticket?.content}</p>
		</div>
	);
}
