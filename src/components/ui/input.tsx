import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-input",
        "bg-field px-3 py-2",
        "text-sm text-field-foreground",
        "placeholder:text-field-placeholder",
        "shadow-xs",
        "outline-none",
        "transition-[color,background-color,border-color,box-shadow]",
        "selection:bg-primary selection:text-primary-foreground",

        "hover:border-primary/40",

        "focus-visible:border-primary",
        "focus-visible:ring-2",
        "focus-visible:ring-primary/20",

        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        "aria-invalid:border-destructive",
        "aria-invalid:ring-destructive/20",

        "file:inline-flex",
        "file:h-7",
        "file:border-0",
        "file:bg-transparent",
        "file:text-sm",
        "file:font-medium",

        className,
      )}
      {...props}
    />
  );
}

export { Input };