export const homePath = "/";

export const ticketsPath = "/tickets";
export function ticketPath(ticketId: string): string {
	return `${ticketsPath}/${ticketId}`;
}
