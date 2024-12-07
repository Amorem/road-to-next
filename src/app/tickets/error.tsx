"use client";

import { LucideCloudAlert } from "lucide-react";
import Placeholder from "@/components/placeholder";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <Placeholder
      label={error.message || "Something went wrong"}
      icon={<LucideCloudAlert />}
    />
  );
}
