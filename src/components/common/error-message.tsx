import { LucideIcon } from "lucide-react";
import React from "react";

type ErrorMessageProps = {
  text?: string;
  icon?: LucideIcon;
};

export default function ErrorMessage({
  text,
  icon: Icon,
}: ErrorMessageProps) {
  return (
    <>
      <div className="flex items-center mt-2">
        {!!Icon && <Icon className="text-destructive size-5 mr-1"/>}
        {!!text && (
          <p className={`text-destructive text-sm font-semibold`}>{text}</p>
        )}
      </div>
    </>
  );
}
