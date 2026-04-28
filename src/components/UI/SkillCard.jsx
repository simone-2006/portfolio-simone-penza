import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      key={skill.name}
      className="group border border-slate-300 dark:border-slate-800 hover:border-cyan-400/40 rounded-lg px-4 py-3 flex items-center gap-2.5 bg-slate-100 dark:bg-slate-900/30 hover:bg-slate-200 dark:hover:bg-slate-900/70 transition-all duration-200 cursor-default"
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 16px #22d3ee44",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <span
        className="text-slate-600 group-hover:text-cyan-400 transition-colors duration-200 shrink-0"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </span>
      <p className="text-slate-800 dark:text-slate-200 text-sm font-medium truncate">
        {skill.name}
      </p>
    </motion.div>
  );
}
