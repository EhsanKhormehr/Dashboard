import AccountSidebar from "@/components/layout/account/account-sidebar";
import AccountTopbar from "@/components/layout/account/account-topbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { redirect } from "next/navigation";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = async({ children }: LayoutProps) => {
  const currentUser= await getCurrentUser()
  if (currentUser?.role === "ADMIN") {
    redirect("/dashboard")
  }
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "15rem",
          "--sidebar-width-icon": "4rem",
        } as React.CSSProperties
      }
    >
      <AccountSidebar />
      <div className="min-w-0 flex-1 min-h-screen">
        <AccountTopbar />
        <main className="p-2 md:p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
