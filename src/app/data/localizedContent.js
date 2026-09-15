const englishContent = {
  "event:bitgeneration-4-corso-aperto-su-bitcoin": {
    title: "BitGeneration 4 · Open Bitcoin course",
    date: "October 28 – December 2, 2025",
    description: "A course to discover Bitcoin from every angle: technology, economics and society, with a final certification.",
  },
  "article:executive-master-bitcoin-tecnologia-e-protocolli": {
    title: "Politecnico di Torino launches a new Executive Master in Bitcoin technology",
    date: "September 2026",
    description: "A new advanced program in software development, cryptography and Bitcoin protocol design, created with the Plan ₿ Foundation in Lugano.",
  },
  "hackathon:agentic-dollars-on-bitcoin": {
    date: "October 17–18, 2026",
    description: "Two days in Turin to build self-custodial digital-dollar apps powered by local AI and settled on Bitcoin.",
  },
  "project:bitpolito-academy": { category: "Education", description: "Materials and resources to study Bitcoin through a structured learning path." },
  "project:seed-signer": { category: "Open source", description: "An open-source project for exploring Bitcoin transaction signing." },
  "project:movie-subtitles": { category: "Open source", description: "Subtitles and translations that make Bitcoin content more accessible." },
};

export function localizeContent(item, language) {
  if (!language?.startsWith("en")) return item;
  return { ...item, ...(englishContent[`${item.type}:${item.slug}`] || {}) };
}
