import AppSidebar from "@/components/layout/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />

        <main>
          <SidebarTrigger className="cursor-pointer" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
