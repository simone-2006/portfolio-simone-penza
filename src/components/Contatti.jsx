import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contatti({ SOCIAL_LINKS = [] }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="py-32 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
            {t("contact.eyebrow")}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
            {t("contact.title")}
          </h2>

          <div className="space-y-5">
            <a
              href="mailto:simone.penza06@gmail.com"
              className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
            >
              <Mail size={16} />
              <span className="text-sm">simone.penza06@gmail.com</span>
            </a>
            <div className="flex items-center gap-5 pt-1">
              {SOCIAL_LINKS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 text-slate-600 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "email"].map((field) => (
            <div key={field}>
              <label className="block text-slate-600 text-xs font-mono tracking-[0.2em] uppercase mb-2">
                {field === "name"
                  ? t("contact.form.name")
                  : t("contact.form.email")}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                required
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-700 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/10 transition-colors duration-200"
                placeholder={
                  field === "name"
                    ? t("contact.form.namePlaceholder")
                    : t("contact.form.emailPlaceholder")
                }
              />
            </div>
          ))}
          <div>
            <label className="block text-slate-600 text-xs font-mono tracking-[0.2em] uppercase mb-2">
              {t("contact.form.message")}
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-700 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/10 transition-colors duration-200 resize-none"
              placeholder={t("contact.form.messagePlaceholder")}
            />
          </div>
          <motion.button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-slate-950 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-95"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.04 }}
          >
            {formSent ? (
              <span>{t("contact.form.sent")} ✓</span>
            ) : (
              <>
                <Send size={14} />
                {t("contact.form.submit")}
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
