import { toast } from "sonner";
import { useActionFeedback } from "./hooks/use-action-feedback";
import { ActionState } from "./utils/to-action-state";

export function Form({
  action,
  children,
  actionState,
}: {
  action: (payload: FormData) => void;
  children: React.ReactNode;
  actionState: ActionState;
}) {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      toast.success(actionState.message);
    },
    onError: ({ actionState }) => {
      toast.error(actionState.message);
    },
  });
  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
}
