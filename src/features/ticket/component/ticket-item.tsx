import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ticketPath } from "@/app/paths";
import { TICKET_ICONS } from "@/features/ticket/constants";
import { Ticket } from "@/features/ticket/types";
import { LucideSquareArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type TicketItemProps = {
	ticket: Ticket;
	isDetail?: boolean;
};

export default function TicketItem({ ticket, isDetail }: TicketItemProps) {
	const detailButton = (
		<Button variant={"outline"} asChild size={"icon"}>
			<Link href={ticketPath(ticket.id)}>
				<LucideSquareArrowUpRight className="h-4 w-4" />
			</Link>
		</Button>
	);

	return (
		<div
			className={clsx("w-full flex gap-x-1", {
				"max-w-[580px]": isDetail,
				"max-w-[420px]": !isDetail,
			})}
		>
			<Card className="w-full ">
				<CardHeader>
					<CardTitle className="flex gap-x-2">
						<span>{TICKET_ICONS[ticket.status]}</span>
						<span className=" truncate">{ticket.title}</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<span
						className={clsx(" whitespace-break-spaces", {
							"line-clamp-3": !isDetail,
						})}
					>
						{ticket.content}
					</span>
				</CardContent>
			</Card>
			{isDetail ? null : (
				<div className="flex flex-col gap-y-1">{detailButton}</div>
			)}
		</div>
	);
}
