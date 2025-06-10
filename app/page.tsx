// src/app/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";

import VerticalProgressBar from "@/components/VerticalProgressBar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs: {
    hero: React.RefObject<HTMLElement | null>;
    about: React.RefObject<HTMLElement | null>;
    skills: React.RefObject<HTMLElement | null>;
    projects: React.RefObject<HTMLElement | null>;
    contact: React.RefObject<HTMLElement | null>;
  } = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-blue-900/10 text-gray-100 font-sans overflow-x-hidden">
      <VerticalProgressBar
        activeSection={activeSection}
        scrollToSection={(id: string) =>
          scrollToSection(id as keyof typeof sectionRefs)
        }
      />
      <MobileNav
        activeSection={activeSection}
        scrollToSection={(id: string) =>
          scrollToSection(id as keyof typeof sectionRefs)
        }
      />
      <Hero
        sectionRefs={sectionRefs}
        scrollToSection={(id: string) =>
          scrollToSection(id as keyof typeof sectionRefs)
        }
      />
      <About sectionRefs={sectionRefs} />
      <Skills sectionRefs={sectionRefs} />
      <Projects sectionRefs={sectionRefs} />
      <Contact sectionRefs={sectionRefs} />
      <StickyBar />
      <Footer />
    </main>
  );
}
