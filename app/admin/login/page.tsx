'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormData = {
  username: string;
  password: string;
};

function LoginPage() {
    const { register, handleSubmit } = useForm<FormData>();
    const router = useRouter();
    const [error, setError] = useState('');

    const onSubmit = async (data: FormData) => {
        const res = await signIn('credentials', {
            redirect: false,
            username: data.username,
            password: data.password,
        });

        if (res?.ok) {
            router.push('/admin');
            } else {
            setError('Credenciales inválidas');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-sm rounded bg-white p-8 shadow">
                <h1 className="mb-6 text-2xl font-bold">Admin Login</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">User</label>
                        <input
                        {...register('username')}
                        className="mt-1 w-full rounded border border-gray-300 p-2"
                        type="text"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                        {...register('password')}
                        className="mt-1 w-full rounded border border-gray-300 p-2"
                        type="password"
                        required
                        />
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
                    >
                        Login
                </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
