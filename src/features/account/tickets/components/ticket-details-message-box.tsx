import { cn } from "@/lib/utils";
import React from "react";

const TicketDetailsMessageBox = ({ isSender }: { isSender: boolean }) => {
  return (
    <div className="mx-3">
      <div
        className={cn("flex", isSender ? "justify-end" : "justify-start")}
      >
        <div
          className={cn(
            "shadow-sm my-3 rounded-md p-4 max-w-[100%] sm:max-w-[70%] lg:max-w-[60%]",
            isSender ? "bg-primary text-primary-foreground" : "bg-muted ",
          )}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ex
            ratione impedit corporis accusamus deserunt perspiciatis officiis
            enim beatae labore adipisci eius optio, pariatur porro vero magnam
            cupiditate recusandae. Enim amet quos voluptas repellendus quae
            sequi voluptate? Quasi eveniet voluptatem accusantium nihil facilis
            assumenda ipsum pariatur dolorem exercitationem. Accusantium, alias.
          </p>
        </div>
      </div>
      <div className={cn("flex ",isSender ? "justify-end" : "justify-start")}>
        <span className={cn("text-xs font-semibold text-muted-foreground ",isSender && "mr-6")}>16.22</span>
        <span className={cn("text-xs font-semibold text-muted-foreground relative before:absolute before:block before:bg-muted-foreground before:size-1 before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2",!isSender && "ml-6")}>You</span>
      </div>
    </div>
  );
};

export default TicketDetailsMessageBox;
