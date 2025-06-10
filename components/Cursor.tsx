"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    interface MouseEventWithClient extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const mouseMove = (e: MouseEventWithClient) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = () => setIsHovering(true);
    const mouseLeave = () => setIsHovering(false);
    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", mouseMove);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, .cursor-hover"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
      el.addEventListener("mousedown", mouseDown);
      el.addEventListener("mouseup", mouseUp);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
        el.removeEventListener("mousedown", mouseDown);
        el.removeEventListener("mouseup", mouseUp);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.5 : 1,
        opacity: isClicking ? 0.7 : 1,
      }}
      transition={{ type: "spring", mass: 0.1 }}
    >
      <div
        className={`w-8 h-8 rounded-full ${
          isHovering ? "bg-blue-500" : " border-blue-500"
        } transition-colors duration-300 flex items-center justify-center`}
      >
        {/* <motion.span
          className="text-black text-xs font-bold"
          animate={{ scale: isHovering ? 1 : 0 }}
        >
          {isHovering ? "→" : ""}
        </motion.span> */}
      </div>
    </motion.div>
  );
}
