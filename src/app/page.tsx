import Link from "next/link";
import Heading from "@/components/heading";
import { ticketsPath } from "./paths";

export default function Homepage() {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading title="Homepage" description="Your home place to start" />

			<div className="flex flex-1 flex-col items-center">
				<Link href={ticketsPath}>Go to Tickets</Link>
			</div>
		</div>
	);
}
