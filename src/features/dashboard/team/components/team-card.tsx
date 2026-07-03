import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

type TeamCardProps = {
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  imageUrl?: string  | null;
};

export default function TeamCard({
  firstName,
  lastName,
  position,
  email,
  imageUrl,
}: TeamCardProps) {
  return (
    <div
      className="flex flex-col items-center bg-surface rounded-3xl shadow-card px-11 py-10"
      style={{ backgroundImage: "url(/Pattern-bg.svg)" }}
    >
      <div className="rounded-full overflow-hidden">
        {imageUrl !== null ? <Image
          src={imageUrl!}
          width={110}
          height={110}
          alt="team-member"
        /> : <User className="size-[110px] bg-soft p-4"/>}
        
      </div>
      <div className="flex flex-col items-center mt-6">
        <span className="font-bold">
          {firstName} {lastName}
        </span>
        <span className="font-semibold text-sm text-dashboard-text/50 my-2">
          {position}
        </span>
      </div>
      <span className="text-dashboard-text/50 text-sm">{email}</span>
    </div>
  );
}
