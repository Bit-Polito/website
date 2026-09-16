"use client";

import BlogShell from "./components/BlogShell";
import FeaturedContent from "./components/FeaturedContent";
import HeroContentSlider from "./components/HeroContentSlider";
import Sponsors from "./components/Sponsors";
import blogPosts from "./data/blogPosts";
import events from "./data/events";
import projects from "./data/projects";
import { useTranslation } from "react-i18next";
import "./i18n/i18n";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <BlogShell>
      <section className="grid gap-10 py-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-stretch lg:gap-12 lg:py-10">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{t("home-kicker")}</p>
          <h1 className="mt-5 text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">{t("home-headline")}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl">{t("home-description")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured-heading" className="btn-d rounded-md px-6 py-3 text-base">{t("home-explore")} <span className="ml-2" aria-hidden="true">↓</span></a>
            <a href="https://tinyurl.com/bitpolito" target="_blank" rel="noopener noreferrer" className="btn-w rounded-md px-6 py-3 text-base">{t("home-join")} <span className="ml-2" aria-hidden="true">↗</span></a>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 border-y-2 border-blue-dark py-5 dark:border-white">
            <div><dt className="text-3xl font-semibold">50</dt><dd className="mt-1 text-sm font-bold uppercase tracking-[0.12em] opacity-70">{t("home-active")}</dd></div>
            <div className="border-x-2 border-blue-dark px-5 dark:border-white"><dt className="text-3xl font-semibold">200</dt><dd className="mt-1 text-sm font-bold uppercase tracking-[0.12em] opacity-70">Alumni</dd></div>
            <div className="pl-5"><dt className="text-3xl font-semibold">30</dt><dd className="mt-1 text-sm font-bold uppercase tracking-[0.12em] opacity-70">{t("home-sector")}</dd></div>
          </dl>
        </div>
        <HeroContentSlider events={events} posts={blogPosts} projects={projects} />
      </section>

      <section className="mt-14 border-y-2 border-blue-dark dark:border-white" aria-label="Partner di BitPolito">
        <Sponsors />
      </section>

      <FeaturedContent events={events} posts={blogPosts} projects={projects} />
    </BlogShell>
  );
}
