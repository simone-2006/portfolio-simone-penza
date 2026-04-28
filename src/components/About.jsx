import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="py-28 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          {t("about.eyebrow")}
        </p>

        <div className="grid md:grid-cols-[auto_1fr] gap-16 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative shrink-0">
              <div className="w-40 h-40 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                <span className="text-slate-600 font-mono text-4xl font-bold select-none">
                  SP
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-base max-w-2xl">
              <p>{t("about.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
