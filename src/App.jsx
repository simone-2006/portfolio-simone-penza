import { motion } from "framer-motion";
import { Database } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { RiTailwindCssFill, RiSupabaseLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeJsx } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import CV from "./components/CV.jsx";
import Contatti from "./components/Contatti.jsx";
import Footer from "./components/Footer.jsx";

import { Analytics } from "@vercel/analytics/next";

const SKILL_ICONS = {
  frontend: [
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
  backend: [
    { name: "Node.js", icon: <FaNodeJs size={15} />, color: "#339933" },
    { name: "PHP", icon: <FaPhp size={15} />, color: "#777BB4" },
    { name: "Python", icon: <FaPython size={15} />, color: "#3776AB" },
  ],
  databaseDevops: [
    { name: "SQL", icon: <Database size={15} />, color: "lightgray" },
    { name: "Supabase", icon: <RiSupabaseLine size={15} />, color: "green" },
    { name: "Docker", icon: <FaDocker size={15} />, color: "#2496ED" },
    { name: "Git", icon: <FaGitAlt size={15} />, color: "#F05033" },
  ],
};

const EXPERIENCE_META = [
  {
    company: "Greenchemicals SRL",
    company_link: "https://www.greenchemicals.eu",
  },
  {
    company: "Voome Srl",
    company_link: "https://voome.com/it/",
  },
  {
    company: "ITIS Pino Hensemberger",
    company_link: "https://hensemberger.edu.it/",
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

export default function Portfolio() {
  const { t } = useTranslation();

  const navItems = [
    { id: "hero", label: "nav.home" },
    { id: "about", label: "nav.about" },
    { id: "skills", label: "nav.skills" },
    { id: "cv", label: "nav.cv" },
    { id: "contact", label: "nav.contacts" },
  ];

  const skillCategories = [
    {
      label: t("skills.categories.frontend"),
      skills: SKILL_ICONS.frontend,
    },
    {
      label: t("skills.categories.backend"),
      skills: SKILL_ICONS.backend,
    },
    {
      label: t("skills.categories.databaseDevops"),
      skills: SKILL_ICONS.databaseDevops,
    },
  ];

  const experienceContent = t("cv.experiences", { returnObjects: true });
  const experiences = EXPERIENCE_META.map((meta, index) => ({
    ...meta,
    ...experienceContent[index],
  }));

  return (
    <motion.div
      className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans antialiased transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Analytics />
      <Header NAV_ITEMS={navItems} />
      <Hero SOCIAL_LINKS={SOCIAL_LINKS} />
      <About />
      <Skills SKILL_CATEGORIES={skillCategories} />
      <CV EXPERIENCES={experiences} />
      <Contatti SOCIAL_LINKS={SOCIAL_LINKS} />
      <Footer SOCIAL_LINKS={SOCIAL_LINKS} />
    </motion.div>
  );
}
