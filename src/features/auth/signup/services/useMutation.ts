import { useMutation } from "@tanstack/react-query";
import { SignUpFormValues } from "../types/schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();
  
  return useMutation({
    mutationFn: async (data: SignUpFormValues) => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Sign failed.");
      }

      return result;
    },
    onSuccess: async () => {
      toast.success("Account created successfully.");
      router.push("/dashboard");
      router.refresh();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};
