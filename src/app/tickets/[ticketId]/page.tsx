import { notFound } from "next/navigation";
import TicketItem from "@/features/ticket/component/ticket-item";
import { GetTicket } from "@/features/ticket/queries/getTicket";

export default async function TicketPage({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) {
  const ticketId = (await params).ticketId;
  const ticket = await GetTicket(ticketId);

  if (!ticket) {
    notFound();
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
