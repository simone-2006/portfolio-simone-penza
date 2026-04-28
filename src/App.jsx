import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ArrowDown,
  Code2,
  Terminal,
  Layers,
  GitBranch,
  Database,
  Globe,
  Send,
  Menu,
  X,
  Sun,
  Moon,
  Braces,
  Server,
  FileCode,
  Cpu,
} from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill, RiSupabaseLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeJsx } from "react-icons/bs";

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contatti" },
];

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 size={15} />, color: "orange" },
      { name: "CSS", icon: <FaCss3Alt size={15} />, color: "lightblue" },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript size={15} />,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill size={15} />,
        color: "#06B6D4",
      },
      { name: "JSX", icon: <BsFiletypeJsx size={15} />, color: "#61DAFB" },
      { name: "React", icon: <FaReact size={15} />, color: "#61DAFB" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={15} />, color: "#339933" },
      { name: "PHP", icon: <FaPhp size={15} />, color: "#777BB4" },
      { name: "Python", icon: <FaPython size={15} />, color: "#3776AB" },
    ],
  },
  {
    label: "Database & DevOps",
    skills: [
      { name: "SQL", icon: <Database size={15} />, color: "lightgray" },
      { name: "Supabase", icon: <RiSupabaseLine size={15} />, color: "green" },
      { name: "Docker", icon: <FaDocker size={15} />, color: "#2496ED" },
      { name: "Git", icon: <FaGitAlt size={15} />, color: "#F05033" },
    ],
  },
];

