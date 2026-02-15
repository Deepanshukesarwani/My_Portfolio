"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Projects() {

  return (
    <section className="w-full py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Personal and Client Works
        </h2>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">
          A collection of my work spanning personal experiments and client
          projects.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            variants={cardVariants}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}

        {projects.length === 0 && (
          <div className="col-span-2 flex h-40 items-center justify-center rounded-xl border border-dashed border-neutral-800">
            <p className="text-sm text-neutral-500">
              No projects yet.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.a
      whileHover={{ scale: 1.02, borderColor: "#2F72C0" }}
      transition={{ duration: 0.3 }}
      href={project.link || project.liveUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-neutral-800 bg-accent/80 p-5 sm:p-6"
    >
      {/* Title & Links */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-neutral-100 sm:text-lg">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.link && (
            <Github className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-neutral-300" />
          )}
          {project.liveUrl && (
            <ExternalLink className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-neutral-300" />
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
