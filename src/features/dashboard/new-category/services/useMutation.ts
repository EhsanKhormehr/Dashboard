import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CategoryFormValues } from "../types/schema"
import { createCategory } from "./actions"
import { toast } from "sonner"

export const useCreateCategory = ()=>{
    const queryClient  = useQueryClient()

    return useMutation({
        mutationFn : async (data:CategoryFormValues)=> {
            await createCategory(data)
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey : ["category"]}),
            toast.success("slm")
        }
    })
}