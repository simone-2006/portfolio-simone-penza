import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SkillCard from "./UI/SkillCard";

export default function Skills({ SKILL_CATEGORIES = [] }) {
  const { t } = useTranslation();

  return (
    <motion.section
      id="skills"
      className="py-28 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          {t("skills.eyebrow")}
        </p>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-16 leading-tight">
          {t("skills.title")}
        </h2>

        <div className="space-y-12">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-slate-600">
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-slate-300 dark:bg-slate-800" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {cat.skills.map((skill, i) => (
                  <SkillCard skill={skill} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
