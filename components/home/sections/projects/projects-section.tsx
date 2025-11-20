"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon, GridIcon } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { AnimatedSection } from "../../shared/animated-section";
import { ProjectCard } from "./project-video";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Separate featured and non-featured projects
  const featuredProjects = PROJECTS.filter((project) => project.isFeatured);
  const nonFeaturedProjects = PROJECTS.filter((project) => !project.isFeatured);

  // For non-featured projects, show first 3 initially
  const displayedNonFeatured = nonFeaturedProjects.slice(0, 3);
  const additionalNonFeatured = nonFeaturedProjects.slice(3);
  const hasMoreProjects = nonFeaturedProjects.length > 3;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AnimatedSection>
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <>
          <h3 className="mb-5 text-lg font-medium">Featured Projects</h3>
          <motion.div
            className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-featured-${mounted}`}
                layout
                initial={{ opacity: 0, y: 15 }}
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
                transition={{
                  layout: { duration: 0.3, ease: "easeInOut" },
                }}
                className="space-y-2"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectCard project={project} />
                </div>
                <div className="px-1">
                  <h4 className="font-base font-[450] text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h4>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* Selected Projects Section */}
      <h3 className="mb-5 text-lg font-medium">Other Projects</h3>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Always show initial non-featured projects */}
        {displayedNonFeatured.map((project, index) => (
          <motion.div
            key={`${project.id}-${mounted}`}
            layout
            initial={{ opacity: 0, y: 15 }}
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
            transition={{
              layout: { duration: 0.3, ease: "easeInOut" },
            }}
            className="space-y-2"
          >
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectCard project={project} />
            </div>
            <div className="px-1">
              <h4 className="font-base font-[450] text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h4>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.shortDescription}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Show More/Less Button */}
        {hasMoreProjects && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: displayedNonFeatured.length * 0.05,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              layout: { duration: 0.3, ease: "easeInOut" },
            }}
            className="space-y-2"
          >
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="group aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 transition-all duration-300 hover:from-zinc-200 hover:to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 dark:hover:from-zinc-700 dark:hover:to-zinc-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-full flex-col items-center justify-center space-y-3">
                  <motion.div
                    animate={{
                      rotate: showAll ? 180 : 0,
                      scale: showAll ? 0.9 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {showAll ? (
                      <ChevronDownIcon className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
                    ) : (
                      <GridIcon className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
                    )}
                  </motion.div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {showAll
                        ? "Show Less"
                        : `+${additionalNonFeatured.length} More Projects`}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {showAll ? "Collapse view" : "See all projects"}
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>
            <div className="px-1">
              <h4 className="font-base font-[450] text-zinc-900 dark:text-zinc-50">
                {showAll ? "Show Less" : "More Projects"}
              </h4>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {showAll
                  ? "Click to show only top projects"
                  : `View all ${nonFeaturedProjects.length} projects in my portfolio`}
              </p>
            </div>
          </motion.div>
        )}

        {/* Additional non-featured projects with AnimatePresence */}
        <AnimatePresence>
          {showAll &&
            additionalNonFeatured.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
                transition={{
                  layout: { duration: 0.3, ease: "easeInOut" },
                }}
                className="space-y-2"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectCard project={project} />
                </div>
                <div className="px-1">
                  <h4 className="font-base font-[450] text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h4>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
}
