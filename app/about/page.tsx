import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
        <Navbar />
        <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0 container mx-auto">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                {/* Title */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-purple-600">
                        About Me
                    </p>
                    <h1 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:text-4xl font-semibold py-2">
                        Developer with an eye for design and a builder’s mindset
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-400">
                        I combine technical skills in React and Node.js with a strong
                        background in architecture and real-world business logic.
                    </p>
                    </div>
                </div>
                </div>

                {/* Image */}
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                    alt="Portfolio 3D Report"
                    width={400}
                    height={400}
                    src="/hero.png"
                    className="rounded-full object-cover"
                />
                </div>

                {/* Details and experience */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
                    <p>
                        I’ve been a front-end developer for several years, building apps
                        in React, Tailwind, and TypeScript — both as part of a fintech
                        team in the Netherlands and independently for clients and
                        personal projects.
                    </p>
                    <p className="mt-4">
                        Before tech, I worked over 7 years as a real estate appraiser
                        and earned my degree in architecture. That background sharpened
                        my eye for structure, clarity, and user-first design.
                    </p>

                    <ul role="list" className="mt-8 space-y-8 text-white">
                        <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-purple-600">
                            Front-End Development.
                            </strong>{" "}
                            I craft responsive, fast-loading, maintainable interfaces
                            using React, Next.js and Tailwind.
                        </span>
                        </li>
                        <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-purple-600">
                            Fullstack Experience.
                            </strong>{" "}
                            From API integration to authentication and content
                            management, I’ve built complete apps using Node.js and
                            external services like MockAPI or Firebase.
                        </span>
                        </li>
                        <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-purple-600">
                            Independent Projects.
                            </strong>{" "}
                            I’ve launched digital products, tools and ecommerce stores —
                            always looking to test ideas and ship value.
                        </span>
                        </li>
                    </ul>

                    <p className="mt-8">
                        Whether working in a team or solo, I care about clean code,
                        great UX, and shipping fast. Currently based in the Netherlands,
                        I collaborate and build with a global mindset.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-purple-600">
                        Let’s work together
                    </h2>
                    <p className="mt-6">
                        I’m open to be part of projects where I can bring
                        value through design-focused front-end development and solid
                        product thinking.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  );
}
