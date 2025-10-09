import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="md:w-64 w-full bg-black text-white md:h-auto h-16 md:block">
        <Sidebar />
      </aside>

      {/* Content */}
      <section className="flex-1 p-4 overflow-x-auto">{children}</section>
    </main>
  );
}
