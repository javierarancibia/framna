'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

export default function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);
    console.log(projects)
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

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <div key={project.id} className="rounded bg-white p-4 shadow">
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p className="text-sm text-gray-600">{project.description}</p>
                    {project.image && <img src={project.image} alt={project.name} className="mt-2 rounded" />}

                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={() => handleDelete(project.id)}
                            className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
