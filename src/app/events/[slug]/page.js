"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useTranslation } from "react-i18next";
import BlogShell from "../../components/BlogShell";
import { getEvent } from "../../data/events";
import { getEventContent } from "../../data/eventContent";
import "../../i18n/i18n";

export default function EventDetailPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const event = getEvent(slug);

  if (!event) notFound();

  const content = getEventContent(slug, i18n.resolvedLanguage || i18n.language);

  return (
    <BlogShell>
      <article className="mx-auto mt-8 max-w-4xl sm:mt-10 lg:mt-12">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-dark">
          <span aria-hidden="true">←</span> {t("events-back")}
        </Link>
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em]">
            <span className={`rounded-full px-3 py-1 ${event.status === "upcoming" ? "bg-blue-dark text-white dark:bg-white dark:text-blue-dark" : "border-2 border-blue-dark dark:border-white"}`}>
              {event.status === "upcoming" ? t("events-upcoming-badge") : t("events-past-badge")}
            </span>
            <span className="text-blue-dark/70 dark:text-white/70">{content.type}</span>
          </div>
          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-7xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed sm:text-2xl">{content.description}</p>
          {event.externalUrl && event.status === "upcoming" && (
            <a href={event.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-w mt-8 inline-flex rounded-md px-8 py-4 text-lg font-bold">
              {t("events-register")} <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          )}
        </header>

        <div className={`relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border-2 border-blue-dark dark:border-white ${event.imageFit === "contain" ? "bg-[#001cdf]" : ""}`}>
          <Image src={event.image} alt={event.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 896px" className={event.imageFit === "contain" ? "object-contain" : "object-cover"} />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border-2 border-blue-dark p-5 dark:border-white"><p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">{t("events-when")}</p><p className="mt-2 text-lg font-semibold">{content.date}</p></div>
          <div className="rounded-xl border-2 border-blue-dark p-5 dark:border-white"><p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">{t("events-where")}</p><p className="mt-2 text-lg font-semibold">{content.location}</p></div>
          <div className="rounded-xl border-2 border-blue-dark p-5 dark:border-white"><p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">{t("events-organiser")}</p><p className="mt-2 text-lg font-semibold">{event.organiser}</p></div>
        </div>

        {content.details && (
          <section className="mt-12 space-y-5 text-lg leading-relaxed sm:text-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("events-details-heading")}</h2>
            {content.details.map((block) =>
              typeof block === "string" ? (
                <p key={block}>{block}</p>
              ) : (
                <div key={block.intro}>
                  <p>{block.intro}</p>
                  <ul className="mt-3 list-disc space-y-1 ps-6">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              )
            )}
          </section>
        )}

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("events-schedule")}</h2>
          <ol className="mt-5 space-y-3">
            {content.program.map((item, index) => (
              <li key={item} className="flex gap-4 border-b border-blue-dark/20 pb-3 dark:border-white/25"><span className="font-bold tabular-nums">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>
            ))}
          </ol>
          {content.note && <p className="mt-8 rounded-xl border-2 border-blue-dark bg-white p-5 text-lg leading-relaxed dark:border-white dark:bg-blue-dark">{content.note}</p>}
        </section>

        {event.externalUrl && event.status === "upcoming" && (
          <a href={event.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-w mt-12 inline-flex rounded-md px-6 py-3 text-base">
            {t("events-register")} <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        )}
      </article>
    </BlogShell>
  );
}
