import { useQuery } from "@tanstack/react-query";
import { getAllTeamMembers } from "./actions";

export const useGetAllTeamMembers = () => {
  return useQuery({
    queryKey: ["team"],
    queryFn: getAllTeamMembers,
  });
};
