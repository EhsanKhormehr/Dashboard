import PageHeader from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import TeamCard from "@/features/dashboard/team/components/team-card";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const teamMembers = [
    {
        id : 1,
        name : "Jason Price",
        rule : "Admin",
        email : "janick_parisian@yahoo.com",
        image : "/team-1.png"
    },
    {
        id : 2,
        name : "Lenora Benson",
        rule : "Developer",
        email : "feil.wallace@kunde.us",
        image : "/team-2.png"
    },
    {
        id : 3,
        name : "Harriet King",
        rule : "UI-Designer",
        email : "nadia_block@hotmail.com",
        image : "/team-3.png"
    },
]

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
          <Link href={"/dashboard/new-team-member"}>
            Add New Member
            <Plus className="size-5" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
        {teamMembers.map((member)=>(
            <TeamCard key={member.id} name={member.name} rule={member.rule} email={member.email} image={member.image} />
        ))}
      </div>
    </div>
  );
}
