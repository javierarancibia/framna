'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
  category?: string;
};

export default function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const url = process.env.NEXT_PUBLIC_MOCKAPI_URL;
        if (!url) {
            console.error("Falta NEXT_PUBLIC_MOCKAPI_URL");
            return;
        }
        axios.get(url) 
        .then((res) => setProjects(res.data))
        .catch((err) => console.error('Error loading projects:', err));
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you would like to delete this project")) 
            return;
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`);
            setProjects((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            console.error("Error deleting project:", err);
        }
    };

    // If no projects are found, display a message
    if (projects.length === 0) {
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500">No Projects have been created</p>
        </div>;
    }

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            { projects.map((project) => (
              <div key={project.id} className="rounded border p-4 shadow-sm">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {project.description}
                </p>

                {project.image && (
                  <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    );
}

// <button
//     onClick={() => handleDelete(project.id)}
//     className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
// >
//     Eliminar
// </button>