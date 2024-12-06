import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";
import Heading from "@/components/heading";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";
import { ticketPath } from "../paths";

const TICKET_ICONS = {
	OPEN: <LucideFileText />,
	IN_PROGRESS: <LucidePencil />,
	DONE: <LucideCircleCheck />,
};

export default function TicketsPage() {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading title="Tickets" description="All your tickets at one place" />
			<div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
				{initialTickets.map((ticket) => {
					//console.log("@@@ DEBUG", ticketPath(ticket.id));
					return (
						<Card key={ticket.id} className="w-full max-w-[420px]">
							<CardHeader>
								<CardTitle className="flex gap-x-2">
									<span>{TICKET_ICONS[ticket.status]}</span>
									<span className=" truncate">{ticket.title}</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<span className="line-clamp-3 whitespace-break-spaces">
									{ticket.content}
								</span>
							</CardContent>
							<CardFooter>
								<Link
									href={ticketPath(ticket.id)}
									className="text-sm underline"
								>
									view
								</Link>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
