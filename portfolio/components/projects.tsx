"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

type Category = "personal" | "client";

export function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("personal");

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <section className="w-full py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">
          A collection of my work spanning personal experiments and client
          projects.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-8 flex gap-1 rounded-lg border border-neutral-800 bg-neutral-900/50 p-1 w-fit"
      >
        {(
          [
            { key: "personal" as const, label: "Personal Projects" },
            { key: "client" as const, label: "Client Work" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="contents"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                variants={cardVariants}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="col-span-2 flex h-40 items-center justify-center rounded-xl border border-dashed border-neutral-800">
            <p className="text-sm text-neutral-500">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.link || project.liveUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/80 sm:p-6"
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
    </a>
  );
}
