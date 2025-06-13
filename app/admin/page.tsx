import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import ProjectList from "@/components/ProjectList";
import Navbar from "@/components/Navbar";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  const res = await fetch(process.env.NEXT_PUBLIC_MOCKAPI_URL!, {
    cache: "no-store",
  });
  const projects = await res.json();

  return (
    <main>
        <Navbar />
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
                <form
                    className="flex justify-end"
                    action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/admin/login" });
                    }}
                >
                    <button
                        type="submit"
                        className="text-white hover:cursor-pointer transition-colors duration-200 bg-red-500 px-4 py-2 rounded-md text-sm font-semibold"
                    >
                        Log Out
                    </button>
                </form>
                <h1 className="text-3xl font-bold text-4xl text-center text-white">Admin Dashboard</h1>
                <div className="mb-4 mx-auto max-w-2xl text-center mt-2">
                    <a
                        href="/admin/projects/new"
                        className="inline-block rounded bg-purple-800 px-4 py-2 text-white hover:bg-purple-700"
                    >
                        + Create New Project
                    </a>
                </div>
        </div>

        <ProjectList projects={projects} admin />
    </main>
  );
}
