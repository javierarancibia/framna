import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import ProjectList from "@/components/ProjectList";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  const res = await fetch(process.env.NEXT_PUBLIC_MOCKAPI_URL!, {
    cache: "no-store",
  });
  const projects = await res.json();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/admin/login" });
          }}
        >
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Log Out
          </button>
        </form>
      </div>

      <div className="mb-4">
        <a
          href="/admin/projects/new"
          className="inline-block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          + Create New Project
        </a>
      </div>

      <ProjectList projects={projects} admin />
    </main>
  );
}
