'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get(process.env.MOCKAPI_URL as string) 
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Error loading projects:', err));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="rounded bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <p className="text-sm text-gray-600">{project.description}</p>
          {project.image && (
            <img src={project.image} alt={project.name} className="mt-2 rounded" />
          )}
        </div>
      ))}
    </div>
  );
}
