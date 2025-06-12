import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";

export default async function AdminDashboard() {

  const res = await fetch(process.env.NEXT_PUBLIC_MOCKAPI_URL!, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch projects:", res.statusText);
    return <div>Error loading projects</div>;
  }

  const projects = await res.json();

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <Hero />
      <ProjectList projects={projects} admin={false} />
    </main>
  );
}
