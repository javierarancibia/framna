'use client';

import { useState } from 'react';
import Image from 'next/image';
import { isValidImageUrl } from '@/lib/utils';

type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

export default function ProjectList({ projects, admin = false, }: { projects: Project[]; admin?: boolean;}) {
    const [items, setItems] = useState<Project[]>(projects);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`, {
                method: 'DELETE',
            });
            setItems((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            console.error('Error deleting project:', err);
        }
    };

    if (items.length === 0) {
        return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500">No projects found</p>
        </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-10 lg:max-w-none lg:grid-cols-3">
                { items.map((project) => (
                    <div key={project.id} className="rounded border p-4 shadow-sm">
                        <h2 className="text-xl font-semibold">{project.name}</h2>
                        <p className="mt-1 text-sm text-gray-600">{project.description}</p>

                        {project.image && (
                        <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded">
                            <Image
                                src={isValidImageUrl(project.image)}
                                alt={project.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        )}

                        {admin && (
                            <button
                                onClick={() => handleDelete(project.id)}
                                className="mt-4 rounded-md bg-red-500 px-10 py-1 text-white text-sm hover:bg-red-700 hover:cursor-pointer transition-colors duration-200"
                                title="Delete Project"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
