import { sections } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function VerticalProgressBar({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
}) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-3 h-3 select-none cursor-pointer rounded-full transition-all ${
                activeSection === section.id
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-600 group-hover:bg-blue-400"
              }`}
            />
            <AnimatePresence>
              {activeSection === section.id && (
                <motion.span
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  {section.name}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
