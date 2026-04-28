import { useState } from "react";
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
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "flag-icons/css/flag-icons.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import CV from "./components/CV.jsx";
import Contatti from "./components/Contatti.jsx";
import Footer from "./components/Footer.jsx";

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
    icon: <FaGithub size={18} />,
    href: "https://github.com/simone-2006",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/simone-penza-604031388",
  },
];

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contatti" },
];

export default function Portfolio() {
  return (
    <motion.div
      className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans antialiased transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <Header NAV_ITEMS={NAV_ITEMS} />

      {/* ── HERO ── */}
      <Hero SOCIAL_LINKS={SOCIAL_LINKS} />

      {/* ── ABOUT ── */}
      <About />

      {/* ── SKILLS ── */}
      <Skills SKILL_CATEGORIES={SKILL_CATEGORIES} />

      {/* ── CV ── */}
      <CV EXPERIENCES={EXPERIENCES} />

      {/* ── CONTACT ── */}
      <Contatti SOCIAL_LINKS={SOCIAL_LINKS} />

      {/* ── FOOTER ── */}
      <Footer SOCIAL_LINKS={SOCIAL_LINKS} />
    </motion.div>
  );
}
