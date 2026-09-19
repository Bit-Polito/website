// Inserisci qui le lezioni nei licei. Ogni elemento viene mostrato
// automaticamente nella sezione corretta in base allo stato.
const schoolVisits = [
  {
    id: "istituto-istruzione-superiore-mario-delpozzo",
    location: "Cuneo",
    status: "upcoming",
    school: 'Istituto Istruzione Superiore "Mario Delpozzo"',
    formatKey: "coming",
  },
  {
    id: "istituto-istruzione-superiore-jc-maxwell",
    location: "Torino",
    status: "past",
    school: "Istituto di Istruzione Superiore J.C. Maxwell",
    formatKey: "course-ten",
  },
  {
    id: "istituto-tecnico-commerciale-g-sommeiller",
    location: "Nichelino",
    status: "past",
    school: "Istituto Tecnico Commerciale \"G. Sommeiller\"",
    formatKey: "intro",
  },
  {
    id: "iis-olivetti-ivrea",
    location: "Ivrea",
    status: "past",
    school: "IIS Olivetti di Ivrea",
    formatKey: "intro",
  },
  {
    id: "liceo-gramsci-ivrea",
    location: "Ivrea",
    status: "past",
    school: "Liceo Gramsci di Ivrea",
    formatKey: "intro",
  },
  {
    id: "iis-martinetti-caluso",
    location: "Caluso",
    status: "past",
    school: "IIS Martinetti di Caluso",
    formatKey: "intro",
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
