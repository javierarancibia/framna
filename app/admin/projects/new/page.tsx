'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type FormData = {
    name: string;
    description: string;
    image?: string;
};

export default function NewProjectPage() {
    const { register, handleSubmit } = useForm<FormData>();
    const router = useRouter();

    // Funtion to handle form submission to create new project
    const onSubmit = async (data: FormData) => {
        try {
            await axios.post(process.env.MOCKAPI_URL as string, data);
            router.push('/admin');
        } catch (error) {
            console.error('Error creating the project:', error);
        }
    };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="mb-6 text-2xl font-bold">New Project</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium">Nombre del proyecto</label>
                <input
                    {...register('name', { required: true })}
                    className="mt-1 w-full rounded border p-2"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Descripción</label>
                <textarea
                    {...register('description')}
                    className="mt-1 w-full rounded border p-2"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">URL de imagen (opcional)</label>
                <input
                    {...register('image')}
                    className="mt-1 w-full rounded border p-2"
                />
            </div>

            <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Create Project
            </button>
        </form>
    </div>
  );
}
