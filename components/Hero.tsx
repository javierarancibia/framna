import Image from "next/image";
import Navbar from "./Navbar";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container mx-auto px-6 flex relative py-5">
          <div className="flex flex-col relative z-20">
            <div className="hidden sm:mb-8 sm:flex">
              <div className="relative rounded-full px-5 py-1 text-xs ring-1 ring-purple-400 text-purple-400 bg-indigo-950 ">
                Front End Developer
              </div>
            </div>
            <div className="text-start">
              <h1 className="text-xl tracking-tight text-balance text-white sm:text-4xl tracking-tighter">
                I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Javier Arancibia</span>
              </h1>
              <h2 className="text-base font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:text-6xl font-semibold py-2 tracking-tighter">
                Front End Developer & Product Builder
              </h2>
              <p className="mt-8 text-2xl font-normal text-pretty text-slate-400">
                I build fast, responsive, and maintainable web apps using
                ReactJS, Tailwind CSS and Modern Tools. I turn ideas into clean,
                functional interfaces.
              </p>
              <div className="mt-10 flex items-start justify-start gap-x-6">
                <Image
                  width={100}
                  height={100}
                  src="/hero.png"
                  alt="Hero Image"
                  className="rounded-full object-cover"
                />
                <Link
                  href="/about"
                  className="rounded-2xl bg-transparent ring-1 ring-indigo-600 px-20 mt-7 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-500 duration-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  About Me
                </Link>
              </div>
              {/* Social Links */}
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <Link
                    href="https://github.com/javierarancibia"
                    target="_blank"
                    className="text-indigo-600 hover:text-gray-200 transition-colors duration-200 text-2xl"
                >
                  <FaGithub />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/javier-arancibia/"
                    target="_blank"
                    className="text-indigo-600 hover:text-gray-200 transition-colors duration-200 text-2xl"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
