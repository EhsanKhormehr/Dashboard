import AppSidebar from "@/components/layout/app-sidebar";
import AppTopBar from "@/components/layout/app-topbar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="min-w-0 flex-1 min-h-screen">
        <AppTopBar />
        <main className="min-w-0">
          {/* <SidebarTrigger className="cursor-pointer" /> */}
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
