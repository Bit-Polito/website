import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogShell from "../../components/BlogShell";
import events, { getEvent } from "../../data/events";

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  return event ? { title: `${event.title} | BitPolito`, description: event.description } : {};
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) notFound();

  return (
    <BlogShell>
      <article className="mx-auto mt-8 max-w-4xl sm:mt-10 lg:mt-12">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-dark">
          <span aria-hidden="true">←</span> Tutti gli eventi
        </Link>
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em]">
            <span className={`rounded-full px-3 py-1 ${event.status === "upcoming" ? "bg-blue-dark text-white dark:bg-white dark:text-blue-dark" : "border-2 border-blue-dark dark:border-white"}`}>
              {event.status === "upcoming" ? "Prossimo evento" : "Evento passato"}
            </span>
            <span className="text-blue-dark/70 dark:text-white/70">{event.type}</span>
          </div>
          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-7xl">{event.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed sm:text-2xl">{event.description}</p>
        </header>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border-2 border-blue-dark dark:border-white">
          <Image src={event.image} alt={event.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 896px" className="object-cover" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border-2 border-blue-dark p-5 dark:border-white"><p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">Quando</p><p className="mt-2 text-lg font-semibold">{event.date}</p></div>
          <div className="rounded-xl border-2 border-blue-dark p-5 dark:border-white"><p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">Dove</p><p className="mt-2 text-lg font-semibold">{event.location}</p></div>
          <div className="rounded-xl border-2 border-blue-dark p-5 dark:border-white"><p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">A cura di</p><p className="mt-2 text-lg font-semibold">{event.organiser}</p></div>
        </div>

        {event.details && (
          <section className="mt-12 space-y-5 text-lg leading-relaxed sm:text-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Il corso</h2>
            {event.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        )}

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Calendario</h2>
          <ol className="mt-5 space-y-3">
            {event.program.map((item, index) => (
              <li key={item} className="flex gap-4 border-b border-blue-dark/20 pb-3 dark:border-white/25"><span className="font-bold tabular-nums">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>
            ))}
          </ol>
          {event.note && <p className="mt-8 rounded-xl border-2 border-blue-dark bg-white p-5 text-lg leading-relaxed dark:border-white dark:bg-blue-dark">{event.note}</p>}
        </section>

        {event.externalUrl && (
          <a href={event.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-w mt-12 inline-flex rounded-md px-6 py-3 text-base">
            {event.externalLabel} <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        )}
      </article>
    </BlogShell>
  );
}
