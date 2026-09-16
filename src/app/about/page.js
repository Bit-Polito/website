import BlogShell from "../components/BlogShell";

export const metadata = {
  title: "About us | BitPolito",
  description: "BitPolito is the student team at Politecnico di Torino building a bridge between academia and the Bitcoin industry.",
};

const partnershipAreas = [
  {
    number: "01",
    title: "Educational events",
    items: [
      ["Company talks", "Bring a general Bitcoin topic, your company’s work, or a practical workshop to the Politecnico di Torino. BitPolito members can support the session."],
      ["Hackathons", "We design ad-hoc competitions around a product or service, involving Politecnico students and external members."],
      ["Recruitment events", "Present your company, meet talent and organise talks, stands, workshops or recruitment meetings with the University."],
    ],
  },
  {
    number: "02",
    title: "Open-source development",
    items: [
      ["Contributions", "Members can investigate issues, test for bugs, explore use cases and suggest new developments alongside your ongoing work."],
      ["HR integrations", "An individual member or a dedicated sub-team can work directly with your company, following requests, quality standards and deadlines."],
      ["Internships and theses", "We help connect companies with Politecnico students for supervised six-month internships or three-month thesis projects."],
    ],
  },
  {
    number: "03",
    title: "Media partnerships",
    items: [
      ["Event coverage", "We promote events across our channels, distribute promo codes and create content during the event for future editions."],
      ["Content creation", "We co-create content about topics of common interest, your product or service, or the company behind it."],
      ["Mentions", "Your logo can appear on agreed media; we can mention the company in articles, podcasts, videos and physical events."],
    ],
  },
];

export default function AboutPage() {
  return (
    <BlogShell>
      <section className="grid gap-10 border-b-2 border-blue-dark pb-12 dark:border-white lg:grid-cols-[minmax(0,1.15fr)_minmax(310px,0.65fr)] lg:items-end lg:gap-16 lg:pb-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">About us</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">The bridge between academia and Bitcoin.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed sm:text-xl">BitPolito is a student team at Politecnico di Torino and one of Italy&apos;s leading Bitcoin initiatives. We create opportunities to learn, build and connect around Bitcoin technology.</p>
        </div>
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border-l-2 border-t-2 border-blue-dark dark:border-white">
          {[['6', 'years of activity'], ['50', 'active members'], ['200', 'people involved'], ['30+', 'in the Bitcoin industry']].map(([value, label]) => <div key={label} className="border-b-2 border-r-2 border-blue-dark p-5 dark:border-white"><dt className="text-3xl font-semibold sm:text-4xl">{value}</dt><dd className="mt-2 text-sm font-bold uppercase leading-tight tracking-[0.12em] opacity-70">{label}</dd></div>)}
        </dl>
      </section>

      <section className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">Our mission</p><h2 className="mt-3 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Understanding Bitcoin beyond finance.</h2></div>
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
          <p>Founded four years ago, BitPolito has grown rapidly while staying focused on a deeper understanding and awareness of Bitcoin. We explore its technological and social dimensions, avoiding financial topics.</p>
          <p>Our work spans computer science and mathematical R&amp;D, education through courses and events, industry conferences and educational content with a scientific approach and a youthful voice.</p>
          <p>BitGeneration, our successful lecture series for high schools, offers a solid overview of Bitcoin. Internally, members train together, contribute to FOSS projects and gain hands-on experience on challenging real-world work.</p>
          <p>Inspired by the Cypherpunk movement, we stand for freedom, privacy and open-source principles. We collaborate with institutions, businesses and organisations to advocate the free and responsible use of technology.</p>
        </div>
      </section>

      <section className="border-y-2 border-blue-dark py-12 dark:border-white sm:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">Working together</p>
        <div className="mt-3 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Practical ways to partner with BitPolito.</h2><p className="max-w-md text-lg leading-relaxed opacity-75">We shape each collaboration around your goals, the students involved and the impact you want to create.</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {partnershipAreas.map((area) => <article key={area.number} className="rounded-xl border-2 border-blue-dark bg-white p-6 dark:border-white dark:bg-blue-dark sm:p-7"><p className="text-sm font-bold uppercase tracking-[0.14em] opacity-60">{area.number}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight">{area.title}</h3><div className="mt-7 divide-y-2 divide-blue-dark dark:divide-white">{area.items.map(([title, text]) => <div key={title} className="py-5 first:pt-0 last:pb-0"><h4 className="text-lg font-bold">{title}</h4><p className="mt-2 leading-relaxed opacity-80">{text}</p></div>)}</div></article>)}
        </div>
      </section>

      <section className="mt-16 rounded-xl border-2 border-blue-dark bg-blue-dark p-7 text-white dark:border-white dark:bg-white dark:text-blue-dark sm:mt-20 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-75">Partnerships</p>
        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-2xl"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something useful together.</h2><p className="mt-3 text-lg leading-relaxed">Talk to the team about an educational event, a technical project or a media partnership.</p></div><a href="mailto:info@bitpolito.it?subject=BitPolito%20partnership" className="rounded-md border-2 border-white px-6 py-3 text-center text-base font-bold transition-all hover:bg-white hover:text-blue-dark dark:border-blue-dark dark:hover:bg-blue-dark dark:hover:text-white">Contact the team</a></div>
      </section>
    </BlogShell>
  );
}
