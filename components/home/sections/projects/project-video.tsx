import { XIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Project } from "@/lib/data";
import Image from "next/image";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogTitle,
  MorphingDialogDescription,
} from "@/components/ui/morphing-dialog";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-w-2xl rounded-2xl bg-white p-6 ring-1 shadow-xl ring-zinc-200/50 dark:bg-zinc-900 dark:ring-zinc-800/50">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <MorphingDialogTitle>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h2>
              </MorphingDialogTitle>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.date}
              </p>
            </div>

            {/* Project Image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder_image.svg"}
                alt={project.title}
                width={400}
                height={225}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Description */}
            <MorphingDialogDescription>
              <div className="space-y-4">
                <p className="text-zinc-700 dark:text-zinc-300">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div>
                  <h3 className="mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>

                {/* Dev Mode Badge */}
                {project.devMode && (
                  <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      🚧 This project is currently in development
                    </p>
                  </div>
                )}
              </div>
            </MorphingDialogDescription>
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-2 ring-1 shadow-lg ring-zinc-200/50 dark:bg-zinc-900 dark:ring-zinc-800/50"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
