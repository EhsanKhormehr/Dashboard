"use client";

import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LucideProvider } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { toast } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        const message =
          error instanceof Error ? error.message : "Something went wrong";
        toast.error(message);
      },
    },
  },
});

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <LucideProvider strokeWidth={1.3}>{children}</LucideProvider>
      </QueryClientProvider>
      <Toaster position="bottom-right" richColors closeButton />
    </ThemeProvider>
  );
};
