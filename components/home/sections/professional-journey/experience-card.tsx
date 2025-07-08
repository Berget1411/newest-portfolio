"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogImage,
} from "@/components/ui/morphing-dialog";

interface ExperienceItem {
  id: string;
  title: string;
  undertitle: string;
  date: string;
  desc1: string;
  desc2?: string;
  image: string;
}

interface ExperienceCardProps {
  item: ExperienceItem;
  type: "work" | "education" | "awards";
  index?: number;
}

export function ExperienceCard({ item, index = 0 }: ExperienceCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Reset animation state when component mounts (for tab switches)
  useEffect(() => {
    setHasAnimated(false);
    const timer = setTimeout(() => setHasAnimated(true), 50 + index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={
        hasAnimated
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              },
            }
          : {}
      }
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: index * 0.05,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-30px" }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <MorphingDialog
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 24,
        }}
      >
        <MorphingDialogTrigger className="w-full">
          <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row items-start gap-4">
                <MorphingDialogImage
                  src={item.image}
                  alt={`${item.title} logo`}
                  className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <MorphingDialogTitle className="font-normal dark:text-zinc-100">
                        {item.undertitle}
                      </MorphingDialogTitle>
                      <MorphingDialogSubtitle className="text-zinc-500 dark:text-zinc-400">
                        {item.title}
                      </MorphingDialogSubtitle>
                    </div>
                    <p className="ml-4 text-right text-sm text-zinc-600 dark:text-zinc-400">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MorphingDialogTrigger>

        <MorphingDialogContainer>
          <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full max-w-[500px] flex-col overflow-hidden border border-zinc-950/10 bg-white sm:rounded-3xl dark:border-zinc-50/10 dark:bg-zinc-900">
            <MorphingDialogClose />

            <div className="p-6">
              <div className="mb-4 flex items-start gap-4">
                <MorphingDialogImage
                  src={item.image}
                  alt={`${item.title} logo`}
                  className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <MorphingDialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.undertitle}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="mt-1 text-lg text-zinc-700 dark:text-zinc-300">
                    {item.title}
                  </MorphingDialogSubtitle>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.date}
                  </p>
                </div>
              </div>

              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
                className="text-zinc-600 dark:text-zinc-300"
              >
                <div className="space-y-3">
                  <p>{item.desc1}</p>
                  {item.desc2 && <p>{item.desc2}</p>}
                </div>
              </MorphingDialogDescription>
            </div>
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </motion.div>
  );
}
