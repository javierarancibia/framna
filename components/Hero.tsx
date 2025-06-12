import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {

    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="flex flex-col relative z-20">
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white hover:ring-gray-900/20">
                                Front End Developer
                            </div>
                        </div>
                        <div className="text-start">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                                I'm Javier
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-2xl bg-transparent ring-1 ring-white px-15 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                About Me
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div>
                        <div className="relative w-full sm:w-2/3 lg:w-3/5">
                            <Image
                                width={800}
                                height={600}
                                src="/placeholder.png"
                                alt="Hero Image"
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                />
                </div>
            </div>
        </div>
    );
}
