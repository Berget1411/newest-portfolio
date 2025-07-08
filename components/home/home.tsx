"use client";
import { IntroSection } from "./sections/intro-section";
import { ProjectsSection } from "./sections/projects/projects-section";
import { ProfessionalJourneySection } from "./sections/professional-journey/professional-journey-section";
import { BlogSection } from "./sections/blog/blog-section";
import { ConnectSection } from "./sections/connect/connect-section";

export default function Personal() {
  return (
    <main className="space-y-24">
      <IntroSection />
      <ProjectsSection />
      <ProfessionalJourneySection />
      <BlogSection />
      <ConnectSection />
    </main>
  );
}
