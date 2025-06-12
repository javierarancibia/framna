import { redirect } from "next/navigation";
import { auth } from "@/auth";
import ProjectList from "@/components/ProjectList";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">Panel de Administración</h1>
      <ProjectList />
    </main>
  );
}
