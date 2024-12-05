import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "../paths";

export default function TicketsPage() {
	return (
		<div>
			{initialTickets.map((ticket) => (
				<div key={ticket.id} className="flex gap-2 items-center">
					<h2 className="text-lg">{ticket.title}</h2>
					<Link href={ticketPath(ticket.id)} className="text-sm underline">
						view
					</Link>
				</div>
			))}
		</div>
	);
}
