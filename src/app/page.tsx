import Link from "next/link";
import { ticketsPath } from "./paths";

export default function Homepage() {
	return (
		<div>
			<h2 className="text-lg">Homepage</h2>
			<Link href={ticketsPath}>Go to Tickets</Link>
		</div>
	);
}
