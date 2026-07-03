"use client";
import React from "react";
import { useGetAllTeamMembers } from "../services/useQueries";
import TeamCard from "./team-card";

export default function TeamWrapper() {
  const { data } = useGetAllTeamMembers();
  return (
    <>
      {data?.map((member) => (
        <TeamCard
          key={member.id}
          firstName={member.firstName}
          lastName={member.lastName}
          position={member.position}
          email={member.email}
          imageUrl={member.imageUrl}
        />
      ))}
    </>
  );
}
