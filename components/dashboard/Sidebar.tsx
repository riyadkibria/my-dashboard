// components/dashboard/Sidebar.tsx
import Link from "next/link";
import { Home, Users, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-background border-r h-screen p-6">
      <div className="font-bold text-xl mb-8">My Dashboard</div>
      <nav className="space-y-4">
        <Link href="/dashboard" className="flex items-center gap-3 text-sm">
          <Home size={18} /> Overview
        </Link>
        <Link href="/dashboard/users" className="flex items-center gap-3 text-sm">
          <Users size={18} /> Users
        </Link>
        <Link href="/dashboard/settings" className="flex items-center gap-3 text-sm">
          <Settings size={18} /> Settings
        </Link>
      </nav>
    </aside>
  );
}

// components/dashboard/Topbar.tsx
export function Topbar() {
  return (
    <header className="h-14 border-b px-6 flex items-center justify-between">
      <div className="text-sm font-semibold">Dashboard</div>
      <div className="text-xs opacity-60">Hello, Admin</div>
    </header>
  );
}

// components/dashboard/StatsCards.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4"> 
      {["Users", "Sales", "Active"].map((label) => (
        <Card key={label}>
          <CardHeader>
            <CardTitle className="text-sm">{label}</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">0</CardContent>
        </Card>
      ))}
    </div>
  );
}

// components/dashboard/UserTable.tsx
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";

export function UserTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Test User</TableCell>
          <TableCell>test@email.com</TableCell>
          <TableCell>active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
