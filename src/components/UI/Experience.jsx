export default function Experience({ exp }) {
  return (
    <div className="relative pl-7 border-l border-slate-300 dark:border-slate-800">
      <p className="text-slate-500 font-mono text-xs mb-1 tracking-wide">
        {exp.period}
      </p>

      <div className="flex items-center gap-2">
        <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
        <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base mb-0.5">
          {exp.role}
        </h3>
      </div>

      <a
        href={exp.company_link}
        className="inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-amber-400/70 text-sm mb-2">{exp.company}</p>
      </a>

      <p className="text-slate-500 text-sm leading-relaxed">{exp.desc}</p>
    </div>
  );
}
