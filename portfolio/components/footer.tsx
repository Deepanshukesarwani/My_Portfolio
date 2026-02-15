"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { SocialIcon } from "./social-icon";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-neutral-800 py-10"
    >
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-neutral-400">
          {personalInfo.name}
        </p>

        <div className="flex items-center gap-4">
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
              className="text-neutral-500 transition-colors duration-200 hover:text-white"
              aria-label={link.label}
            >
              <SocialIcon platform={link.platform} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
