import AccountSidebar from "@/components/layout/account/account-sidebar";
import AccountTopbar from "@/components/layout/account/account-topbar";
import AppSidebar from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "20rem",
            "--sidebar-width-icon": "4rem",
          } as React.CSSProperties
        }
      >
        <AccountSidebar />
        <div className="min-w-0 flex-1 min-h-screen">
          <AccountTopbar />
          <main>{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
