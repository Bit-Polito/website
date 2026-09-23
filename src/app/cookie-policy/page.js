"use client";

import Link from "next/link";
import BlogShell from "../components/BlogShell";

const LAST_UPDATED = "23 settembre 2026";

const sections = [
  {
    heading: "1. Cosa sono i cookie",
    paragraphs: [
      "I cookie sono piccoli file di testo che i siti visitati inviano al browser e che vengono memorizzati sul dispositivo dell'utente, per poi essere ritrasmessi agli stessi siti alla visita successiva. Le stesse regole si applicano ad altre tecnologie simili, come il localStorage del browser, che alcuni siti usano per memorizzare informazioni sul dispositivo dell'utente.",
    ],
  },
  {
    heading: "2. Il sito bitpolito.it non usa cookie di profilazione",
    paragraphs: [
      "Il sito bitpolito.it non installa cookie di profilazione né cookie di analisi statistica o pubblicitaria di terze parti. Non è quindi presente alcun banner di consenso ai cookie, perché non ne installiamo che lo richiedano.",
    ],
  },
  {
    heading: "3. Tecnologie di archiviazione locale che usiamo",
    paragraphs: [
      "Il sito utilizza il localStorage del browser, e non cookie in senso tecnico, per salvare due sole informazioni, entrambe strettamente necessarie a farti usare il sito come richiesto e quindi esenti dall'obbligo di consenso previsto dall'art. 122 del Codice Privacy:",
    ],
    list: [
      "tema — memorizza se hai scelto la modalità chiara o scura;",
      "language — memorizza la lingua che hai selezionato tra quelle disponibili.",
    ],
    afterList: "Questi dati restano esclusivamente nel browser del tuo dispositivo: non vengono trasmessi a BitPolito, non sono condivisi con terzi e non servono a identificarti o a tracciare la tua navigazione. Puoi cancellarli in qualsiasi momento svuotando i dati di navigazione del tuo browser per questo sito.",
  },
  {
    heading: "4. Cookie di terze parti su pagine collegate",
    paragraphs: [
      "Alcune pagine del sito contengono link a piattaforme esterne — ad esempio Luma e Google Forms per le iscrizioni a eventi, oppure Telegram, X, Instagram, YouTube, Spotify, GitHub e LinkedIn per i nostri canali social. Cliccando su questi link esci dal sito bitpolito.it e accedi a un servizio gestito da terzi, che può installare i propri cookie secondo la propria cookie policy, indipendente da questa. Ti invitiamo a consultare le informative di quei servizi prima di utilizzarli.",
    ],
  },
  {
    heading: "5. Come gestire i cookie dal browser",
    paragraphs: [
      "Anche se questo sito non installa cookie di profilazione, puoi comunque controllare, bloccare o cancellare i cookie già presenti sul tuo dispositivo dalle impostazioni del tuo browser:",
    ],
    list: [
      "Google Chrome: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti.",
      "Mozilla Firefox: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web.",
      "Safari: Preferenze → Privacy → Gestisci dati siti web.",
      "Microsoft Edge: Impostazioni → Privacy, ricerca e servizi → Cookie e autorizzazioni sito.",
    ],
  },
  {
    heading: "6. Aggiornamenti a questa cookie policy",
    paragraphs: [
      "Questa pagina può essere aggiornata, ad esempio se in futuro il sito dovesse iniziare a usare strumenti di analisi o cookie di terze parti: in quel caso aggiorneremo questa informativa e, se richiesto dalla legge, introdurremo un banner per la raccolta del consenso. La data dell'ultimo aggiornamento è indicata in cima alla pagina.",
    ],
  },
  {
    heading: "7. Contatti",
    paragraphs: [
      "Per qualsiasi domanda su questa cookie policy puoi scrivere a info@bitpolito.it.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <BlogShell>
      <article className="mx-auto mt-8 max-w-4xl sm:mt-10 lg:mt-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-dark">
          <span aria-hidden="true">←</span> Home
        </Link>
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-dark/70 dark:text-white/70">Ultimo aggiornamento: {LAST_UPDATED}</p>
          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-7xl">Cookie Policy</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed sm:text-2xl">
            Come il sito bitpolito.it usa i cookie e le tecnologie simili, ai sensi dell'art. 122 del Codice in materia di protezione dei dati personali e delle linee guida del Garante Privacy.
          </p>
        </header>

        <div className="mt-12 space-y-10 text-lg leading-relaxed sm:text-xl">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{section.heading}</h2>
              <div className="mt-4 space-y-5">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list && (
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-dark dark:marker:text-white">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.afterList && <p>{section.afterList}</p>}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-xl border-2 border-blue-dark p-6 text-lg leading-relaxed dark:border-white sm:text-xl">
          Per sapere come trattiamo i tuoi dati personali, consulta la nostra{" "}
          <Link href="/privacy" className="font-bold underline underline-offset-4">Privacy Policy</Link>.
        </p>
      </article>
    </BlogShell>
  );
}
