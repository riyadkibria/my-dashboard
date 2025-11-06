// app/dashboard/page.tsx
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { UserTable } from "@/components/dashboard/UserTable";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 space-y-6">
          <StatsCards />
          <UserTable />
        </main>
      </div>
    </div>
  );
}
