"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import featuredContent from "../data/featuredContent";
import hackathon from "../data/hackathon";
import { localizeContent } from "../data/localizedContent";

function Card({ item, index, t }) {
  const layoutClass = index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-4";
  const hasImage = Boolean(item.image);
  const isExternal = Boolean(item.url && item.url.startsWith("http"));
  const href = item.href || item.url || (item.type === "event" ? `/events/${item.slug}` : `/blog/${item.slug}`);
  const cardContent = (
    <>
      {hasImage ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-blue-dark dark:border-white">
          <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 40vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-blue-dark px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white dark:bg-white dark:text-blue-dark">{t(`content-${item.type}`)}</span>
        </div>
      ) : (
        <div className="flex min-h-36 items-start justify-between border-b-2 border-blue-dark bg-blue-dark p-5 text-white dark:border-white dark:bg-white dark:text-blue-dark">
          <span className="font-logo text-6xl italic leading-none">₿</span>
          <span className="rounded-full border border-current px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">{t(`content-${item.type}`)}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-dark/70 dark:text-white/70">{item.type === "event" ? item.date : item.category || item.date}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">{item.title}</h3>
        <p className="mt-4 leading-relaxed">{item.description}</p>
        <span className="mt-6 text-sm font-bold uppercase tracking-[0.14em]">{t(`content-read-${item.type}`)} <span aria-hidden="true">{isExternal ? "↗" : "→"}</span></span>
      </div>
    </>
  );

  const className = `group flex min-h-full flex-col overflow-hidden rounded-xl border-2 border-blue-dark bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-dark dark:border-white dark:bg-blue-dark ${layoutClass}`;

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{cardContent}</a>
  ) : (
    <Link href={href} className={className}>{cardContent}</Link>
  );
}

export default function FeaturedContent({ events, posts, projects }) {
  const { t, i18n } = useTranslation();
  const sources = {
    event: events,
    article: posts,
    project: projects,
    hackathon: [hackathon],
  };

  const items = featuredContent
    .slice(0, 5)
    .map((selection) => {
      const item = sources[selection.type]?.find((content) => content.slug === selection.slug);
      return item ? localizeContent({ ...item, type: selection.type }, i18n.resolvedLanguage || i18n.language) : null;
    })
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <section id="featured-heading" className="mt-16 sm:mt-20" aria-label={t("content-featured")}>
      <div className="grid gap-5 md:grid-cols-12">
        {items.map((item, index) => <Card key={`${item.type}-${item.slug}`} item={item} index={index} t={t} />)}
      </div>
    </section>
  );
}
