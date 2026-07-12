import BackgroundShape from "@/components/common/auth-background-shape";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary h-screen relative overflow-hidden z-0 flex justify-center">
      <BackgroundShape />
      {children}
    </div>
  );
}
