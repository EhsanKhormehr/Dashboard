import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-24 w-full resize-y rounded-lg border border-input",
        "bg-field px-3 py-2",
        "text-sm text-field-foreground",
        "placeholder:text-field-placeholder",
        "shadow-xs",
        "outline-none",
        "transition-[color,background-color,border-color,box-shadow]",

        "hover:border-primary/40",

        "focus-visible:border-primary",
        "focus-visible:ring-2",
        "focus-visible:ring-primary/20",

        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        "aria-invalid:border-destructive",
        "aria-invalid:ring-destructive/20",

        className,
      )}
      {...props}
    />
  );
}

export { Textarea };