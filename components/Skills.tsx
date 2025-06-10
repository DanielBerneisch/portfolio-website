import { skills } from "@/constants";
import { motion } from "framer-motion";
import Icon from "./Icon";

export default function Skills({
  sectionRefs,
}: {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
}) {
  return (
    <section
      id="skills"
      ref={sectionRefs.skills}
      className="min-h-screen py-24 bg-gray-900/50 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent opacity-20"></div>
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
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I specialize in. I&#39;m always learning and
            expanding my expertise to stay at the forefront of web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
              }}
              className="flex flex-col items-center group"
            >
              <div className=" bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 w-24 h-24 flex items-center justify-center mb-4 cursor-default">
                <div className="text-4xl">
                  <Icon
                    icon={[{ name: skill.icon }]}
                    className="w-10 h-10 text-white group-hover:!text-blue-400 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              <span className="text-gray-300 font-medium">{skill.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
