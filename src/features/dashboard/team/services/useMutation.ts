import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewTeamMemberFormValues } from "../types/schema";
import { createTeamMember } from "./actions";
import { toast } from "sonner";

export const useCreateTeamMember = ()=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : async(data : NewTeamMemberFormValues)=>{
            await createTeamMember(data)
        },
        onSuccess : async()=>{
            queryClient.invalidateQueries({queryKey : ["team"]})
            toast.success("New Team Member Created Successfully!")
        },
    })
}