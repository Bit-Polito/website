// `links` è l'elenco dei pulsanti della card; il primo è quello principale e
// `url` (usato dalla home) punta sempre a lui.
const projects = [
  {
    slug: "mining-game",
    title: "Mining Game",
    category: "Formazione",
    description: "Un gioco educativo interattivo che simula il mining di Bitcoin.",
    links: [
      { type: "play", url: "https://bitpolito-mining-game.vercel.app" },
      { type: "github", url: "https://github.com/BitPolito/MiningGame" },
    ],
  },
  {
    slug: "silent-payments",
    title: "Silent Payments",
    category: "Lab",
    description: "Un'implementazione proof-of-concept dei Silent Payments (BIP 352).",
    links: [
      { type: "demo", url: "https://silent-payments.vercel.app" },
      { type: "github", url: "https://github.com/BitPolito/silent-payments" },
    ],
  },
  {
    slug: "bitpolito-academy",
    title: "BitPolito Academy",
    category: "Formazione",
    description: "Un tutor AI open source e local-first per imparare Bitcoin.",
    links: [
      { type: "preview", url: "https://drive.google.com/file/d/1Zxj0i3HWSh27AcYz8YxH0qgqd3zJFOzE/view?pli=1" },
      { type: "github", url: "https://github.com/BitPolito/bitcoin-academy" },
    ],
  },
  {
    slug: "seed-signer",
    title: "SeedSigner by BitPolito",
    category: "Lab",
    description: "Un'immagine SeedSigner OS personalizzata da BitPolito, basata sul progetto ufficiale SeedSigner.",
    links: [
      { type: "download", url: "https://github.com/BitPolito/seedsigner/releases/latest/download/seedsigner_os.bitpolito.v1.pi0.img" },
      { type: "github", url: "https://github.com/BitPolito/seedsigner" },
    ],
  },
  {
    slug: "bitcoin-data-analysis",
    title: "Bitcoin Data Analysis",
    category: "Lab",
    description: "Un toolkit Python per recuperare, elaborare e analizzare i dati on-chain di Bitcoin e della Lightning Network.",
    links: [{ type: "github", url: "https://github.com/BitPolito/bitcoin-data-analysis" }],
  },
  {
    slug: "schnorr-signatures",
    title: "Schnorr Signatures",
    category: "Formazione",
    description: "Un'implementazione Python didattica delle firme di Schnorr e di MuSig, basata su BIP 340.",
    links: [{ type: "github", url: "https://github.com/BitPolito/schnorr-sig" }],
  },
  {
    slug: "bitcoin-testing-tools",
    title: "Bitcoin Testing Tools",
    category: "Lab",
    description: "Un framework di test basato su Docker per applicazioni Bitcoin e Lightning, con un ambiente Signet personalizzato.",
    links: [{ type: "github", url: "https://github.com/BitPolito/bitcoin-testing-tools" }],
  },
].map((project) => ({ ...project, url: project.links[0].url }));

export default projects;
