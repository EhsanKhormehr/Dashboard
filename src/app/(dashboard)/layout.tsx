import AppSidebar from "@/components/layout/app-sidebar";
import AppTopBar from "@/components/layout/app-topbar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  if (currentUser?.role !== "ADMIN") {
    redirect("/account");
  }
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="min-w-0 flex-1 min-h-screen">
          <AppTopBar />
          <main className="min-w-0 p-3 md:p-5 lg:p-8">
            {/* <SidebarTrigger className="cursor-pointer" /> */}
            {children}
          </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
