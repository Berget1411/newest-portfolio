"use client";
import { useState } from "react";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { WORK_EXPERIENCE, EDUCATION, AWARDS } from "@/lib/data";
import { AnimatedSection } from "../../shared/animated-section";
import { ExperienceCard } from "./experience-card";
import {
  PROFESSIONAL_JOURNEY_VARIANTS,
  PROFESSIONAL_JOURNEY_TRANSITION,
} from "../../shared/motion-config";

const EXPERIENCE_TABS = [
  { title: "Experience", data: WORK_EXPERIENCE, type: "work" as const },
  { title: "Education", data: EDUCATION, type: "education" as const },
  { title: "Awards", data: AWARDS, type: "awards" as const },
];

export function ProfessionalJourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatedSection>
      <h3 className="mb-5 text-lg font-medium">Professional Journey</h3>
      <div>
        <div className="mb-4 flex space-x-2">
          {EXPERIENCE_TABS.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeIndex === index
                  ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                  : "hover:bg-zinc-150 bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-600"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="overflow-hidden">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={PROFESSIONAL_JOURNEY_TRANSITION}
            variants={PROFESSIONAL_JOURNEY_VARIANTS}
          >
            {EXPERIENCE_TABS.map((tab, index) => (
              <div key={index} className="flex flex-col space-y-2">
                {tab.data.map((item) => (
                  <ExperienceCard key={item.id} item={item} type={tab.type} />
                ))}
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </AnimatedSection>
  );
}
