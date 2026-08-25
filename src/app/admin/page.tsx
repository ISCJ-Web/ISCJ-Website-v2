import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin — ISCJ",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--surface)",
        paddingTop: "calc(140px + var(--banner-h))",
      }}
    >
      <AdminDashboard />
    </main>
  );
}
