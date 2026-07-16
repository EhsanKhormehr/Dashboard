import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
