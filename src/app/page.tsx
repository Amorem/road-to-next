import Link from "next/link";
import { ticketsPath } from "./paths";

export default function Homepage() {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Homepage</h2>
				<p className="text-sm text-muted-foreground">
					Your home place to start
				</p>
			</div>
			<div className="flex flex-1 flex-col items-center">
				<Link href={ticketsPath}>Go to Tickets</Link>
			</div>
		</div>
	);
}
