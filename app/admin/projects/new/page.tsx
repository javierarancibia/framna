"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

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
      const url = process.env.NEXT_PUBLIC_MOCKAPI_URL;
      if (!url) {
        console.error("Missing NEXT_PUBLIC_MOCKAPI_URL env variable");
        return;
      }
      await axios.post(url, data);
      router.push("/admin");
    } catch (error) {
      console.error("Error creating the project:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-3xl font-bold text-4xl text-center text-white mt-10">Project Info</h1>

                <div className="mt-10">
                    <div className="my-5">
                        <label
                            htmlFor="name"
                            className="block text-sm/6 font-medium text-purple-600"
                        >
                            Project Name
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input
                                     {  ...register("name", { required: true}) }
                                    type="text"
                                    placeholder="Project Name"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <label
                            htmlFor="image"
                            className="block text-sm/6 font-medium text-purple-600"
                        >
                            Image Url (optional)
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input
                                    {  ...register("image", { required: true}) }
                                    type="text"
                                    placeholder="Image URL"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <label
                            htmlFor="description"
                            className="block text-sm/6 font-medium text-purple-600"
                        >
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                rows={3}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                defaultValue={""}
                                {  ...register("description", { required: true}) }
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="rounded-md bg-purple-600 w-full px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-300 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create Project
                    </button>
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        <a href="/admin" className="font-semibold text-white hover:text-blue-300">
                            Back to Admin Dashboard
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </form>
  );
}
