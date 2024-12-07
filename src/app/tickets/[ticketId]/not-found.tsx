import Link from "next/link";
import { ticketsPath } from "@/app/paths";
import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";

export default function TicketNotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button asChild variant={"outline"}>
          <Link href={ticketsPath}>Go to Tickets</Link>
        </Button>
      }
    />
  );
}
