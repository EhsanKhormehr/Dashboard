import Image from "next/image";
import React from "react";

type TeamCardProps = {
  name: string;
  rule: string;
  email: string;
  image: string;
};

export default function TeamCard({ name, rule, email, image }: TeamCardProps) {
  return (
    <div
      className="flex flex-col items-center bg-surface rounded-3xl shadow-card px-11 py-10"
      style={{ backgroundImage: "url(/Pattern-bg.svg)" }}
    >
      <div className="rounded-full overflow-hidden">
        <Image src={image} width={110} height={110} alt="team-member" />
      </div>
      <div className="flex flex-col items-center mt-6">
        <span className="font-bold">{name}</span>
        <span className="font-semibold text-sm text-dashboard-text/50 my-2">
          {rule}
        </span>
      </div>
      <span className="text-dashboard-text/50 text-sm">
        {email}
      </span>
    </div>
  );
}
