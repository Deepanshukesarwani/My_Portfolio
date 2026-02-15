"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function getBadgeColor(type: "current" | "past" | "internship") {
  switch (type) {
    case "current":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "past":
      return "bg-neutral-500/10 text-neutral-400 border-neutral-500/20";
    case "internship":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  }
}

function getTypeLabel(type: "current" | "past" | "internship") {
  switch (type) {
    case "current":
      return "Current";
    case "past":
      return "Past";
    case "internship":
      return "Internship";
  }
}

export function Experience() {
  return (
    <section className="w-full py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Experience
        </h2>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">
          Here&apos;s a timeline of my professional journey, showcasing my roles
          and contributions.
        </p>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative mt-10 space-y-0"
      >
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-neutral-800 md:left-[23px]" />

        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            variants={itemVariants}
            className="relative pl-12 pb-10 last:pb-0 md:pl-14"
          >
            {/* Timeline dot */}
            <div className="absolute left-[15px] top-1.5 h-[10px] w-[10px] rounded-full border-2 border-neutral-700 bg-neutral-900 md:left-[19px]" />

            {/* Card */}
            <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/80 sm:p-6">
              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {exp.role}
                    </h3>
                    <span className="text-neutral-500">•</span>
                    <span className="text-sm font-medium text-neutral-300 sm:text-base">
                      {exp.company}
                    </span>
                  </div>

                  {/* Links */}
                  {exp.links && exp.links.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-3">
                      {exp.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-neutral-400 transition-colors hover:text-white"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getBadgeColor(
                      exp.type
                    )}`}
                  >
                    {getTypeLabel(exp.type)}
                  </span>
                  <span className="whitespace-nowrap text-xs text-neutral-500 sm:text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {exp.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300 transition-colors hover:bg-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
