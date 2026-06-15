import AppSidebar from "@/components/layout/AppSidebar";
import AppTopBar from "@/components/layout/AppTopBar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar />
        <main>
          {/* <SidebarTrigger className="cursor-pointer" /> */}
          {children}
        </main>
        <AppTopBar />
      </div>
    </SidebarProvider>
  );
}
