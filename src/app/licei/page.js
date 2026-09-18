"use client";

import Image from "next/image";
import BlogShell from "../components/BlogShell";
import { pastSchoolVisits, upcomingSchoolVisits } from "../data/schoolVisits";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

function VisitCard({ visit, t }) {
  const content = (
    <article className="group h-full rounded-xl border-2 border-blue-dark bg-white p-6 transition-transform duration-200 hover:-translate-y-1 dark:border-white dark:bg-blue-dark sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold uppercase tracking-[0.14em]">
        <span>{visit.format === "Prossimamente" ? t("schools-coming") : visit.format === "Corso di 10 lezioni" ? t("schools-course-ten") : visit.format || t("schools-meeting")}</span>
        {visit.date && <span className="rounded-full border border-current px-3 py-1 text-xs normal-case tracking-normal opacity-70">{visit.date}</span>}
      </div>
      {visit.location && <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{visit.location}</p>}
      <h3 className="mt-8 text-3xl font-semibold leading-tight tracking-tight">{visit.school}</h3>
      {visit.description && <p className="mt-6 leading-relaxed">{visit.description}</p>}
      {visit.link && <p className="mt-7 text-sm font-bold uppercase tracking-[0.14em]">{t("schools-more")} <span aria-hidden="true">→</span></p>}
    </article>
  );

  return visit.link ? <a href={visit.link} target="_blank" rel="noreferrer" className="block h-full">{content}</a> : content;
}

function EmptyState({ children }) {
  return <p className="rounded-xl border-2 border-dashed border-blue-dark/35 p-6 text-lg leading-relaxed text-blue-dark/70 dark:border-white/35 dark:text-white/70">{children}</p>;
}

export default function LiceiPage() {
  const { t } = useTranslation();
  return (
    <BlogShell>
      <section className="grid gap-10 border-b-2 border-blue-dark pb-12 dark:border-white lg:grid-cols-[minmax(0,1.1fr)_minmax(330px,0.75fr)] lg:items-end lg:gap-16 lg:pb-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{t("schools-kicker")}</p>
          <h1 className="mt-5 text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">{t("schools-title")}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl">{t("schools-intro")}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border-2 border-blue-dark dark:border-white">
          <Image src="/chessboard/2025-02-20_Grafica-Bitcoin-al-Liceo-T3.png" alt="Locandina Bitcoin al Liceo di BitPolito" fill priority sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover" />
        </div>
      </section>

      <section className="mt-14 sm:mt-20" aria-labelledby="upcoming-school-visits">
        <div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{t("schools-calendar")}</p>
            <h2 id="upcoming-school-visits" className="mt-2 text-4xl font-medium tracking-tight sm:text-5xl">{t("schools-upcoming")}</h2>
          </div>
        </div>
        {upcomingSchoolVisits.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{upcomingSchoolVisits.map((visit) => <VisitCard key={visit.id} visit={visit} t={t} />)}</div>
        ) : <div className="mt-8"><EmptyState>{t("schools-upcoming-empty")}</EmptyState></div>}
      </section>

      <section className="mt-16 rounded-2xl border-2 border-blue-dark bg-blue-dark p-7 text-white dark:border-white dark:bg-white dark:text-blue-dark sm:mt-20 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-75">{t("schools-cta-kicker")}</p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("schools-cta-title")}</h2><p className="mt-3 text-lg leading-relaxed">{t("schools-cta-text")}</p></div>
          <a href="mailto:info@bitpolito.it?subject=Bitcoin%20al%20Liceo" className="rounded-md border-2 border-white px-6 py-3 text-center text-base font-bold transition-all hover:bg-white hover:text-blue-dark dark:border-blue-dark dark:hover:bg-blue-dark dark:hover:text-white">{t("contact-team")}</a>
        </div>
      </section>

      <section className="mt-16 border-t-2 border-blue-dark pt-10 dark:border-white sm:mt-24 sm:pt-14" aria-labelledby="past-school-visits">
        <div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">{t("schools-archive")}</p>
            <h2 id="past-school-visits" className="mt-2 text-4xl font-medium tracking-tight sm:text-5xl">{t("schools-past")}</h2>
          </div>
        </div>
        {pastSchoolVisits.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{pastSchoolVisits.map((visit) => <VisitCard key={visit.id} visit={visit} t={t} />)}</div>
        ) : <div className="mt-8"><EmptyState>{t("schools-past-empty")}</EmptyState></div>}
      </section>

    </BlogShell>
  );
}
