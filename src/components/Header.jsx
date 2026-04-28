import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

import useDarkMode from "../hooks/DarkMode";
import LanguageSwitcher from "./UI/LanguageSwitcher.jsx";

export default function Header({ NAV_ITEMS = [] }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = [];

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4, rootMargin: "-80px 0px -20% 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-300/60 dark:border-slate-900 backdrop-blur-md bg-white dark:bg-slate-950/80"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="text-cyan-400 font-mono text-lg font-semibold tracking-tight select-none hover:text-cyan-300 transition-colors"
        >
          SP<span className="text-slate-600">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-sm tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0.5 after:left-0 after:h-px after:bg-cyan-400 after:transition-all after:duration-200 ${
                activeSection === id
                  ? "text-cyan-400 after:w-full"
                  : "text-slate-400 hover:text-slate-900 dark:text-slate-100 after:w-0"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 hidden md:inline-flex">
          <LanguageSwitcher></LanguageSwitcher>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="hidden md:inline-flex items-center justify-center p-1 rounded-mdtext-slate-500 dark:text-slate-100 cursor-pointer transition-colors duration-200"
            aria-label="Toggle dark mode"
            title="Cambia tema"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-slate-900 dark:text-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950/95 px-6 py-4 flex flex-col gap-4">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex items-center justify-between gap-2 px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lgtext-slate-500 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            <span className="flex items-center gap-2">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light mode" : "Dark mode"}
            </span>
          </button>
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left text-sm tracking-wide transition-colors duration-200 ${
                activeSection === id
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-slate-900 dark:text-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
          <LanguageSwitcher></LanguageSwitcher>
        </div>
      )}
    </motion.header>
  );
}
