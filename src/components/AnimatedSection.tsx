"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedSection({
  children,
  active,
  align = "center",
  fastFadeOut = false,
}: {
  children: React.ReactNode;
  active: boolean;
  align?: "left" | "center" | "right";
  fastFadeOut?: boolean;
}) {
  // Parallax: move overlay slightly based on alignment and entrance
  const offset = align === "left" ? -80 : align === "right" ? 80 : 0;

  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key="section"
          initial={{ opacity: 0, y: 80, x: offset }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{
            opacity: 0,
            y: fastFadeOut ? -40 : -80,
            x: offset,
            transition: {
              duration: fastFadeOut ? 0.3 : 0.8,
              ease: fastFadeOut ? [0.4, 0, 1, 1] : [0.23, 1, 0.32, 1],
            },
          }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
