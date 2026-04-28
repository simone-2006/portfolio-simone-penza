import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer({ SOCIAL_LINKS }) {
  return (
    <motion.footer
      className="border-t border-slate-300/60 dark:border-slate-300 dark:border-slate-300/60 dark:border-slate-800/60 py-8 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-slate-300 text-sm font-mono">
          © 2026 Simone Penza
        </span>
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
