import { LucideLoader } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <LucideLoader className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
}
