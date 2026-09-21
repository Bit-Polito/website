"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { heroContent } from "../data/featuredContent";
import hackathon from "../data/hackathon";
import { localizeContent } from "../data/localizedContent";

export default function HeroContentSlider({ events, posts, projects }) {
  const { t, i18n } = useTranslation();
  const items = useMemo(() => {
    const sources = { event: events, article: posts, project: projects, hackathon: [hackathon] };
    return heroContent
      .slice(0, 5)
      .map((selection) => {
        const content = sources[selection.type]?.find((item) => item.slug === selection.slug);
        return content ? { ...localizeContent({ ...content, type: selection.type }, i18n.resolvedLanguage || i18n.language), type: selection.type } : null;
      })
      .filter(Boolean);
  }, [events, posts, projects, i18n.language, i18n.resolvedLanguage]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  useEffect(() => {
    if (items.length < 2) return undefined;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % items.length), 6500);
    return () => window.clearInterval(timer);
  }, [items.length]);

  if (!activeItem) return null;

  const isExternal = Boolean(activeItem.url && activeItem.url.startsWith("http"));
  const href = activeItem.href || activeItem.url || (activeItem.type === "event" ? `/events/${activeItem.slug}` : `/blog/${activeItem.slug}`);
  const moveSlide = (direction) => setActiveIndex((current) => (current + direction + items.length) % items.length);
  const content = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-blue-dark dark:border-white">
        {activeItem.image ? (
          <Image src={activeItem.image} alt={activeItem.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
        ) : (
          <div className="flex h-full items-center justify-center bg-blue-dark text-white dark:bg-white dark:text-blue-dark"><span className="font-logo text-8xl italic">₿</span></div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-blue-dark px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white dark:bg-white dark:text-blue-dark">{t(`content-${activeItem.type}`)}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-dark/70 dark:text-white/70">{activeItem.type === "event" ? activeItem.date : activeItem.category || activeItem.date}</p>
        <h2 className="mt-3 line-clamp-2 min-h-[3.6rem] text-2xl font-semibold leading-tight">{activeItem.title}</h2>
        <p className="mt-3 line-clamp-3 min-h-[4.75rem] leading-relaxed">{activeItem.description}</p>
        <span className="mt-5 text-sm font-bold uppercase tracking-[0.14em]">{t("content-open")} <span aria-hidden="true">{isExternal ? "↗" : "→"}</span></span>
      </div>
    </>
  );

  return (
    <aside className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border-2 border-blue-dark bg-white dark:border-white dark:bg-blue-dark" aria-label={t("content-featured")}>
      <div className="flex items-center justify-between border-b-2 border-blue-dark px-5 py-3 dark:border-white">
        <p className="text-sm font-bold uppercase tracking-[0.18em]">{t("content-featured")}</p>
        <p className="text-sm font-semibold tabular-nums opacity-70">{String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</p>
      </div>
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="content-reveal flex flex-1 flex-col">{content}</a>
      ) : (
        <Link href={href} className="content-reveal flex flex-1 flex-col">{content}</Link>
      )}
      {items.length > 1 && (
        <div className="flex items-center justify-between border-t-2 border-blue-dark px-5 py-3 dark:border-white">
          <div className="flex gap-2">
            {items.map((item, index) => <button key={`${item.type}-${item.slug}`} type="button" aria-label={t("content-show", { title: item.title })} aria-current={index === activeIndex ? "true" : undefined} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-blue-dark dark:bg-white" : "w-2.5 bg-blue-dark/25 dark:bg-white/30"}`} />)}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => moveSlide(-1)} aria-label={t("content-previous")} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-dark text-lg transition-colors hover:bg-blue-dark hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-dark">←</button>
            <button type="button" onClick={() => moveSlide(1)} aria-label={t("content-next")} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-dark text-lg transition-colors hover:bg-blue-dark hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-dark">→</button>
          </div>
        </div>
      )}
    </aside>
  );
}
