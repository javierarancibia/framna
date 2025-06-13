import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {

  const res = await fetch(process.env.NEXT_PUBLIC_MOCKAPI_URL!, {
    next: { revalidate: 60 }, // SSG + ISR
  });

  if (!res.ok) {
    console.error("Failed to fetch projects:", res.statusText);
    return <div>Error loading projects</div>;
  }

  const projects = await res.json();

  return (
    <main>
      <Hero />
      <ProjectList projects={projects} admin={false} />
    </main>
  );
}
