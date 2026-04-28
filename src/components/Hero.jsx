import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero({ SOCIAL_LINKS = [] }) {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <motion.div className="max-w-6xl mx-auto w-full grid md:grid-cols-[3fr_2fr] gap-12 items-center relative">
        <motion.div>
          <p className="text-cyan-400 font-mono text-xs mb-6 tracking-[0.3em] uppercase">
            Ciao, sono
          </p>
          <motion.h1
            className="text-7xl md:text-9xl font-bold leading-none tracking-tighter mb-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-slate-900 dark:text-slate-50">Simone</span>
            <br />
            <span className="text-slate-600 dark:text-slate-300">Penza</span>
          </motion.h1>
          <p className="text-xl text-slate-400 mb-2 font-light tracking-wide">
            Developer
          </p>
          <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-sm">
            Sviluppo soluzioni digitali con un approccio moderno e pragmatico.
            Amo il codice pulito, le interfacce intuitive e le performance
            ottimali.
          </p>

          <motion.div
            className="flex items-center gap-5 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button
              onClick={() => scrollTo("skills")}
              className="px-6 py-3 bg-cyan-400 text-slate-950 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] active:scale-95"
            >
              Scopri di più
            </button>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-slate-600 hover:text-cyan-400 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div className="relative w-64 h-64 flex items-center justify-center">
            {/* Anelli ruotanti */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border border-slate-300 dark:border-slate-800" />
              <div className="absolute inset-5 rounded-full border border-slate-300/60 dark:border-slate-300" />
              <div className="absolute inset-10 rounded-full border border-slate-300 dark:border-slate-800/40" />
              <div className="absolute top-3 right-8 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <div className="absolute bottom-6 left-5 w-1.5 h-1.5 bg-cyan-400/40 rounded-full" />
              <div className="absolute top-1/2 -right-1 w-1 h-1 bg-cyan-400/60 rounded-full" />
            </motion.div>
            {/* Cerchio centrale statico */}
            <div className="absolute inset-16 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-700 flex items-center justify-center z-10">
              <span className="text-cyan-400 font-mono text-3xl font-bold">
                SP
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="hidden md:flex flex-col items-center gap-2 text-slate-300 absolute bottom-10 left-1/2 -translate-x-1/2">
        <span className="text-xs font-mono tracking-[0.25em] uppercase">
          scroll
        </span>
        <ArrowDown size={13} className="animate-bounce" />
      </div>
    </motion.section>
  );
}
