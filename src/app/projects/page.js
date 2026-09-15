"use client";

import BlogShell from "../components/BlogShell";
import projects from "../data/projects";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import { localizeContent } from "../data/localizedContent";

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
          return (
          <a key={project.slug} href={project.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-[270px] flex-col rounded-xl border-2 border-blue-dark bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-dark dark:border-white dark:bg-blue-dark">
            <div className="flex items-start justify-between"><span className="font-logo text-6xl italic leading-none">₿</span><span className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span></div>
            <div className="mt-auto"><p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-dark/70 dark:text-white/70">{localizedProject.category}</p><h2 className="mt-3 text-3xl font-semibold leading-tight">{localizedProject.title}</h2><p className="mt-4 text-lg leading-relaxed">{localizedProject.description}</p></div>
          </a>
        )})}
      </section>
    </BlogShell>
  );
}
