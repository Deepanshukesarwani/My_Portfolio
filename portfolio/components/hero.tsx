"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/lib/data";
import { SocialIcon } from "./social-icon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between"
      >
        {/* Text Content */}
        <motion.div
          className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                {personalInfo.firstName}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-sm text-neutral-400 sm:text-base"
          >
            {personalInfo.age}, {personalInfo.location} |{" "}
            {personalInfo.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform === "email" ? undefined : "_blank"}
                rel={
                  link.platform === "email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
                aria-label={link.label}
              >
                <SocialIcon platform={link.platform} className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={itemVariants} className="relative flex-shrink-0">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
          <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-neutral-800 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <Image
              src={personalInfo.profileImage}
              alt="Profile picture"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
            />
          </div>
          {/* Decorative glow */}
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-neutral-700/20 to-transparent blur-xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
