const blogPosts = [
  {
    slug: "executive-master-bitcoin-tecnologia-e-protocolli",
    title: "Il Politecnico di Torino lancia il nuovo Executive Master dedicato alla tecnologia Bitcoin",
    description:
      "Un nuovo percorso di alta formazione su sviluppo software, crittografia e protocolli dell'ecosistema Bitcoin, realizzato con la Fondazione Plan ₿ di Lugano.",
    image: "/chessboard/bitpolito-post-corso-bitcoin.jpg",
    imageAlt: "Grafica del corso Bitcoin di BitPolito",
    date: "Settembre 2026",
    readingTime: "6 min di lettura",
    courseUrl: "https://www.polito.it/didattica/master-e-formazione-permanente/corsi-executive/catalogo-corsi-executive/bitcoin-tecnologia-e-protocolli",
    content: [
      {
        paragraphs: [
          "Il Politecnico di Torino inaugura un nuovo percorso di alta formazione dedicato a uno dei settori tecnologici più innovativi degli ultimi anni: Bitcoin e le infrastrutture decentralizzate che ne costituiscono la base. Nasce così l'Executive Master “Bitcoin: tecnologia e protocolli”, un programma post-laurea progettato per fornire competenze avanzate nello sviluppo software, nella crittografia e nei protocolli alla base dell'ecosistema Bitcoin.",
          "Realizzato in collaborazione con la Fondazione Plan ₿ di Lugano, il percorso si rivolge a neolaureati e professionisti con background informatico, ingegneristico o tecnico-scientifico che desiderano specializzarsi in un ambito in rapida crescita e con importanti prospettive occupazionali.",
        ],
      },
      {
        heading: "Oltre la criptovaluta: Bitcoin come tecnologia informatica",
        paragraphs: [
          "Spesso associato esclusivamente al concetto di valuta digitale, Bitcoin rappresenta in realtà un insieme complesso di tecnologie: reti distribuite, protocolli crittografici, sistemi peer-to-peer, meccanismi di consenso e infrastrutture software open source.",
          "L'Executive Master nasce proprio con l'obiettivo di approfondire questi aspetti tecnici, formando figure capaci di comprendere e sviluppare soluzioni nell'ecosistema Bitcoin. Il programma affronta le basi teoriche del protocollo, le architetture software e gli strumenti necessari per contribuire concretamente allo sviluppo di applicazioni e servizi decentralizzati.",
        ],
      },
      {
        heading: "Un percorso tra teoria, sviluppo software e applicazioni pratiche",
        paragraphs: ["Il programma combina fondamenti teorici e attività pratiche, con particolare attenzione a:"],
        list: [
          "crittografia applicata e principi alla base di Bitcoin;",
          "architettura della blockchain e protocolli distribuiti;",
          "sviluppo software nell'ecosistema open source Bitcoin;",
          "Lightning Network e tecnologie di secondo livello;",
          "progettazione e realizzazione di soluzioni tecnologiche basate sui protocolli Bitcoin.",
        ],
        afterList: "L'approccio è pensato per chi possiede già competenze nello sviluppo software e vuole acquisire una specializzazione avanzata in un settore caratterizzato da forte innovazione tecnologica.",
      },
      {
        heading: "Una collaborazione internazionale per un settore in crescita",
        paragraphs: [
          "La collaborazione con la Fondazione Plan ₿ di Lugano rafforza la dimensione internazionale del progetto, collegando il mondo accademico con una delle realtà europee più attive nella formazione e nello sviluppo dell'ecosistema Bitcoin.",
          "L'obiettivo è creare un ponte tra università, ricerca e industria, preparando professionisti in grado di partecipare a progetti tecnologici complessi e contribuire all'evoluzione delle infrastrutture digitali decentralizzate.",
        ],
      },
      {
        heading: "Informazioni sul corso",
        paragraphs: [
          "L'Executive Master “Bitcoin: tecnologia e protocolli” si svolgerà da ottobre 2026 a maggio 2027 con formula part-time blended, combinando attività in presenza presso il Campus del Politecnico di Torino e modalità online.",
          "Dettagli principali:",
        ],
        list: [
          "Durata: 100 ore",
          "Lingua: italiano",
          "Modalità: part-time blended",
          "Sede: Torino",
          "Quota di iscrizione: 2.000 €",
          "Coordinamento scientifico: Prof. Danilo Bazzanella",
          "Scadenza iscrizioni: 30 settembre 2026 alle ore 14:00",
        ],
      },
      {
        heading: "Formare gli ingegneri del futuro digitale",
        paragraphs: [
          "Con questo nuovo Executive Master, il Politecnico di Torino amplia la propria offerta nel campo delle tecnologie emergenti, offrendo un percorso dedicato non all'utilizzo speculativo di Bitcoin, ma alla comprensione ingegneristica dei protocolli e delle infrastrutture che lo rendono possibile.",
          "In un contesto in cui sicurezza informatica, sistemi distribuiti e reti decentralizzate assumono un ruolo sempre più strategico, competenze specialistiche su Bitcoin e tecnologie correlate rappresentano una nuova frontiera per sviluppatori, ingegneri e professionisti dell'innovazione digitale.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export default blogPosts;
