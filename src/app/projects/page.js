"use client";

import BlogShell from "../components/BlogShell";
import projects from "../data/projects";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import { localizeContent } from "../data/localizedContent";
import { Pickaxe, EyeOff, GraduationCap, KeyRound, ChartLine, PenTool, FlaskConical } from "lucide-react";

const projectIcons = {
  "mining-game": Pickaxe,
  "silent-payments": EyeOff,
  "bitpolito-academy": GraduationCap,
  "seed-signer": KeyRound,
  "bitcoin-data-analysis": ChartLine,
  "schnorr-signatures": PenTool,
  "bitcoin-testing-tools": FlaskConical,
};

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  return (
    <BlogShell>
      <section className="mt-8 sm:mt-10 lg:mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">BitPolito</p>
        <h1 className="mt-3 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">{t("projects")}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed sm:text-xl">{t("projects-intro")}</p>
      </section>

      <section aria-label={t("projects-list")} className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const localizedProject = localizeContent({ ...project, type: "project" }, i18n.resolvedLanguage || i18n.language);
          const Icon = projectIcons[project.slug];
          return (
          <article key={project.slug} className="flex min-h-[270px] flex-col rounded-xl border-2 border-blue-dark bg-white p-7 dark:border-white dark:bg-blue-dark">
            <Icon className="h-12 w-12" strokeWidth={1.5} aria-hidden="true" />
            <div className="mt-auto pt-8"><p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-dark/70 dark:text-white/70">{localizedProject.category}</p><h2 className="mt-3 text-3xl font-semibold leading-tight">{localizedProject.title}</h2><p className="mt-4 text-lg leading-relaxed">{localizedProject.description}</p></div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-2 rounded-full border-2 border-blue-dark px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-dark dark:border-white dark:focus-visible:outline-white ${index === 0 ? "bg-blue-dark text-white hover:bg-transparent hover:text-blue-dark dark:bg-white dark:text-blue-dark dark:hover:bg-transparent dark:hover:text-white" : "hover:bg-blue-dark hover:text-white dark:hover:bg-white dark:hover:text-blue-dark"}`}>
                  {t(`project-link-${link.type}`)}<span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        )})}
      </section>
    </BlogShell>
  );
}
