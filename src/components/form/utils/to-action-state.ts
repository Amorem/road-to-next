import { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
};

export function formErrorToActionState(
  error: unknown,
  formData?: FormData
): ActionState {
  if (error instanceof ZodError) {
    return {
      status: "ERROR",
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: "ERROR",
      message: error.message,
      payload: formData,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else {
    return {
      status: "ERROR",
      message: "An unknown error occured",
      payload: formData,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  }
}

export function toActionState(
  status: ActionState["status"],
  message: string
): ActionState {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: Date.now(),
  };
}
