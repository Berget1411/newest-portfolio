"use client";
import { AnimatedSection } from "../shared/animated-section";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useState, useEffect } from "react";
import Link from "next/link";

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
                Full-stack and AI developer, and Industrial Engineering &
                Management student at KTH. I&apos;m interested in software,
                applied AI and finance, breaking down complex problems into
                software solutions. Currently exploring a modern{" "}
                <Link
                  href="https://www.better-t-stack.dev/new?name=test-deploy&fe-w=next&rt=workers&db=postgres&sd=wrangler&dbs=neon&pay=polar&ex=ai,todo&add=biome,husky,turborepo&wd=wrangler"
                  target="_blank"
                  className="text-purple-500"
                >
                  tech stack
                </Link>{" "}
                alongside AI tools like{" "}
                <Link
                  href="https://mastra.ai/"
                  target="_blank"
                  className="text-emerald-500"
                >
                  Mastra{" "}
                </Link>
                and{" "}
                <Link
                  href="https://ai-sdk.dev/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Vercel AI SDK.
                </Link>
              </p>
            </AnimatedSection>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
