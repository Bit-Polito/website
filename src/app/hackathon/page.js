"use client";

import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "../components/DarkModeSwitch";
import Footer from "../components/Footer";
import "../i18n/i18n";

const APPLY_URL = "https://forms.gle/AdoCUYeL4z5hpA3a6";
const MAPS_URL = "https://www.google.com/maps/place/Blox+Space/@45.0702913,7.678567,626m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47886d2bd46b3f31:0xe3558c5f809a4cb3!8m2!3d45.0702913!4d7.678567!16s%2Fg%2F11n52t2zqt?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D";

const tracks = [
  ["01", "Payments and checkout", "Invoicing, payroll and cross-border flows"],
  ["02", "Self-custodial digital dollar apps", "Wallets, savings and shared accounts"],
  ["03", "Private financial intelligence", "On-device budgeting and fraud alerts"],
  ["04", "Autonomous economic agents", "Local AI proposes, you approve"],
];

const timeline = [
  ["Now — 3 Oct", "Applications", "Tell us about your background and what you want to build."],
  ["24 Sep", "Tutorials", "Tool tutorials published for every applicant."],
  ["4 — 12 Oct", "Selection", "Selection and confirmation of admitted builders."],
  ["13 Oct", "Technical Q&A", "Live session with the mentors for confirmed participants."],
  ["17 — 18 Oct", "Hackathon", "Two days at BLOX, final demos and awards on Sunday."],
];

const faqs = [
  ["Do I need to know Bitcoin already?", "No. You do not need previous experience with RGB or Bitcoin. Recorded tutorials will be published before the event and mentors will be on site on both days. What matters most is that you want to build something."],
  ["Can I apply without a team?", "Yes. Mention it in the form and we will help you find teammates before the event or on the first morning. Teams will be composed of two to four people."],
  ["How are applications selected?", "We look for motivation and a clear vision of what you want to build around AI and payment infrastructure, not a long CV. Places are limited to around 70."],
  ["Is it free? Are meals included?", "The hackathon is free to attend. Saturday lunch and coffee break, plus Sunday breakfast, are included. Participants only cover their own travel and accommodation."],
];

