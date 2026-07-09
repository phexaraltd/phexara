import AdminContent from "@/components/pages/AdminContent";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminContent />;
}
