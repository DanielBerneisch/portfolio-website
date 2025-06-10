import { type RefObject } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./three/ThreeScene";
import Link from "next/link";

export default function Hero({
  sectionRefs,
  scrollToSection,
}: {
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
  scrollToSection: (id: string) => void;
}) {
  return (
    <section
      id="hero"
      ref={sectionRefs.hero}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-24 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl flex-1"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block">Hello, I&#39;m</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Daniel Berneisch
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I create engaging digital experiences with modern web technologies.
            Specializing in React, Next.js, and animations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/20"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              View My Work
            </Link>
            <Link
              href="/assets/CV-Daniel-Berneisch.pdf"
              target="_blank"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1"
              download="CV-Daniel-Berneisch.pdf"
            >
              Download CV
            </Link>
          </motion.div>
        </motion.div>

        <div className="flex-1 flex items-center justify-center  w-full h-72 md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-0">
          <ThreeScene />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="cursor-pointer animate-bounce select-none flex flex-col items-center text-blue-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-8 h-8 border-r-2 border-b-2 border-blue-400 rotate-45"></div>
        </button>
      </motion.div>
    </section>
  );
}
