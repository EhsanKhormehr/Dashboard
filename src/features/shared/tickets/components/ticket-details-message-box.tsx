import { cn } from "@/lib/utils";
import React from "react";
import { TicketMessage } from "../../../../../generated/prisma/browser";

type TicketDetailsMessageBoxProps = {
  message: TicketMessage;
  role: "ADMIN" | "USER";
};

const TicketDetailsMessageBox = ({
  message,
  role,
}: TicketDetailsMessageBoxProps) => {
  return (
    <>
      {role === "USER" ? (
        <div className="mx-3">
          <div
            className={cn(
              "flex",
              message.isAdmin ? "justify-start" : "justify-end",
            )}
          >
            <div
              className={cn(
                "shadow-sm min-w-0 my-3 rounded-md p-4 max-w-[100%] sm:max-w-[70%] lg:max-w-[60%]",
                message.isAdmin
                  ? "bg-muted"
                  : "bg-primary text-primary-foreground",
              )}
            >
              <p className="break-all">{message.message}</p>
            </div>
          </div>
          <div
            className={cn(
              "flex ",
              message.isAdmin ? "justify-start" : "justify-end",
            )}
          >
            <span
              className={cn(
                "text-xs font-semibold text-muted-foreground ",
                !message.isAdmin && "mr-6",
              )}
            >
              {new Date(message.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
            <span
              className={cn(
                "text-xs font-semibold text-muted-foreground relative before:absolute before:block before:bg-muted-foreground before:size-1 before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2",
                message.isAdmin && "ml-6",
              )}
            >
              You
            </span>
          </div>
        </div>
      ) : (
        <div className="mx-3">
          <div
            className={cn(
              "flex",
              !message.isAdmin ? "justify-start" : "justify-end",
            )}
          >
            <div
              className={cn(
                "shadow-sm min-w-0 my-3 rounded-md p-4 max-w-[100%] sm:max-w-[70%] lg:max-w-[60%]",
                !message.isAdmin
                  ? "bg-muted"
                  : "bg-primary text-primary-foreground",
              )}
            >
              <p className="break-all">{message.message}</p>
            </div>
          </div>
          <div
            className={cn(
              "flex ",
              !message.isAdmin ? "justify-start" : "justify-end",
            )}
          >
            <span
              className={cn(
                "text-xs font-semibold text-muted-foreground ",
                message.isAdmin && "mr-6",
              )}
            >
              {new Date(message.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
            <span
              className={cn(
                "text-xs font-semibold text-muted-foreground relative before:absolute before:block before:bg-muted-foreground before:size-1 before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2",
                !message.isAdmin && "ml-6",
              )}
            >
              You
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketDetailsMessageBox;
