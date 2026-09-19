"use client";

import { useTranslation } from "react-i18next";
import BlogShell from "../components/BlogShell";
import "../i18n/i18n";

export default function AboutPage() {
  const { t } = useTranslation();

  const stats = [
    ["6", t("about-stat-years")],
    ["50", t("about-stat-members")],
    ["200", t("about-stat-people")],
    ["30+", t("about-stat-industry")],
  ];

  const partnershipAreas = [
    {
      number: "01",
      title: t("about-area1-title"),
      items: [
        [t("about-area1-item1-title"), t("about-area1-item1-text")],
        [t("about-area1-item2-title"), t("about-area1-item2-text")],
        [t("about-area1-item3-title"), t("about-area1-item3-text")],
      ],
    },
    {
      number: "02",
      title: t("about-area2-title"),
      items: [
        [t("about-area2-item1-title"), t("about-area2-item1-text")],
        [t("about-area2-item2-title"), t("about-area2-item2-text")],
        [t("about-area2-item3-title"), t("about-area2-item3-text")],
      ],
    },
    {
      number: "03",
      title: t("about-area3-title"),
      items: [
        [t("about-area3-item1-title"), t("about-area3-item1-text")],
        [t("about-area3-item2-title"), t("about-area3-item2-text")],
        [t("about-area3-item3-title"), t("about-area3-item3-text")],
      ],
    },
  ];

  return (
    <BlogShell>
      <section className="grid gap-10 border-b-2 border-blue-dark pb-12 dark:border-white lg:grid-cols-[minmax(0,1.15fr)_minmax(310px,0.65fr)] lg:items-end lg:gap-16 lg:pb-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{t("about-us")}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">{t("about-headline")}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed sm:text-xl">{t("about-lead")}</p>
        </div>
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border-l-2 border-t-2 border-blue-dark dark:border-white">
          {stats.map(([value, label], index) => {
            const cornerClass = index === 0 ? "rounded-tl-xl" : index === 1 ? "rounded-tr-xl" : index === 2 ? "rounded-bl-xl" : "rounded-br-xl";
            return <div key={label} className={`border-b-2 border-r-2 border-blue-dark p-5 dark:border-white ${cornerClass}`}><dt className="text-3xl font-semibold sm:text-4xl">{value}</dt><dd className="mt-2 text-sm font-bold uppercase leading-tight tracking-[0.12em] opacity-70">{label}</dd></div>;
          })}
        </dl>
      </section>

      <section className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{t("about-mission-kicker")}</p><h2 className="mt-3 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">{t("about-mission-title")}</h2></div>
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
          <p>{t("about-mission-p1")}</p>
          <p>{t("about-mission-p2")}</p>
          <p>{t("about-mission-p3")}</p>
          <p>{t("about-mission-p4")}</p>
        </div>
      </section>

      <section className="border-y-2 border-blue-dark py-12 dark:border-white sm:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{t("about-working-kicker")}</p>
        <div className="mt-3 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">{t("about-working-title")}</h2><p className="max-w-md text-lg leading-relaxed opacity-75">{t("about-working-text")}</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {partnershipAreas.map((area) => <article key={area.number} className="rounded-xl border-2 border-blue-dark bg-white p-6 dark:border-white dark:bg-blue-dark sm:p-7"><p className="text-sm font-bold uppercase tracking-[0.14em] opacity-60">{area.number}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight">{area.title}</h3><div className="mt-7 divide-y-2 divide-blue-dark dark:divide-white">{area.items.map(([title, text]) => <div key={title} className="py-5 first:pt-0 last:pb-0"><h4 className="text-lg font-bold">{title}</h4><p className="mt-2 leading-relaxed opacity-80">{text}</p></div>)}</div></article>)}
        </div>
      </section>

      <section className="mt-16 rounded-xl border-2 border-blue-dark bg-blue-dark p-7 text-white dark:border-white dark:bg-white dark:text-blue-dark sm:mt-20 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-75">{t("about-partnerships-kicker")}</p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-2xl"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("about-partnerships-title")}</h2><p className="mt-3 text-lg leading-relaxed">{t("about-partnerships-text")}</p></div><a href="mailto:info@bitpolito.it?subject=BitPolito%20partnership" className="rounded-md border-2 border-white px-6 py-3 text-center text-base font-bold transition-all hover:bg-white hover:text-blue-dark dark:border-blue-dark dark:hover:bg-blue-dark dark:hover:text-white">{t("contact-team")}</a></div>
      </section>
    </BlogShell>
  );
}
