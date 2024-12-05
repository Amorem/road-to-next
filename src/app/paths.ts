export const homePath = "/";

export const ticketsPath = "/tickets";
export function ticketPath(ticketId: string) {
	return `${ticketPath}/${ticketId}}`;
}
