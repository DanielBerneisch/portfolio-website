import type { RefObject } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About({
  sectionRefs,
}: {
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
}) {
  return (
    <section
      id="about"
      ref={sectionRefs.about}
      className="min-h-screen flex flex-col justify-center overflow-hidden py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-square scale-120 rounded-2xl overflow-hidden border border-blue-500/30">
                <Image
                  src={"/images/profile.png"}
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>

              <motion.div
                className="absolute -bottom-20 -right-20 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl font-bold">2+</span>
                <p className="text-sm">Years Experience</p>
              </motion.div>

              <motion.div
                className="absolute -top-20 -left-20 bg-gray-800 border border-gray-700 py-3 px-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl font-bold">20+</span>
                <p className="text-sm">Projects</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m a passionate Frontend Developer with over 2 years of
              experience creating modern, responsive, and engaging web
              applications. My expertise lies in the React ecosystem, Next.js,
              TypeScript, and animation libraries like Framer Motion.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              I love writing clean, maintainable code and staying up-to-date
              with the latest web technologies. When I&apos;m not coding, you
              can find me learning new technologies, climbing in bouldering
              gyms, or enjoying a good book.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 cursor-default"
              >
                <span className="text-blue-400">Name:</span> Daniel Berneisch
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 cursor-default"
              >
                <span className="text-blue-400">Email:</span>{" "}
                da.berneisch@gmx.de
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 cursor-default"
              >
                <span className="text-blue-400">From:</span> Munich, Germany
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
