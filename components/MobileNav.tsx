import { sections } from "@/constants";

export default function MobileNav({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
}) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-md rounded-full z-50 md:hidden">
      <div className="flex p-2 space-x-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-2 rounded-full text-xs transition-colors ${
              activeSection === section.id
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {section.name.charAt(0)}
          </button>
        ))}
      </div>
    </div>
  );
}
