import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

import Experience from "./UI/Experience";

export default function CV({ EXPERIENCES = [] }) {
  const { t } = useTranslation();

  return (
    <motion.section
      id="cv"
      className="py-28 px-6 bg-slate-100 dark:bg-slate-900/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          {t("cv.eyebrow")}
        </p>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-16 leading-tight">
          {t("cv.title")}
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <Experience exp={exp} key={i} />
            ))}
          </div>

          <div className="sticky top-24">
            <div className="border border-slate-300 dark:border-slate-800 rounded-xl p-6 bg-slate-100 dark:bg-slate-900/30">
              <p className="text-slate-500 text-xs font-mono tracking-widest uppercase mb-3">
                {t("cv.downloadLabel")}
              </p>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {t("cv.downloadDescription")}
              </p>
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-cyan-400 text-slate-950 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-95"
              >
                <Download size={15} />
                {t("cv.downloadButton")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
