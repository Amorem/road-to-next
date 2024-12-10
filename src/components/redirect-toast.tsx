"use client";
import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";
import { useEffect } from "react";
import { toast } from "sonner";

export function RedirectToast() {
  useEffect(() => {
    async function showCookieToast() {
      const message = await getCookieByKey("toast");
      if (message) {
        toast.success(message);
        deleteCookieByKey("toast");
      }
    }
    showCookieToast();
  }, []);
  return null;
}
