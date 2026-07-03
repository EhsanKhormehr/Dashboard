import PageHeader from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import TeamWrapper from "@/features/dashboard/team/components/team-wrapper";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Team" />
        <Button
          type="button"
          className="cursor-pointer py-4.5 font-semibold"
          asChild
        >
          <Link href={"/dashboard/team/new-team-member"}>
            Add New Member
            <Plus className="size-5" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
        <TeamWrapper />
      </div>
    </div>
  );
}
