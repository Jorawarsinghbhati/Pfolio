import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 flex items-center justify-center">
      <section className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-center justify-end w-full px-8 sm:px-16 lg:px-32">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-wide">
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Jorawar Singh</span>
          </h1>
          <h2 className="mt-4 text-3xl md:text-5xl text-gray-300 font-semibold">
            Web Developer 🚀
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            <span className="font-semibold text-gray-200">Malaviya National Institute of Technology</span> <br />
            Passionate about building scalable and user-friendly web applications.
          </p>
          <p className="mt-3 text-gray-500 text-lg">
            Specializing in{" "}
            <span className="text-blue-400 font-medium">React</span>,{" "}
            <span className="text-green-400 font-medium">Next.js</span>, and{" "}
            <span className="text-purple-400 font-medium">Tailwind CSS</span>.
          </p>

          {/* Tech Stack Badges */}
          <div className="sm:mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-600/80 text-white rounded-lg shadow-md backdrop-blur-md">
              React.js
            </span>
            <span className="px-4 py-2 bg-green-500/80 text-white rounded-lg shadow-md backdrop-blur-md">
              Next.js
            </span>
            <span className="px-4 py-2 bg-purple-500/80 text-white rounded-lg shadow-md backdrop-blur-md">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-yellow-500/80 text-black rounded-lg shadow-md backdrop-blur-md">
              Node.js
            </span>
          </div>

          {/* Call to Action */}
          <Link href="/Projects">
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              View My Work →
            </button>
          </Link>
        </div>

        {/* Right Side - Circular Image with Modern Glassmorphism */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[5px] shadow-lg">
            <div className="w-full h-full bg-black/60 rounded-full overflow-hidden flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl">
              <Image
                width={320}
                height={320}
                src="/jorawar_singh_bhati.jpeg"
                alt="Jorawar Singh"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
