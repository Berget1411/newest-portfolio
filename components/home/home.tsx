"use client";
import { motion } from "motion/react";
import { VARIANTS_CONTAINER } from "./shared/motion-config";
import { IntroSection } from "./sections/intro-section";
import { ProjectsSection } from "./sections/projects/projects-section";
import { ProfessionalJourneySection } from "./sections/professional-journey/professional-journey-section";
import { BlogSection } from "./sections/blog/blog-section";
import { ConnectSection } from "./sections/connect/connect-section";

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <IntroSection />
      <ProjectsSection />
      <ProfessionalJourneySection />
      <BlogSection />
      <ConnectSection />
    </motion.main>
  );
}
