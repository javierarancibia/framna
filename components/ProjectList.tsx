'use client';

import { useState } from 'react';
import Image from 'next/image';
import { isValidImageUrl } from '@/lib/utils';

type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
  skills?: string[];
};

export default function ProjectList({ projects, admin = false, }: { projects: Project[]; admin?: boolean;}) {
    const [items, setItems] = useState<Project[]>(projects);
    console.log(items)
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
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 pt-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
                { items.map((project) => (
                    <div key={project.id} className="p-4 max-w-sm border rounded-lg shadow-xl bg-gray-800 border-gray-700">
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
                        <h5 className="mb-2 text-2xl font-medium tracking-tight text-white pt-5">{project.name}</h5>

                        {
                            project.skills && project.skills.length > 0 && (
                                <div className="flex flex-wrap mt-2">
                                    {project.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 my-2"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )
                        }
                        <p className="mb-3 font-light text-gray-700 dark:text-gray-400">{`${project.description}`}</p>

                        {   admin && (
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