const tools = [
  { name: "RGB", tag: "Required", text: "Issue, transfer and verify assets on Bitcoin with client-side validation.", links: [["Website", "https://rgb.info/"], ["Documentation", "https://docs.rgb.info/"]] },
  { name: "QVAC", tag: "Local AI", text: "Run AI models directly on device, with no cloud and no per-call cost.", links: [["Website", "https://qvac.tether.io/"], ["Quickstart", "https://docs.qvac.tether.io/js-ts-sdk/"]] },
  { name: "WDK", tag: "Self-custodial wallets", text: "Embed a wallet into your app so users can hold, sign and send with their own keys.", links: [["Documentation", "https://docs.wdk.tether.io/"]] },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HackathonPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-blue-dark dark:bg-blue-dark dark:text-white">
      <header className="sticky top-0 z-50 border-b-2 border-blue-dark/15 bg-[#F9F9F9]/95 backdrop-blur dark:border-white/20 dark:bg-blue-dark/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" aria-label="Back to home" className="block w-[190px] sm:w-[245px]">
            <Image src="/bitpolito-logo-light.svg" alt="BitPolito" width={334} height={57} className="icon-style-opposite !h-auto !w-full" priority unoptimized />
          </Link>
          <div className="flex items-center gap-4 sm:gap-7">
            <DarkModeSwitch />
            <Link href="/" className="rounded-full border-2 border-blue-dark px-4 py-2 text-sm font-bold transition hover:scale-105 dark:border-white sm:text-base">Home</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hackathon-hero">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-14 lg:py-28">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[.22em] sm:text-base">Powered by local AI</p>
              <h1 className="max-w-5xl text-5xl font-medium uppercase leading-[.88] tracking-[-.055em] sm:text-7xl lg:text-[5.6rem] xl:text-[6.8rem]">Agentic dollars<br />on Bitcoin</h1>
              <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">Two days to build self-custodial dollar apps driven by models that run on device. No cloud, no custodian.</p>
            </div>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border-2 border-blue-dark bg-white shadow-2xl dark:border-white lg:max-w-none">
              <Image
                src="/rgb-hackathon.jpg"
                alt="Agentic Dollars on Bitcoin Hackathon event poster"
                width={960}
                height={1280}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1023px) 448px, 38vw"
              />
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 border-x-2 border-t-2 border-blue-dark dark:border-white sm:grid-cols-3">
            {[['17–18', 'October 2026'], ['70', 'Builders only'], ['BLOX', 'Turin']].map(([value, label]) => (
              <div key={value} className="border-b-2 border-blue-dark p-6 dark:border-white sm:border-b-0 sm:border-r-2 sm:last:border-r-0 lg:p-9">
                <p className="text-4xl font-medium sm:text-5xl">{value}</p><p className="mt-2 font-bold uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="overflow-hidden border-y-2 border-blue-dark bg-blue-dark py-3 text-white dark:border-white dark:bg-white dark:text-blue-dark">
          <p className="whitespace-nowrap text-center text-sm font-bold uppercase tracking-[.18em] sm:text-base">Local AI ✦ €6,000 in prizes ✦ Teams of 2 to 4 ✦ Free to attend ✦ Apply by 03.10</p>
        </div>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div><p className="hackathon-eyebrow">First prize</p><h2 className="hackathon-title">€4,000 for the winning team.</h2></div>
            <p className="text-xl leading-relaxed sm:text-2xl">Plus a guaranteed place in the <a href="https://www.cyphertank.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">CypherTank</a> semifinals, Lugano’s Bitcoin startup contest. Second prize €1,500. Third prize €500.</p>
          </div>
        </section>

        <section className="bg-blue-dark text-white dark:bg-white dark:text-blue-dark">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
            <div><p className="hackathon-eyebrow">Why local AI</p><h2 className="hackathon-title">The model runs on your device.</h2></div>
            <div><p className="text-xl leading-relaxed sm:text-2xl">An agent that handles your money should not send your finances to someone else’s server. With local models, self-custody and Bitcoin settlement, the entire flow stays in the user’s hands.</p><div className="mt-10 flex flex-wrap gap-3">{["Private by default", "Works offline", "No per-call cost"].map(item => <span key={item} className="rounded-full border-2 border-white px-4 py-2 font-bold dark:border-blue-dark">{item}</span>)}</div></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="hackathon-eyebrow">How it works</p><h2 className="hackathon-title">From today to demo day.</h2>
          <div className="mt-14 border-t-2 border-blue-dark dark:border-white">
            {timeline.map(([date, title, text]) => <div key={date} className="grid gap-3 border-b-2 border-blue-dark py-7 dark:border-white md:grid-cols-[180px_220px_1fr] md:gap-8"><p className="font-bold uppercase tracking-wide">{date}</p><h3 className="text-xl font-medium">{title}</h3><p className="text-lg opacity-80">{text}</p></div>)}
          </div>
        </section>

        <section className="border-y-2 border-blue-dark dark:border-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="hackathon-eyebrow">FAQ</p><h2 className="hackathon-title">Questions, answered.</h2></div>
            <div className="border-t-2 border-blue-dark dark:border-white">{faqs.map(([question, answer]) => <details key={question} className="group border-b-2 border-blue-dark py-6 dark:border-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-medium sm:text-2xl">{question}<span className="text-3xl transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-5 text-lg leading-relaxed opacity-80">{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="bg-blue-dark text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="hackathon-eyebrow">The tools</p><h2 className="hackathon-title">Start exploring before you arrive.</h2>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">{tools.map(tool => <article key={tool.name} className="flex min-h-80 flex-col rounded-2xl border-2 border-white p-7"><div className="flex items-start justify-between gap-4"><h3 className="text-4xl font-medium">{tool.name}</h3><span className="rounded-full border-2 border-white px-3 py-1 text-xs font-bold uppercase">{tool.tag}</span></div><p className="mt-8 text-lg leading-relaxed">{tool.text}</p><div className="mt-auto flex flex-wrap gap-4 pt-8">{tool.links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-4">{label} <Arrow /></a>)}</div></article>)}</div>
          </div>
        </section>

        <section className="border-y-2 border-blue-dark dark:border-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="hackathon-eyebrow">What you can build</p>
            <h2 className="hackathon-title max-w-4xl">Four directions, no fixed brief.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">Local AI, payments and wallets for digital dollars you hold yourself. Bitcoin is the settlement layer underneath, and we will show you how it works.</p>
            <div className="mt-14 grid border-l-2 border-t-2 border-blue-dark dark:border-white md:grid-cols-2">
              {tracks.map(([number, title, text]) => <article key={number} className="min-h-64 border-b-2 border-r-2 border-blue-dark p-7 dark:border-white sm:p-9"><p className="text-sm font-bold">{number}</p><h3 className="mt-12 text-2xl font-medium sm:text-3xl">{title}</h3><p className="mt-3 text-lg opacity-80">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-y-2 border-white bg-blue-dark text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="hackathon-eyebrow">The venue</p>
              <h2 className="hackathon-title">How to get there.</h2>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">The hackathon takes place at BLOX Space, in central Turin.</p>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-between rounded-xl border-2 border-white px-6 py-5 text-lg font-bold transition hover:scale-[1.02] hover:shadow-xl sm:w-fit lg:justify-self-end">
              Open in Google Maps <Arrow />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="hackathon-eyebrow">Behind it</p><h2 className="hackathon-title">A weekend backed by the ecosystem.</h2>
          <div className="mt-14 grid border-l-2 border-t-2 border-blue-dark dark:border-white md:grid-cols-2"><article className="border-b-2 border-r-2 border-blue-dark p-8 dark:border-white"><p className="text-sm font-bold uppercase tracking-widest">Main sponsor</p><h3 className="mt-8 text-5xl font-medium">Tether</h3><p className="mt-5 text-lg leading-relaxed">Backing open-source development on Bitcoin. The WDK and QVAC teams will join us as mentors across both days.</p></article><article className="border-b-2 border-r-2 border-blue-dark p-8 dark:border-white"><p className="text-sm font-bold uppercase tracking-widest">Media partner</p><h3 className="mt-8 text-5xl font-medium">Atlas21</h3><p className="mt-5 text-lg leading-relaxed">Italian-born media covering Bitcoin with daily news, interviews and in-depth analysis in Italian and English.</p></article></div>
        </section>

        <section className="bg-blue-dark text-white dark:bg-white dark:text-blue-dark">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <div><p className="hackathon-eyebrow">70 places · applications close on October 3</p><h2 className="mt-5 text-5xl font-medium uppercase leading-[.9] tracking-[-.05em] sm:text-7xl">Build it<br />in Turin.</h2></div>
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
        aria-label="Apply to the Agentic Dollars Hackathon"
      >
        Apply now! <Arrow />
      </a>
    </div>
  );
}
