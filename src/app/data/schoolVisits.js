// Inserisci qui le lezioni nei licei. Ogni elemento viene mostrato
// automaticamente nella sezione corretta in base allo stato.
const schoolVisits = [
  {
    id: "istituto-istruzione-superiore-mario-delpozzo",
    location: "Cuneo",
    status: "upcoming",
    school: 'Istituto Istruzione Superiore "Mario Delpozzo"',
    format: "Prossimamente",
  },
  {
    id: "istituto-istruzione-superiore-jc-maxwell",
    location: "Torino",
    status: "past",
    school: "Istituto di Istruzione Superiore J.C. Maxwell",
    format: "Corso di 10 lezioni",
  },
  {
    id: "istituto-tecnico-commerciale-g-sommeiller",
    location: "Nichelino",
    status: "past",
    school: "Istituto Tecnico Commerciale \"G. Sommeiller\"",
    format: "Lezione introduttiva",
  }
  // {
  //   id: "liceo-nome-2026",
  //   status: "upcoming", // "past" oppure "upcoming"
  //   school: "Nome del liceo",
  //   city: "Torino",
  //   date: "15 ottobre 2026",
  //   format: "Lezione in presenza",
  //   description: "Breve descrizione dell'incontro.",
  //   link: "https://...", // facoltativo
  // },
];

export const pastSchoolVisits = schoolVisits.filter((visit) => visit.status === "past");
export const upcomingSchoolVisits = schoolVisits.filter((visit) => visit.status === "upcoming");

export default schoolVisits;
