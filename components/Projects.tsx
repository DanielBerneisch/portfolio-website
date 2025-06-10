import { projects } from "@/constants";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects({
  sectionRefs,
}: {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
}) {
  return (
    <section
      id="projects"
      ref={sectionRefs.projects}
      className="min-h-screen py-24 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here are some of my recent projects. Each one was crafted with
            attention to detail and optimized for performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-b border-gray-700 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={18} className="mr-2" /> Code
                    </Link>
                  )}
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" /> Live Page
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
