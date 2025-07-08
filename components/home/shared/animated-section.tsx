import { motion } from "motion/react";
import { VARIANTS_SECTION, TRANSITION_SECTION } from "./motion-config";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      className={className}
    >
      {children}
    </motion.section>
  );
}
