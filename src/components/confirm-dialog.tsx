"use client";
import React, { cloneElement, useActionState, useState } from "react";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Form } from "./form/form";
import { SubmitButton } from "./form/submit-button";

type UseConfirmDialogProps = {
  title?: string;
  description?: string;
  action: () => void;
  trigger: React.ReactElement;
};

export function useConfirmDialog({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone.",
  action,
  trigger,
}: UseConfirmDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dialogTrigger = cloneElement(trigger as React.ReactElement<any>, {
    onClick: () => setIsOpen((state) => !state),
  });

  const [formAction] = useActionState(
    () => action,
    () => EMPTY_ACTION_STATE
  );

  function handleSuccess() {
    setIsOpen(false);
  }

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              action={formAction}
              actionState={EMPTY_ACTION_STATE}
              onSuccess={handleSuccess}
            >
              <SubmitButton label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialogTrigger, dialog];
}
