"use client";
import { useMutation } from "@tanstack/react-query";
import { LoginFormValues } from "../types/schema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: LoginFormValues) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      return data;
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
  });
};
