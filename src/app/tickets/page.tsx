import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "../paths";

const TICKET_ICONS = {
	OPEN: "O",
	IN_PROGRESS: ">",
	DONE: "X",
};

export default function TicketsPage() {
	return (
		<div>
			{initialTickets.map((ticket) => {
				//console.log("@@@ DEBUG", ticketPath(ticket.id));
				return (
					<div key={ticket.id} className="flex gap-2 items-center">
						<div>{TICKET_ICONS[ticket.status]}</div>
						<h2 className="text-lg">{ticket.title}</h2>
						<Link href={ticketPath(ticket.id)} className="text-sm underline">
							view
						</Link>
					</div>
				);
			})}
		</div>
	);
}
