"use client";

import Link from "next/link";
import BlogShell from "../components/BlogShell";

const LAST_UPDATED = "23 settembre 2026";

const sections = [
  {
    heading: "1. Titolare del trattamento",
    paragraphs: [
      "Il presente sito è pubblicato da BitPolito, team studentesco attivo presso il Politecnico di Torino dedicato allo sviluppo e alla divulgazione di Bitcoin. BitPolito non è una persona giuridica autonoma; il trattamento dei dati raccolti tramite questo sito è comunque svolto secondo i principi del Regolamento (UE) 2016/679 (\"GDPR\") e del Codice in materia di protezione dei dati personali (D.Lgs. 196/2003, come modificato dal D.Lgs. 101/2018).",
      "Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali puoi scrivere a info@bitpolito.it.",
    ],
  },
  {
    heading: "2. Quali dati raccogliamo e perché",
    paragraphs: [
      "Questo sito raccoglie un numero molto limitato di dati personali, riassunti di seguito.",
    ],
    list: [
      "Preferenze di navigazione (tema chiaro/scuro, lingua selezionata): salvate esclusivamente nel browser del dispositivo che usi, tramite localStorage. Non vengono trasmesse a BitPolito né a terzi. Sono descritte nel dettaglio nella nostra Cookie Policy.",
      "Dati tecnici minimi di funzionamento del sito (ad es. indirizzo IP, tipo di browser), trattati dal nostro fornitore di hosting (Vercel Inc.) per garantire sicurezza, stabilità e funzionamento del servizio. BitPolito non ha accesso diretto a log dettagliati e non effettua profilazione degli utenti.",
      "Dati che ci invii volontariamente scrivendo all'indirizzo info@bitpolito.it (ad es. nome, indirizzo email, contenuto del messaggio), usati esclusivamente per risponderti.",
      "Dati che inserisci in moduli di terze parti collegati dal sito, come i moduli di iscrizione a eventi e hackathon (Luma, Google Forms) o le pagine social collegate. Quando compili uno di questi moduli, i tuoi dati vengono raccolti direttamente da quelle piattaforme secondo le rispettive informative privacy; BitPolito riceve e utilizza i dati necessari (ad es. nome ed email dei partecipanti) esclusivamente per organizzare l'evento o l'attività a cui ti sei iscritto/a.",
    ],
  },
  {
    heading: "3. Base giuridica del trattamento",
    paragraphs: [
      "Trattiamo i tuoi dati sulla base del consenso che presti compilando un modulo di iscrizione o di candidatura (art. 6.1.a GDPR), dell'esecuzione di misure precontrattuali o organizzative richieste da te stesso/a (ad es. la partecipazione a un evento, art. 6.1.b GDPR) e del legittimo interesse di BitPolito a rispondere alle richieste ricevute via email e a garantire il corretto funzionamento tecnico del sito (art. 6.1.f GDPR).",
    ],
  },
  {
    heading: "4. Con chi condividiamo i dati",
    paragraphs: [
      "Non vendiamo né cediamo i tuoi dati personali a terzi per finalità di marketing. I dati possono essere condivisi solo con i fornitori tecnici che rendono possibile il servizio, che agiscono come titolari autonomi o responsabili del trattamento secondo le rispettive policy:",
    ],
    list: [
      "Vercel Inc. — hosting ed erogazione del sito.",
      "Notion Labs, Inc. — gestione dei contenuti editoriali del blog.",
      "Luma (Luma Labs) e Google (Google Forms) — quando usati per le iscrizioni a eventi e attività.",
      "Le piattaforme social collegate dal sito (Telegram, X, Instagram, YouTube, Spotify, GitHub, LinkedIn), solo se scegli di seguirci su quei canali.",
    ],
    afterList: "Alcuni di questi fornitori hanno sede al di fuori dello Spazio Economico Europeo; in questi casi il trasferimento dei dati avviene sulla base di clausole contrattuali standard o di altre garanzie adeguate previste dal GDPR.",
  },
  {
    heading: "5. Per quanto tempo conserviamo i dati",
    paragraphs: [
      "I messaggi ricevuti via email sono conservati per il tempo necessario a gestire la richiesta e, successivamente, per il tempo previsto da eventuali obblighi di legge. I dati raccolti per l'organizzazione di un evento sono conservati per la durata dell'evento stesso e per il periodo necessario a rendicontarlo, salvo diverso periodo indicato nel modulo di iscrizione specifico.",
    ],
  },
  {
    heading: "6. I tuoi diritti",
    paragraphs: [
      "In qualità di interessato/a puoi in qualsiasi momento esercitare, scrivendo a info@bitpolito.it, i diritti previsti dagli articoli 15-22 del GDPR:",
    ],
    list: [
      "diritto di accesso ai tuoi dati personali;",
      "diritto di rettifica dei dati inesatti o incompleti;",
      "diritto alla cancellazione (\"diritto all'oblio\"), nei casi previsti dalla legge;",
      "diritto di limitazione del trattamento;",
      "diritto alla portabilità dei dati;",
      "diritto di opposizione al trattamento;",
      "diritto di revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento svolto prima della revoca.",
    ],
    afterList: "Hai inoltre il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it) qualora ritenga che il trattamento dei tuoi dati violi la normativa vigente.",
  },
  {
    heading: "7. Minori",
    paragraphs: [
      "Il sito si rivolge principalmente a studentesse e studenti universitari maggiorenni. Non raccogliamo consapevolmente dati di persone minori di 16 anni; se ritieni che un minore ci abbia fornito i propri dati, scrivici a info@bitpolito.it per la loro rimozione.",
    ],
  },
  {
    heading: "8. Modifiche a questa informativa",
    paragraphs: [
      "Questa informativa può essere aggiornata nel tempo, ad esempio in caso di modifiche ai servizi utilizzati dal sito. La data dell'ultimo aggiornamento è indicata in cima alla pagina.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <BlogShell>
      <article className="mx-auto mt-8 max-w-4xl sm:mt-10 lg:mt-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-dark">
          <span aria-hidden="true">←</span> Home
        </Link>
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-dark/70 dark:text-white/70">Ultimo aggiornamento: {LAST_UPDATED}</p>
          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-7xl">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed sm:text-2xl">
            Informativa sul trattamento dei dati personali resa ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR) a chi naviga il sito bitpolito.it.
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
          Per informazioni sulle tecnologie di archiviazione locale usate dal sito, consulta la nostra{" "}
          <Link href="/cookie-policy" className="font-bold underline underline-offset-4">Cookie Policy</Link>.
        </p>
      </article>
    </BlogShell>
  );
}
