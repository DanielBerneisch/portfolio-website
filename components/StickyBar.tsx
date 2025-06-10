import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function StickyBar() {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3 z-50">
      <div className="flex gap-1">
        <Link
          href="https://github.com/DanielBerneisch"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 "
          aria-label="Github"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/berneisch/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 "
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </Link>
      </div>
    </div>
  );
}
