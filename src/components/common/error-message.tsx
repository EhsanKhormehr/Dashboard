import { LucideIcon } from "lucide-react";
import React from "react";

type ErrorMessageProps = {
  text?: string;
  icon?: LucideIcon;
  textClassName? : string,
  iconClassName? : string
};

export default function ErrorMessage({
  text,
  icon: Icon,
  textClassName,
  iconClassName
}: ErrorMessageProps) {
  return (
    <>
      <div className="flex items-center">
        {!!Icon && <Icon className={iconClassName ?? "text-destructive size-5 mr-1"}/>}
        {!!text && (
          <p className={textClassName ?? "text-destructive text-sm font-semibold"}>{text}</p>
        )}
      </div>
    </>
  );
}
