export const homePath = "/";

export const ticketsPath = "/tickets";
export function ticketPath(ticketId: string) {
  return `${ticketsPath}/${ticketId}`;
}

export function ticketEditPath(ticketId: string) {
  return `${ticketsPath}/${ticketId}/edit`;
}