const EXPERIENCES = [
  {
    period: "Ottobre 2025 - Present",
    role: "IT technician and web developer (Desio MB)",
    company: "Greenchemicals SRL",
    company_link: "https://www.greenchemicals.eu",
    desc: "Presso Greenchemicals SRL ricopro il ruolo di IT Technician e Web Developer, contribuendo attivamente alla crescita dell'azienda nel settore informatico. Mi occupo della gestione e del supporto tecnico completo ai dipendenti, intervenendo su problematiche hardware, software e configurazioni di rete, oltre alla configurazione e manutenzione delle infrastrutture IT aziendali. Parallelamente, sono responsabile dello sviluppo di un sistema CRM interno avanzato, progettato per ottimizzare la gestione dei processi aziendali. Il gestionale consente una gestione completa dei clienti, la tracciatura delle visite commerciali con visualizzazione geolocalizzata, un sistema di reminder intelligenti e una sezione dedicata alla ricerca prodotti. Quest'ultima integra dati provenienti dal gestionale aziendale, tra cui quotazioni aggiornate, disponibilità di magazzino, ordini pendenti e stato delle commesse. Lo stack tecnologico utilizzato comprende HTML, PHP, JavaScript, Node.js, Tailwind CSS, SQL Server e Docker. Questa esperienza mi sta permettendo di approfondire concretamente il mondo della programmazione professionale, portandomi a esplorare tecnologie e framework moderni come React e Vite.js. In prospettiva, il mio obiettivo è guidare l'evoluzione del CRM verso un'architettura più moderna e scalabile, attraverso lo sviluppo di un frontend reattivo e performante basato su React e Vite.js, e l'integrazione di Supabase per una gestione del database più moderna, sicura e elgante. Questo rappresenterebbe un significativo miglioramento in termini di performance, manutenibilità e qualità complessiva del sistema.",
  },
  {
    period: "Settembre 2025",
    role: "Sviluppatore Web (Stage, Brugherio - MB)",
    company: "Voome Srl)",
    company_link: "https://voome.com/it/",
    desc: "Durante il mio stage presso Voome Srl, ho sviluppato un'applicazione web integrata con un database, che consente agli utenti di inserire e eseguire comandi JavaScript in tempo reale con un sistema di gestione utenti. Questa esperienza mi ha permesso di consolidare le competenze acquisite durante il percorso scolastico, applicandole in un contesto professionale reale, oltre ad apprendere nuove metodologie di sviluppo e best practices nel settore. Stack tecnologico: HTML, JavaScript, PHP, CSS e MySQL.",
  },
  {
    period: "2020-2025",
    role: "Studente di informatica presso ITIS Pino Hensemberger (MONZA - MB)",
    company: "ITIS Pino Hensemberger",
    company_link: "https://hensemberger.edu.it/",
    desc: "Durante il mio percorso scolastico ho imparato le basi dell'informatica e della programmazione, sviluppando progetti in vari linguaggi come C++, Python e Java. Ho acquisito anche compentenze in ambito web, realizzando siti e applicazioni semplici con HTML, CSS e backend PHP con database MySQL. Questa esperienza mi ha fornito una solida base teorica e pratica, stimolando la mia passione per lo sviluppo software e spingendomi a esplorare ulteriormente il mondo della programmazione.",
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    icon: <Github size={18} />,
    href: "https://github.com/simone-2006",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/simone-penza-604031388",
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    } else if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4, rootMargin: "-80px 0px -20% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
    // Qui potresti integrare un servizio di invio email reale come EmailJS, Formspree, o un backend personalizzato.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans antialiased transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* ── HEADER ── */}
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
                className={`text-sm tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:bg-cyan-400 after:transition-all after:duration-200 ${
                  activeSection === id
                    ? "text-cyan-400 after:w-full"
                    : "text-slate-400 hover:text-slate-900 dark:text-slate-100 after:w-0"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="hidden md:inline-flex items-center justify-center p-1 rounded-md text-slate-700 dark:text-slate-100 cursor-pointer transition-colors duration-200"
            aria-label="Toggle dark mode"
            title="Cambia tema"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

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
              className="flex items-center justify-between gap-2 px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-200"
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
          </div>
        )}
      </motion.header>

      {/* ── HERO ── */}
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
              <span className="text-slate-600 dark:text-slate-500">Penza</span>
            </motion.h1>
            <p className="text-xl text-slate-400 mb-2 font-light tracking-wide">
              Developer
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-sm">
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

        <div className="hidden md:flex flex-col items-center gap-2 text-slate-700 absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-xs font-mono tracking-[0.25em] uppercase">
            scroll
          </span>
          <ArrowDown size={13} className="animate-bounce" />
        </div>
      </motion.section>

      {/* ── ABOUT ── */}
      <motion.section
        id="about"
        className="py-32 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
            About
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
                Chi sono
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-base max-w-2xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Modi, corrupti!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus quae nemo asperiores reprehenderit molestiae
                  dignissimos fugiat neque voluptatem, animi dolor rem hic ipsa
                  temporibus? At fugiat, numquam quo, recusandae sit quisquam
                  unde ipsa esse fuga explicabo quam inventore sapiente rerum
                  repellendus error facilis alias voluptatem eligendi eius
                  incidunt! Animi error nobis vero laboriosam, dolorem
                  perferendis, vitae et, soluta dolore dolorum nisi deleniti
                  fuga ratione suscipit alias mollitia accusantium eos non
                  magnam numquam quae enim consequuntur. Laudantium voluptatum
                  iusto iure aliquid nisi quod iste eveniet sit, consequuntur
                  ullam commodi repudiandae autem omnis debitis minima ea
                  recusandae culpa quidem nostrum laboriosam provident molestiae
                  maxime. Veniam praesentium repellat dolor accusamus, pariatur
                  quo nesciunt nemo suscipit provident iure dicta non aperiam
                  molestiae ducimus aliquam blanditiis numquam quod quas nostrum
                  expedita quisquam enim quidem doloribus. Odio quaerat earum
                  temporibus tenetur nulla incidunt mollitia sapiente, quod
                  consectetur dicta quas ipsam at illum quisquam soluta placeat
                  quam, sint eveniet voluptatum qui, porro minus praesentium
                  necessitatibus! Quasi at dolorem, aut omnis libero consectetur
                  quas nesciunt quibusdam optio, alias culpa repudiandae? Veniam
                  adipisci quaerat voluptatibus eveniet non! A, cumque est
                  repellat ad debitis quia sint facere atque odio recusandae
                  dolore provident ipsam eaque placeat saepe earum vel explicabo
                  expedita!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SKILLS ── */}
      <motion.section
        id="skills"
        className="py-32 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Stack
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-16 leading-tight">
            Competenze
          </h2>

          <div className="space-y-12">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.label}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs font-mono tracking-[0.25em] uppercase text-slate-600">
                    {cat.label}
                  </span>
                  <div className="flex-1 h-px bg-slate-300 dark:bg-slate-800" />
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {cat.skills.map((skill) => (
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CV ── */}
      <motion.section
        id="cv"
        className="py-32 px-6 bg-slate-100 dark:bg-slate-900/30"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Curriculum
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-16 leading-tight">
            Esperienza
          </h2>

          <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
            <div className="space-y-10">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={i}
                  className="relative pl-7 border-l border-slate-300 dark:border-slate-800"
                >
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  <p className="text-slate-600 font-mono text-xs mb-1 tracking-wide">
                    {exp.period}
                  </p>
                  <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base mb-0.5">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.company_link}
                    className="inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-cyan-400/70 text-sm mb-2">
                      {exp.company}
                    </p>
                  </a>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="sticky top-24">
              <div className="border border-slate-300 dark:border-slate-800 rounded-xl p-6 bg-slate-100 dark:bg-slate-900/30">
                <p className="text-slate-500 text-xs font-mono tracking-widest uppercase mb-3">
                  Download
                </p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Scarica il CV completo.
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-cyan-400 text-slate-950 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-95"
                >
                  <Download size={15} />
                  Scarica CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── CONTACT ── */}
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
              Contatti
            </p>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              I miei contatti
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
                  {field === "name" ? "Nome" : "Email"}
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
                    field === "name" ? "Il tuo nome" : "tua@email.com"
                  }
                />
              </div>
            ))}
            <div>
              <label className="block text-slate-600 text-xs font-mono tracking-[0.2em] uppercase mb-2">
                Messaggio
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-700 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/10 transition-colors duration-200 resize-none"
                placeholder="Di cosa hai bisogno?"
              />
            </div>
            <motion.button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-slate-950 text-sm font-bold rounded hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-95"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.04 }}
            >
              {formSent ? (
                <span>Messaggio inviato ✓</span>
              ) : (
                <>
                  <Send size={14} />
                  Invia messaggio
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <motion.footer
        className="border-t border-slate-300/60 dark:border-slate-300 dark:border-slate-300/60 dark:border-slate-800/60 py-8 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-slate-700 text-sm font-mono">
            © 2026 Simone Penza
          </span>
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-slate-700 hover:text-cyan-400 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
