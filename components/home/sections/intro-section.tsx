"use client";
import { AnimatedSection } from "../shared/animated-section";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useState, useEffect } from "react";

export function IntroSection() {
  const [isGenerating, setIsGenerating] = useState(true);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    // Simulate AI generation delay
    const timer1 = setTimeout(() => {
      setIsGenerating(false);
    }, 2000); // 3 seconds of "generating"

    const timer2 = setTimeout(() => {
      setShowSummary(true);
    }, 2500); // Show summary after brief pause

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatedSection>
      <div className="flex-1">
        <div className="min-h-[72px]">
          {" "}
          {/* Fixed height container to prevent layout shift */}
          {isGenerating && (
            <div className="flex h-full items-center">
              <TextShimmer className="font-mono text-sm" duration={1}>
                Generating AI summary...
              </TextShimmer>
            </div>
          )}
          {showSummary && (
            <AnimatedSection>
              <p className="text-zinc-600 dark:text-zinc-400">
                Full-Stack Developer and Industrial Engineering student with
                hands-on experience in software, hackathons, and consulting.
                Passionate about AI, finance, and solving complex problems
                through innovative, collaborative work.
              </p>
            </AnimatedSection>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
