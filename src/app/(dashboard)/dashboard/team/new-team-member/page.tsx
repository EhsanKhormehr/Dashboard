import PageHeader from "@/components/common/page-header";
import TeamForm from "@/features/dashboard/team/components/team-form";
import React from "react";

export default function NewTeamMember() {
  return (
    <div>
      <PageHeader title="Add Team Member" />
      <div className="mt-6 border bg-surface py-14 rounded-2xl">
        <TeamForm />
      </div>
    </div>
  );
}
