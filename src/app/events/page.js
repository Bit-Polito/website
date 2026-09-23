"use client";

import BlogShell from "../components/BlogShell";
import EventGrid from "../components/EventGrid";
import events from "../data/events";
import hackathon from "../data/hackathon";
import { localizeCity } from "../data/localizedContent";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

export default function EventsPage() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  const hackathonEvent = {
    slug: hackathon.slug,
    contentType: "hackathon",
    status: "upcoming",
    title: hackathon.title,
    date: hackathon.date,
    location: `BLOX Space, ${localizeCity("Torino", language)}`,
    image: hackathon.image,
    imageAlt: hackathon.imageAlt,
    description: hackathon.description,
    href: hackathon.href,
  };
  const allEvents = [...events.slice(0, -1), hackathonEvent, events[events.length - 1]];

  return (
    <BlogShell>
      <section className="mt-8 sm:mt-10 lg:mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">BitPolito</p>
        <h1 className="mt-3 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">Events</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed sm:text-xl">
          {t("events-intro")}
        </p>
      </section>

      <EventGrid events={allEvents} />
    </BlogShell>
  );
}
