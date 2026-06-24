import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductFormValues } from "../types/schema";
import { createNewProduct } from "./actions";
import { toast } from "sonner";

export const useCreateNewProduct = () =>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : async (data : ProductFormValues)=>{
            createNewProduct(data)
        },
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey : ["products"]}),
            toast.success("New product created successfuly")
        }
    })
}