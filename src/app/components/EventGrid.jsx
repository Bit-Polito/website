"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { localizeContent } from "../data/localizedContent";

export default function EventGrid({ events }) {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = ["all", "upcoming", "past"];
  const filteredEvents = useMemo(
    () => activeFilter === "all" ? events : events.filter((event) => event.status === activeFilter),
    [activeFilter, events],
  );

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3" aria-label={t("events-filter-aria")}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          const count = filter === "all" ? events.length : events.filter((event) => event.status === filter).length;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md border-2 px-5 py-2 text-sm font-bold transition-all ${isActive ? "border-blue-dark bg-blue-dark text-white dark:border-white dark:bg-white dark:text-blue-dark" : "border-blue-dark bg-white text-blue-dark hover:shadow-md dark:border-white dark:bg-blue-dark dark:text-white"}`}
            >
              {t(`events-${filter}`)} <span className="ml-1 opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <section aria-live="polite" className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((event) => {
          const localizedEvent = localizeContent({ ...event, type: "event" }, i18n.resolvedLanguage || i18n.language);
          return (
          <Link
            key={event.slug}
            href={`/events/${event.slug}`}
            className="group flex min-h-full flex-col overflow-hidden rounded-xl border-2 border-blue-dark bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-dark dark:border-white dark:bg-blue-dark dark:hover:shadow-white/10"
          >
            <div className="flex items-start justify-between gap-4 px-6 pb-5 pt-6">
              <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${event.status === "upcoming" ? "bg-blue-dark text-white dark:bg-white dark:text-blue-dark" : "border border-blue-dark text-blue-dark dark:border-white dark:text-white"}`}>
                {event.status === "upcoming" ? t("events-next") : t("events-previous")}
              </span>
              <span className="text-right text-xs font-semibold uppercase tracking-[0.12em] text-blue-dark/65 dark:text-white/65">{localizedEvent.type}</span>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border-y-2 border-blue-dark dark:border-white" style={event.imageBg ? { backgroundColor: event.imageBg } : undefined}>
              <Image src={event.image} alt={event.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className={`${event.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`} />
            </div>
            <div className="flex flex-1 flex-col px-6 py-6">
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">{localizedEvent.title}</h2>
              <dl className="mt-5 grid gap-2 border-l-2 border-blue-dark pl-4 text-sm dark:border-white">
                <div className="flex gap-2"><dt className="font-bold">{t("events-when")}</dt><dd>{localizedEvent.date}</dd></div>
                <div className="flex gap-2"><dt className="font-bold">{t("events-where")}</dt><dd>{localizedEvent.location}</dd></div>
              </dl>
              <p className="mt-5 text-base leading-relaxed">{localizedEvent.description}</p>
              <span className="mt-6 text-sm font-bold uppercase tracking-[0.14em]">{t("events-discover")} <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        )})}
      </section>
    </>
  );
}
