import { ActionState } from "./utils/to-action-state";

export function FieldError({
  actionState,
  name,
}: {
  actionState: ActionState;
  name: string;
}) {
  const message = actionState.fieldErrors[name]?.[0];
  if (!message) return null;
  return <span className="text-xs text-red-500">{message}</span>;
}
