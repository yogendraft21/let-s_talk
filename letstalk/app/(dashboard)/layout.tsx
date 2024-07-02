import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import type { Metadata } from "next";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-60 sm:w-60 md:fixed md:inset-y-0 border-r-2">
        <Sidebar />
      </div>
          <main className="md:pl-60">
              <Navbar/>
        {children}
      </main>
    </div>
  );
}
