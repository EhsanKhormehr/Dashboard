"use client";
import ShopTitle from "@/components/common/shop-title";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  ticketStatusLabels,
  ticketStatusVariants,
} from "../../shared/lib/tickets-status";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { TicketStatus } from "../../shared/types/types";
import { useRouter } from "next/navigation";

type TicketDetailsHeaderProps = {
  subject: string;
  status: TicketStatus;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  role: "ADMIN" | "USER";
  user?: {
    id: string;
    userName: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
  };
};

const TicketDetailsHeader = ({
  subject,
  status,
  category,
  createdAt,
  updatedAt,
  id,
  role,
  user,
}: TicketDetailsHeaderProps) => {
  const router = useRouter();

  return (
    <div className="border-b flex items-center justify-between pb-5">
      <div>
        <ShopTitle title={`Subject : ${subject}`} />
        <div className="flex flex-col sm:flex-row sm:items-center my-1">
          <span className="font-medium text-sm text-dashboard-text/75">
            Ticket : {id}
          </span>
          <Badge className={`${ticketStatusVariants[status]} my-1 sm:mx-5`}>
            {ticketStatusLabels[status]}
          </Badge>
          <span className="font-medium text-sm text-dashboard-text/75">
            {category} Category
          </span>
        </div>

        {role === "ADMIN" && (
          <div className="flex flex-col sm:flex-row sm:items-center my-1">
            <span className="font-medium text-sm text-dashboard-text/75">
              User : {user?.firstName} {user?.lastName}
            </span>
            <span className="font-medium text-sm text-dashboard-text/75 sm:ml-5 ml-0">
              Email : {user?.email}
            </span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center my-3">
          <span className="text-xs text-muted-foreground">
            Created at : {new Date(createdAt).toLocaleDateString()}
          </span>
          <span className="text-xs text-muted-foreground sm:ml-5">
            Updated at : {new Date(updatedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <Button
        variant={"secondary"}
        className="cursor-pointer"
        type="button"
        onClick={() => router.push("/account/tickets")}
      >
        <ArrowLeft />
        Back
      </Button>
    </div>
  );
};

export default TicketDetailsHeader;
