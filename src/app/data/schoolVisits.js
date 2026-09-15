// Inserisci qui le lezioni nei licei. Ogni elemento viene mostrato
// automaticamente nella sezione corretta in base allo stato.
const schoolVisits = [
  {
    id: "istituto-istruzione-superiore-mario-delpozzo",
    status: "upcoming",
    school: 'Istituto Istruzione Superiore "Mario Delpozzo"',
    format: "Prossimamente",
  },
  {
    id: "istituto-istruzione-superiore-jc-maxwell",
    status: "past",
    school: "Istituto di Istruzione Superiore J.C. Maxwell",
    format: "Corso di 10 lezioni",
  },
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
