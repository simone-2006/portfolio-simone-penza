import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer({ SOCIAL_LINKS }) {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="border-t border-slate-300/60 dark:border-slate-300 dark:border-slate-300/60 dark:border-slate-800/60 py-8 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-slate-500 text-sm font-mono">
          {t("footer.copyright")}
        </span>
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-slate-500 hover:text-amber-400 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
