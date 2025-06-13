'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FormData = {
  username: string;
  password: string;
};

function LoginPage() {
    const { register, handleSubmit } = useForm<FormData>();
    const router = useRouter();

    const onSubmit = async (data: FormData) => {
        const res = await signIn('credentials', {
            redirect: false,
            username: data.username,
            password: data.password,
        });

        if (res?.ok) {
            router.push('/admin');
            } else {
            console.log('Invalid credentials');
        }
    };

    return (
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    alt="Portfolio 3D Report"
                    width={100}
                    height={100}
                    src="/hero.png"
                    className="rounded-full object-cover mx-auto"
                />
                <h2 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:text-4xl font-semibold py-2 text-center">
                    Admin Login
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-purple-500">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                            {...register('username')}
                            required
                            autoComplete="off"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-purple-500">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            {...register('password')}
                            type='password'
                            required
                            autoComplete="off"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-purple-300 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                        >
                            Log in
                        </button>
                    </div>
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        <Link href="/" className="font-semibold text-purple-500 hover:text-purple-500">
                            Home
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
