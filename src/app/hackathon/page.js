"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import DarkModeSwitch from "../components/DarkModeSwitch";
import LanguageSelector from "../components/LanguageSelector";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";
import "../i18n/i18n";

const APPLY_URL = "https://forms.gle/AdoCUYeL4z5hpA3a6";
const MAPS_URL = "https://www.google.com/maps/place/Blox+Space/@45.0702913,7.678567,626m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47886d2bd46b3f31:0xe3558c5f809a4cb3!8m2!3d45.0702913!4d7.678567!16s%2Fg%2F11n52t2zqt?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D";

const trackStyles = [
  "bg-blue-dark text-white",
  "bg-white text-blue-dark",
  "bg-blue-dark text-white md:bg-white md:text-blue-dark",
  "bg-white text-blue-dark md:bg-blue-dark md:text-white",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HackathonPage() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about-us") },
    { href: "/events", label: t("events") },
    { href: "/blog", label: t("blog") },
    { href: "/projects", label: t("projects") },
    { href: "/licei", label: t("licei") },
  ];

  const tracks = [
    [t("hk-track1-title"), t("hk-track1-text")],
    [t("hk-track2-title"), t("hk-track2-text")],
    [t("hk-track3-title"), t("hk-track3-text")],
    [t("hk-track4-title"), t("hk-track4-text")],
  ];

  const timeline = [
    [t("hk-tl1-date"), t("hk-tl1-title"), t("hk-tl1-text")],
    [t("hk-tl2-date"), t("hk-tl2-title"), t("hk-tl2-text")],
    [t("hk-tl3-date"), t("hk-tl3-title"), t("hk-tl3-text")],
    [t("hk-tl4-date"), t("hk-tl4-title"), t("hk-tl4-text")],
    [t("hk-tl5-date"), t("hk-tl5-title"), t("hk-tl5-text")],
  ];

  const faqs = [
    [t("hk-faq1-q"), t("hk-faq1-a")],
    [t("hk-faq2-q"), t("hk-faq2-a")],
    [t("hk-faq3-q"), t("hk-faq3-a")],
    [t("hk-faq4-q"), t("hk-faq4-a")],
    [t("hk-faq5-q"), t("hk-faq5-a")],
    [t("hk-faq6-q"), t("hk-faq6-a")],
    [t("hk-faq7-q"), t("hk-faq7-a")],
    [t("hk-faq8-q"), t("hk-faq8-a")],
    [t("hk-faq9-q"), t("hk-faq9-a")],
  ];

  const weekend = [
    [t("hk-wk-d1"), [[t("hk-wk-t1"), t("hk-wk-e1")]]],
    [t("hk-wk-d2"), [[t("hk-wk-t2"), t("hk-wk-e2")], [t("hk-wk-t3"), t("hk-wk-e3")]]],
  ];

  const criteria = [1, 2, 3, 4, 5].map((n) => [t(`hk-jd${n}-title`), t(`hk-jd${n}-text`)]);

  const tools = [
    { name: "RGB", tag: t("hk-tool1-tag"), text: t("hk-tool1-text"), links: [[t("hk-link-website"), "https://rgb.info/"], [t("hk-link-docs"), "https://docs.rgb.info/"]] },
    { name: "QVAC", tag: t("hk-tool2-tag"), text: t("hk-tool2-text"), links: [[t("hk-link-website"), "https://qvac.tether.io/"], [t("hk-link-quickstart"), "https://docs.qvac.tether.io/js-ts-sdk/"]] },
    { name: "WDK", tag: t("hk-tool3-tag"), text: t("hk-tool3-text"), links: [[t("hk-link-docs"), "https://docs.wdk.tether.io/"]] },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-blue-dark dark:bg-blue-dark dark:text-white">
      <header className="sticky top-0 z-50 border-b-2 border-blue-dark bg-[#F9F9F9]/95 backdrop-blur-md dark:border-white dark:bg-blue-dark/95">
        <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between gap-5 px-4 sm:h-[86px] sm:px-8 lg:px-12">
          <Link href="/" aria-label={t("nav-home-aria")} className="relative block w-[190px] shrink-0 sm:w-[220px]">
            <Image src="/bitpolito-logo-light.svg" alt="BitPolito" width={334} height={57} className="icon-style-opposite !h-auto !w-full" priority unoptimized />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={t("nav-main-aria")}>
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-4 py-2 text-sm font-bold transition-colors ${isActive ? "bg-blue-dark text-white dark:bg-white dark:text-blue-dark" : "hover:bg-blue-dark/10 dark:hover:bg-white/15"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <DarkModeSwitch />
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            <LanguageSelector />
            <HamburgerMenu variant="mobile" />
          </div>
        </div>
      </header>

      <main>
        <section className="hackathon-hero">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-14 lg:py-28">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[.22em] sm:text-base">{t("hk-eyebrow")}</p>
              <h1 className="max-w-5xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t("hk-title-line1")}<br />{t("hk-title-line2")}</h1>
              <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">{t("hk-subtitle")}</p>
            </div>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border-2 border-blue-dark bg-white shadow-2xl dark:border-white lg:max-w-none">
              <Image
                src="/rgb-hackathon.jpg"
                alt="Locandina dell'hackathon Agentic Dollars on Bitcoin, 17–18 ottobre 2026, BLOX Space Torino"
                width={960}
                height={1280}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1023px) 448px, 38vw"
              />
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 border-x-2 border-t-2 border-blue-dark dark:border-white sm:grid-cols-3">
            {[['17–18', t("hk-stat-date")], ['70', t("hk-stat-builders")], ['at Blox.space', t("hk-stat-city")]].map(([value, label]) => (
              <div key={value} className="border-b-2 border-white bg-blue-dark p-6 text-white sm:border-b-0 sm:border-r-2 sm:last:border-r-0 lg:p-9">
                <p className="text-4xl font-medium sm:text-5xl">{value === 'at Blox.space' ? <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">{value}</a> : value}</p><p className="mt-2 font-bold uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="overflow-hidden border-y-2 border-blue-dark bg-blue-dark py-3 text-white dark:border-white dark:bg-white dark:text-blue-dark">
          <div className="hackathon-ticker text-sm font-bold uppercase tracking-[.18em] sm:text-base">
            <span className="hackathon-ticker-item">{t("hk-ticker")}</span>
            <span className="hackathon-ticker-item" aria-hidden="true">{t("hk-ticker")}</span>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div><p className="hackathon-eyebrow">{t("hk-prize-eyebrow")}</p><h2 className="hackathon-title">{t("hk-prize-title")}</h2></div>
            <p className="text-xl leading-relaxed sm:text-2xl">{t("hk-prize-text-pre")}<a href="https://www.cyphertank.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">{t("hk-prize-text-link")}</a>{t("hk-prize-text-post")}</p>
          </div>
          <div className="mt-16 grid gap-8 border-t-2 border-blue-dark pt-12 dark:border-white lg:grid-cols-2">
            <div><p className="hackathon-eyebrow">{t("hk-ct-eyebrow")}</p><h2 className="hackathon-title">{t("hk-ct-title")}</h2></div>
            <div className="space-y-5 text-lg leading-relaxed sm:text-xl">
              <p>{t("hk-ct-p1")}</p>
              <p>{t("hk-ct-p2")}</p>
              <a href="https://www.cyphertank.org/" target="_blank" rel="noopener noreferrer" className="btn-d inline-flex rounded-md px-6 py-3 text-base">www.cyphertank.org <span className="ml-2"><Arrow /></span></a>
            </div>
          </div>
        </section>

        <section className="bg-blue-dark text-white dark:bg-white dark:text-blue-dark">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
            <div><p className="hackathon-eyebrow">{t("hk-why-eyebrow")}</p><h2 className="hackathon-title">{t("hk-why-title")}</h2></div>
            <div><p className="text-xl leading-relaxed sm:text-2xl">{t("hk-why-text")}</p><div className="mt-10 flex flex-wrap gap-3">{[t("hk-why-tag1"), t("hk-why-tag2"), t("hk-why-tag3")].map(item => <span key={item} className="rounded-full border-2 border-white px-4 py-2 font-bold dark:border-blue-dark">{item}</span>)}</div></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="hackathon-eyebrow">{t("hk-timeline-eyebrow")}</p><h2 className="hackathon-title">{t("hk-timeline-title")}</h2>
          <div className="mt-14 border-t-2 border-blue-dark dark:border-white">
            {timeline.map(([date, title, text]) => <div key={date} className="grid gap-3 border-b-2 border-blue-dark py-7 dark:border-white md:grid-cols-[180px_220px_1fr] md:gap-8"><p className="font-bold uppercase tracking-wide">{date}</p><h3 className="text-xl font-medium">{title}</h3><p className="text-lg opacity-80">{text}</p></div>)}
          </div>

          <div className="mt-24">
            <p className="hackathon-eyebrow">{t("hk-wk-eyebrow")}</p><h2 className="hackathon-title">{t("hk-wk-title")}</h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              {weekend.map(([day, events]) => (
                <div key={day}>
                  <h3 className="text-2xl font-medium sm:text-3xl">{day}</h3>
                  <div className="mt-6 border-t-2 border-blue-dark dark:border-white">
                    {events.map(([time, text]) => <div key={time} className="grid gap-2 border-b-2 border-blue-dark py-6 dark:border-white sm:grid-cols-[140px_1fr] sm:gap-6"><p className="font-bold uppercase tracking-wide">{time}</p><p className="text-lg">{text}</p></div>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-lg opacity-80">{t("hk-wk-note")}</p>
          </div>
        </section>

        <section className="bg-blue-dark text-white dark:bg-white dark:text-blue-dark">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_.75fr] lg:gap-16">
            <div><p className="hackathon-eyebrow">{t("hk-build-eyebrow")}</p><h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{t("hk-build-title-line1")}<br />{t("hk-build-title-line2")}</h2></div>
            <a href="https://rgbprotocol.org/" target="_blank" rel="noopener noreferrer" aria-label={t("hk-rgb-aria")} className="block rounded-2xl transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-blue-dark/40">
              <Image
                src="/rgb.webp"
                alt="RGB Protocol Association"
                width={1672}
                height={941}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1023px) 100vw, 40vw"
              />
            </a>
          </div>
        </section>

        <section className="border-y-2 border-blue-dark dark:border-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="hackathon-eyebrow">{t("hk-faq-eyebrow")}</p><h2 className="hackathon-title">{t("hk-faq-title")}</h2></div>
            <div className="border-t-2 border-blue-dark dark:border-white">{faqs.map(([question, answer]) => <details key={question} className="group border-b-2 border-blue-dark py-6 dark:border-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-medium sm:text-2xl">{question}<span className="text-3xl transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-5 text-lg leading-relaxed opacity-80">{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="bg-blue-dark text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="hackathon-eyebrow">{t("hk-tools-eyebrow")}</p><h2 className="hackathon-title">{t("hk-tools-title")}</h2>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">{tools.map(tool => <article key={tool.name} className="flex min-h-80 flex-col rounded-2xl border-2 border-white p-7"><div className="flex items-start justify-between gap-4"><h3 className="text-4xl font-medium">{tool.name}</h3><span className="rounded-full border-2 border-white px-3 py-1 text-xs font-bold uppercase">{tool.tag}</span></div><p className="mt-8 text-lg leading-relaxed">{tool.text}</p><div className="mt-auto flex flex-wrap gap-4 pt-8">{tool.links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-4">{label} <Arrow /></a>)}</div></article>)}</div>
          </div>
        </section>

        <section className="border-y-2 border-blue-dark dark:border-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="hackathon-eyebrow">{t("hk-tracks-eyebrow")}</p>
            <h2 className="hackathon-title max-w-4xl">{t("hk-tracks-title")}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">{t("hk-tracks-intro")}</p>
            <div className="mt-14 grid border-l-2 border-t-2 border-blue-dark dark:border-white md:grid-cols-2">
              {tracks.map(([title, text], index) => <article key={title} className={`min-h-[11.2rem] border-b-2 border-r-2 border-blue-dark p-7 dark:border-white sm:p-9 ${trackStyles[index]}`}><h3 className="text-2xl font-medium sm:text-3xl">{title}</h3><p className="mt-3 text-lg opacity-80">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-b-2 border-blue-dark dark:border-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="hackathon-eyebrow">{t("hk-jd-eyebrow")}</p>
            <h2 className="hackathon-title max-w-4xl">{t("hk-jd-title")}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">{t("hk-jd-intro")}</p>
            <ol className="mt-14 border-t-2 border-blue-dark dark:border-white">
              {criteria.map(([title, text], index) => <li key={title} className="grid gap-3 border-b-2 border-blue-dark py-7 dark:border-white md:grid-cols-[80px_260px_1fr] md:gap-8"><span className="text-3xl font-medium tabular-nums">{index + 1}</span><h3 className="text-xl font-medium">{title}</h3><p className="text-lg opacity-80">{text}</p></li>)}
            </ol>
            <p className="mt-10 rounded-xl border-2 border-blue-dark p-6 text-lg leading-relaxed dark:border-white sm:p-8 sm:text-xl"><strong>{t("hk-jd-bonus-title")}</strong> {t("hk-jd-bonus-text")}</p>
          </div>
        </section>

        <section className="border-y-2 border-white bg-blue-dark text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="hackathon-eyebrow">{t("hk-venue-eyebrow")}</p>
              <h2 className="hackathon-title">{t("hk-venue-title")}</h2>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">{t("hk-venue-text")}</p>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-between rounded-xl border-2 border-white px-6 py-5 text-lg font-bold transition hover:scale-[1.02] hover:shadow-xl sm:w-fit lg:justify-self-end">
              {t("hk-maps-cta")} <Arrow />
            </a>
          </div>
        </section>

      </main>
      <div className="hackathon-footer">
        <Footer />
      </div>
      <a
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hackathon-floating-cta"
        aria-label={t("hk-apply-aria")}
      >
        {t("hk-apply-now")} <Arrow />
      </a>
    </div>
  );
}
