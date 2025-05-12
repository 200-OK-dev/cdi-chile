import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import SiloCard from "@/components/SiloCard"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <SiloCard 
        messageId="SHF-ID#-APL 9733"
        messageNumber={18754}
        title="REPRODUCTIVE CLEARANCE GRANT"
        subtitle="CONGRATULATIONS. YOU HAVE BEEN APPROVED FOR"
        description="CHILDBEARING STATUS FOR YEAR.\nPLEASE SEE YOUR DOCTOR"
        sender="MOD8 / SILO ADMIN"
      />
        {children}
      </main>
    </SidebarProvider>
  )
}
