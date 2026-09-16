const events = [
  {
    slug: "bitgeneration-4-corso-aperto-su-bitcoin",
    status: "past",
    type: "Formazione",
    title: "BitGeneration 4 · Corso aperto su Bitcoin",
    date: "28 ottobre – 2 dicembre 2025",
    location: "Aula 1S, Politecnico di Torino · 18:30–20:30",
    organiser: "BitPolito",
    image: "/chessboard/bitpolito-bitgeneration.png",
    imageAlt: "Locandina di BitGeneration 4",
    description: "Torna il ciclo di lezioni per scoprire Bitcoin a 360°. Affronta i principali aspetti tecnologici, economici e sociali di Bitcoin e ottieni la certificazione a fine corso.",
    details: [
      "Torna il ciclo di lezioni per scoprire Bitcoin a 360°. Affronta i principali aspetti tecnologici, economici e sociali di Bitcoin e ottieni la certificazione a fine corso.",
      "Realizza il punteggio più alto ai test finali di valutazione e vinci un BitBox dal valore di 150€.",
    ],
    program: [
      "28.10 · Economia, società e inclusione finanziaria — Emile Jellinek e Aurora Colucci",
      "4.11 · Basi informatiche e Architettura della rete — Simone Scirpoli",
      "11.11 · Crittografia, wallet e privacy — Gianluca Cappiello",
      "18.11 · Proof of work e Mining — Vik",
      "25.11 · Teoria dei giochi e incentivi — Francesco Pelle",
      "2.12 · Scaling Bitcoin — Antonio Guarini",
    ],
    note: "Gli incontri si terranno in aula 1S del Politecnico di Torino, 18:30–20:30. Potrai seguirli anche online attraverso il link che invieremo prima della lezione.",
  },
];

export function getEvent(slug) {
  return events.find((event) => event.slug === slug);
}

export default events;
