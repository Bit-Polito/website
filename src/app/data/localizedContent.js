// Per-locale overrides for card-level fields (title, date, description, category/type).
// Base data in the data files (events.js, blogPosts.js, projects.js, hackathon.js) is Italian.
const content = {
  en: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Training",
      title: "BitGeneration 4 · Open Bitcoin course",
      date: "October 28 – December 2, 2025",
      description: "A course to discover Bitcoin from every angle: technology, economics and society, with a final certification.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "Conference",
      title: "BitPolito speaker at BTC++ Berlin",
      date: "October 1 – 3, 2026",
      location: "Berlin, Germany",
      description: "Three days of hacking and workshops at bitcoin++ gets paid in Berlin. Mo Harchegani presents an open, self-hostable system for managing Lightning payments without giving up control of your node and keys.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "Conference",
      title: "BitPolito speaker at BTCHEL",
      date: "September 25 – 26, 2026",
      location: "Kaapelitehdas, Helsinki",
      description: "We'll be at BTCHEL, the first large-scale Bitcoin conference in the Nordic countries, with Aurora Colucci on stage talking about how Bitcoin can change the lives of ordinary people.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "Team presentation",
      title: "BitPolito Recruitment: join the team",
      date: "September 29, 2026 · 5:30 PM",
      location: "Room 13, Politecnico di Torino · Corso Duca degli Abruzzi 24",
      description: "Get to know BitPolito, the student team behind Bitcoin development and outreach, and meet someone who hires talent in the industry. Drinks for everyone afterwards.",
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
    "project:mining-game": { category: "Education", description: "An interactive educational game that simulates Bitcoin mining." },
    "project:silent-payments": { category: "Lab", description: "A proof-of-concept implementation of BIP 352 Silent Payments." },
    "project:bitpolito-academy": { category: "Education", description: "An open-source, local-first AI tutor for learning Bitcoin." },
    "project:seed-signer": { category: "Lab", description: "A customized SeedSigner OS image by BitPolito, built on the official SeedSigner project." },
    "project:bitcoin-data-analysis": { category: "Lab", description: "A Python toolkit for retrieving, processing and analyzing Bitcoin on-chain and Lightning Network data." },
    "project:schnorr-signatures": { category: "Education", description: "An educational Python implementation of Schnorr signatures and MuSig, based on BIP 340." },
    "project:bitcoin-testing-tools": { category: "Lab", description: "A Docker-based testing framework for Bitcoin and Lightning applications using a custom Signet environment." },
  },
  de: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Bildung",
      title: "BitGeneration 4 · Offener Bitcoin-Kurs",
      date: "28. Oktober – 2. Dezember 2025",
      description: "Ein Kurs, um Bitcoin aus jedem Blickwinkel zu entdecken: Technologie, Wirtschaft und Gesellschaft, mit Abschlusszertifikat.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "Konferenz",
      title: "BitPolito als Speaker bei BTC++ Berlin",
      date: "1. – 3. Oktober 2026",
      location: "Berlin, Deutschland",
      description: "Drei Tage Hacking und Workshops bei bitcoin++ gets paid in Berlin. Mo Harchegani stellt ein offenes, selbst hostbares System vor, um Lightning-Zahlungen zu verwalten, ohne die Kontrolle über den eigenen Node und die eigenen Schlüssel zu verlieren.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "Konferenz",
      title: "BitPolito als Speaker bei BTCHEL",
      date: "25. – 26. September 2026",
      location: "Kaapelitehdas, Helsinki",
      description: "Wir sind bei BTCHEL dabei, der ersten großen Bitcoin-Konferenz in den nordischen Ländern. Aurora Colucci spricht auf der Bühne darüber, wie Bitcoin das Leben gewöhnlicher Menschen verändern kann.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "Teamvorstellung",
      title: "BitPolito Recruiting: werde Teil des Teams",
      date: "29. September 2026 · 17:30 Uhr",
      location: "Raum 13, Politecnico di Torino · Corso Duca degli Abruzzi 24",
      description: "Lerne BitPolito kennen, das Studierendenteam für die Entwicklung und Verbreitung von Bitcoin, und triff jemanden, der Talente in der Branche sucht. Danach gibt es einen Aperitif für alle.",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "Das Politecnico di Torino startet einen neuen Executive Master in Bitcoin-Technologie",
      date: "September 2026",
      description: "Ein neues fortgeschrittenes Programm in Softwareentwicklung, Kryptografie und Bitcoin-Protokolldesign, in Zusammenarbeit mit der Plan-₿-Stiftung in Lugano.",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "17.–18. Oktober 2026",
      description: "Zwei Tage in Turin, um selbstverwaltete Digital-Dollar-Apps zu bauen, angetrieben von lokaler KI und abgewickelt über Bitcoin.",
    },
    "project:mining-game": { category: "Bildung", description: "Ein interaktives Lernspiel, das das Bitcoin-Mining simuliert." },
    "project:silent-payments": { category: "Lab", description: "Eine Proof-of-Concept-Implementierung der Silent Payments (BIP 352)." },
    "project:bitpolito-academy": { category: "Bildung", description: "Ein quelloffener, Local-First-KI-Tutor zum Lernen von Bitcoin." },
    "project:seed-signer": { category: "Lab", description: "Ein von BitPolito angepasstes SeedSigner-OS-Image, basierend auf dem offiziellen SeedSigner-Projekt." },
    "project:bitcoin-data-analysis": { category: "Lab", description: "Ein Python-Toolkit zum Abrufen, Verarbeiten und Analysieren von On-Chain-Daten von Bitcoin und des Lightning Network." },
    "project:schnorr-signatures": { category: "Bildung", description: "Eine didaktische Python-Implementierung von Schnorr-Signaturen und MuSig auf Basis von BIP 340." },
    "project:bitcoin-testing-tools": { category: "Lab", description: "Ein Docker-basiertes Test-Framework für Bitcoin- und Lightning-Anwendungen mit einer eigenen Signet-Umgebung." },
  },
  es: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Formación",
      title: "BitGeneration 4 · Curso abierto sobre Bitcoin",
      date: "28 de octubre – 2 de diciembre de 2025",
      description: "Un curso para descubrir Bitcoin desde todos los ángulos: tecnología, economía y sociedad, con certificación final.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "Conferencia",
      title: "BitPolito, ponente en BTC++ Berlín",
      date: "1 – 3 de octubre de 2026",
      location: "Berlín, Alemania",
      description: "Tres días de hacking y talleres en bitcoin++ gets paid de Berlín. Mo Harchegani presenta un sistema abierto y autoalojable para gestionar pagos Lightning sin perder el control de tu nodo ni de tus claves.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "Conferencia",
      title: "BitPolito, ponente en BTCHEL",
      date: "25 – 26 de septiembre de 2026",
      location: "Kaapelitehdas, Helsinki",
      description: "Estaremos en BTCHEL, la primera conferencia de Bitcoin a gran escala en los países nórdicos, con Aurora Colucci en el escenario hablando de cómo Bitcoin puede cambiar la vida de la gente corriente.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "Presentación del equipo",
      title: "Reclutamiento BitPolito: únete al equipo",
      date: "29 de septiembre de 2026 · 17:30",
      location: "Aula 13, Politecnico di Torino · Corso Duca degli Abruzzi 24",
      description: "Conoce BitPolito, el equipo estudiantil dedicado al desarrollo y la divulgación de Bitcoin, y encuentra a quien busca talento en el sector. Al terminar, aperitivo para todos.",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "El Politecnico di Torino lanza un nuevo Executive Master en tecnología Bitcoin",
      date: "Septiembre de 2026",
      description: "Un nuevo programa avanzado en desarrollo de software, criptografía y diseño de protocolos Bitcoin, creado con la Fundación Plan ₿ de Lugano.",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "17–18 de octubre de 2026",
      description: "Dos días en Turín para construir apps de dólares digitales autocustodiados, impulsadas por IA local y liquidadas en Bitcoin.",
    },
    "project:mining-game": { category: "Formación", description: "Un juego educativo interactivo que simula la minería de Bitcoin." },
    "project:silent-payments": { category: "Lab", description: "Una implementación de prueba de concepto de los Silent Payments (BIP 352)." },
    "project:bitpolito-academy": { category: "Formación", description: "Un tutor de IA de código abierto y local-first para aprender Bitcoin." },
    "project:seed-signer": { category: "Lab", description: "Una imagen personalizada de SeedSigner OS por BitPolito, basada en el proyecto oficial SeedSigner." },
    "project:bitcoin-data-analysis": { category: "Lab", description: "Un kit de herramientas en Python para obtener, procesar y analizar datos on-chain de Bitcoin y de la Lightning Network." },
    "project:schnorr-signatures": { category: "Formación", description: "Una implementación educativa en Python de las firmas de Schnorr y MuSig, basada en BIP 340." },
    "project:bitcoin-testing-tools": { category: "Lab", description: "Un framework de pruebas basado en Docker para aplicaciones Bitcoin y Lightning con un entorno Signet personalizado." },
  },
  fr: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Formation",
      title: "BitGeneration 4 · Cours ouvert sur Bitcoin",
      date: "28 octobre – 2 décembre 2025",
      description: "Un cours pour découvrir Bitcoin sous tous les angles : technologie, économie et société, avec certification finale.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "Conférence",
      title: "BitPolito intervient à BTC++ Berlin",
      date: "1er – 3 octobre 2026",
      location: "Berlin, Allemagne",
      description: "Trois jours de hacking et d'ateliers à bitcoin++ gets paid à Berlin. Mo Harchegani présente un système ouvert et auto-hébergeable pour gérer les paiements Lightning sans perdre le contrôle de votre nœud et de vos clés.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "Conférence",
      title: "BitPolito intervient à BTCHEL",
      date: "25 – 26 septembre 2026",
      location: "Kaapelitehdas, Helsinki",
      description: "Nous serons à BTCHEL, la première conférence Bitcoin à grande échelle dans les pays nordiques, avec Aurora Colucci sur scène pour parler de la façon dont Bitcoin peut changer la vie des gens ordinaires.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "Présentation de l'équipe",
      title: "Recrutement BitPolito : rejoins l'équipe",
      date: "29 septembre 2026 · 17h30",
      location: "Salle 13, Politecnico di Torino · Corso Duca degli Abruzzi 24",
      description: "Découvre BitPolito, l'équipe étudiante dédiée au développement et à la diffusion de Bitcoin, et rencontre quelqu'un qui recrute des talents du secteur. Apéritif pour tous à la fin.",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "Le Politecnico di Torino lance un nouvel Executive Master en technologie Bitcoin",
      date: "Septembre 2026",
      description: "Un nouveau programme avancé en développement logiciel, cryptographie et conception de protocoles Bitcoin, créé avec la Fondation Plan ₿ de Lugano.",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "17–18 octobre 2026",
      description: "Deux jours à Turin pour construire des applications de dollars numériques autogérées, propulsées par l'IA locale et réglées en Bitcoin.",
    },
    "project:mining-game": { category: "Formation", description: "Un jeu éducatif interactif qui simule le minage de Bitcoin." },
    "project:silent-payments": { category: "Lab", description: "Une implémentation de preuve de concept des Silent Payments (BIP 352)." },
    "project:bitpolito-academy": { category: "Formation", description: "Un tuteur IA open source et local-first pour apprendre Bitcoin." },
    "project:seed-signer": { category: "Lab", description: "Une image SeedSigner OS personnalisée par BitPolito, basée sur le projet officiel SeedSigner." },
    "project:bitcoin-data-analysis": { category: "Lab", description: "Une boîte à outils Python pour récupérer, traiter et analyser les données on-chain de Bitcoin et du Lightning Network." },
    "project:schnorr-signatures": { category: "Formation", description: "Une implémentation pédagogique en Python des signatures de Schnorr et de MuSig, basée sur BIP 340." },
    "project:bitcoin-testing-tools": { category: "Lab", description: "Un framework de test basé sur Docker pour les applications Bitcoin et Lightning, avec un environnement Signet personnalisé." },
  },
  nl: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Opleiding",
      title: "BitGeneration 4 · Open Bitcoin-cursus",
      date: "28 oktober – 2 december 2025",
      description: "Een cursus om Bitcoin vanuit elke invalshoek te ontdekken: technologie, economie en maatschappij, met een eindcertificering.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "Conferentie",
      title: "BitPolito spreekt op BTC++ Berlijn",
      date: "1 – 3 oktober 2026",
      location: "Berlijn, Duitsland",
      description: "Drie dagen hacking en workshops op bitcoin++ gets paid in Berlijn. Mo Harchegani presenteert een open, zelf te hosten systeem om Lightning-betalingen te beheren zonder de controle over je node en sleutels te verliezen.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "Conferentie",
      title: "BitPolito spreekt op BTCHEL",
      date: "25 – 26 september 2026",
      location: "Kaapelitehdas, Helsinki",
      description: "We zijn erbij op BTCHEL, de eerste grootschalige Bitcoin-conferentie in de Scandinavische landen, met Aurora Colucci op het podium over hoe Bitcoin het leven van gewone mensen kan veranderen.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "Teampresentatie",
      title: "BitPolito-recruitment: word lid van het team",
      date: "29 september 2026 · 17:30",
      location: "Zaal 13, Politecnico di Torino · Corso Duca degli Abruzzi 24",
      description: "Maak kennis met BitPolito, het studententeam dat Bitcoin ontwikkelt en verspreidt, en ontmoet iemand die talent werft in de sector. Na afloop een aperitief voor iedereen.",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "Politecnico di Torino lanceert nieuwe Executive Master in Bitcoin-technologie",
      date: "September 2026",
      description: "Een nieuw geavanceerd programma in softwareontwikkeling, cryptografie en Bitcoin-protocolontwerp, ontwikkeld met de Plan ₿ Foundation in Lugano.",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "17–18 oktober 2026",
      description: "Twee dagen in Turijn om self-custodial digitale dollar-apps te bouwen, aangedreven door lokale AI en afgewikkeld via Bitcoin.",
    },
    "project:mining-game": { category: "Opleiding", description: "Een interactief educatief spel dat Bitcoin-mining simuleert." },
    "project:silent-payments": { category: "Lab", description: "Een proof-of-concept-implementatie van Silent Payments (BIP 352)." },
    "project:bitpolito-academy": { category: "Opleiding", description: "Een open source, local-first AI-tutor om Bitcoin te leren." },
    "project:seed-signer": { category: "Lab", description: "Een door BitPolito aangepaste SeedSigner OS-image, gebaseerd op het officiële SeedSigner-project." },
    "project:bitcoin-data-analysis": { category: "Lab", description: "Een Python-toolkit voor het ophalen, verwerken en analyseren van on-chain data van Bitcoin en het Lightning Network." },
    "project:schnorr-signatures": { category: "Opleiding", description: "Een educatieve Python-implementatie van Schnorr-handtekeningen en MuSig, gebaseerd op BIP 340." },
    "project:bitcoin-testing-tools": { category: "Lab", description: "Een Docker-gebaseerd testframework voor Bitcoin- en Lightning-applicaties met een eigen Signet-omgeving." },
  },
  pt: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Formação",
      title: "BitGeneration 4 · Curso aberto sobre Bitcoin",
      date: "28 de outubro – 2 de dezembro de 2025",
      description: "Um curso para descobrir o Bitcoin de todos os ângulos: tecnologia, economia e sociedade, com certificação final.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "Conferência",
      title: "BitPolito é speaker na BTC++ Berlim",
      date: "1 – 3 de outubro de 2026",
      location: "Berlim, Alemanha",
      description: "Três dias de hacking e workshops no bitcoin++ gets paid, em Berlim. O Mo Harchegani apresenta um sistema aberto e self-hostable para gerir pagamentos Lightning sem perder o controlo do teu nó e das tuas chaves.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "Conferência",
      title: "BitPolito é speaker na BTCHEL",
      date: "25 – 26 de setembro de 2026",
      location: "Kaapelitehdas, Helsínquia",
      description: "Vamos estar na BTCHEL, a primeira conferência Bitcoin em grande escala nos países nórdicos, com a Aurora Colucci em palco a falar de como o Bitcoin pode mudar a vida das pessoas comuns.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "Apresentação da equipa",
      title: "Recrutamento BitPolito: junta-te à equipa",
      date: "29 de setembro de 2026 · 17h30",
      location: "Sala 13, Politecnico di Torino · Corso Duca degli Abruzzi 24",
      description: "Conhece a BitPolito, a equipa estudantil dedicada ao desenvolvimento e à divulgação do Bitcoin, e encontra quem recruta talento no setor. No final, aperitivo para todos.",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "A Politecnico di Torino lança um novo Executive Master em tecnologia Bitcoin",
      date: "Setembro de 2026",
      description: "Um novo programa avançado em desenvolvimento de software, criptografia e design de protocolos Bitcoin, criado com a Fundação Plan ₿ de Lugano.",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "17–18 de outubro de 2026",
      description: "Dois dias em Turim para construir apps de dólares digitais autocustodiados, impulsionadas por IA local e liquidadas em Bitcoin.",
    },
    "project:mining-game": { category: "Formação", description: "Um jogo educativo interativo que simula a mineração de Bitcoin." },
    "project:silent-payments": { category: "Lab", description: "Uma implementação de prova de conceito dos Silent Payments (BIP 352)." },
    "project:bitpolito-academy": { category: "Formação", description: "Um tutor de IA open source e local-first para aprender Bitcoin." },
    "project:seed-signer": { category: "Lab", description: "Uma imagem personalizada do SeedSigner OS pela BitPolito, baseada no projeto oficial SeedSigner." },
    "project:bitcoin-data-analysis": { category: "Lab", description: "Um kit de ferramentas em Python para obter, processar e analisar dados on-chain do Bitcoin e da Lightning Network." },
    "project:schnorr-signatures": { category: "Formação", description: "Uma implementação educativa em Python das assinaturas de Schnorr e do MuSig, baseada no BIP 340." },
    "project:bitcoin-testing-tools": { category: "Lab", description: "Um framework de testes baseado em Docker para aplicações Bitcoin e Lightning com um ambiente Signet personalizado." },
  },
  ru: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Обучение",
      title: "BitGeneration 4 · Открытый курс по Bitcoin",
      date: "28 октября — 2 декабря 2025",
      description: "Курс, позволяющий рассмотреть Bitcoin со всех сторон: технологии, экономика и общество, с итоговой сертификацией.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "Конференция",
      title: "BitPolito выступает на BTC++ в Берлине",
      date: "1 – 3 октября 2026",
      location: "Берлин, Германия",
      description: "Три дня хакинга и воркшопов на bitcoin++ gets paid в Берлине. Мо Харчегани представит открытую систему с возможностью self-hosting для управления платежами Lightning без потери контроля над своим узлом и ключами.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "Конференция",
      title: "BitPolito выступает на BTCHEL",
      date: "25 – 26 сентября 2026",
      location: "Kaapelitehdas, Хельсинки",
      description: "Мы будем на BTCHEL — первой масштабной Bitcoin-конференции в странах Северной Европы: Аврора Колуччи расскажет со сцены, как Bitcoin может изменить жизнь обычных людей.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "Презентация команды",
      title: "Набор в BitPolito: присоединяйся к команде",
      date: "29 сентября 2026 · 17:30",
      location: "Аудитория 13, Политехнический университет Турина · Corso Duca degli Abruzzi, 24",
      description: "Познакомься с BitPolito — студенческой командой, занимающейся разработкой и популяризацией Bitcoin, и встреться с тем, кто ищет таланты в отрасли. После встречи — аперитив для всех.",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "Политехнический университет Турина запускает новую программу Executive Master по технологии Bitcoin",
      date: "Сентябрь 2026",
      description: "Новая продвинутая программа по разработке ПО, криптографии и проектированию протоколов Bitcoin, созданная совместно с фондом Plan ₿ в Лугано.",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "17–18 октября 2026",
      description: "Два дня в Турине, чтобы создать приложения для самостоятельного хранения цифровых долларов на основе локального ИИ с расчётами в Bitcoin.",
    },
    "project:mining-game": { category: "Обучение", description: "Интерактивная обучающая игра, имитирующая майнинг Bitcoin." },
    "project:silent-payments": { category: "Lab", description: "Proof-of-concept реализация Silent Payments (BIP 352)." },
    "project:bitpolito-academy": { category: "Обучение", description: "Открытый local-first ИИ-репетитор для изучения Bitcoin." },
    "project:seed-signer": { category: "Lab", description: "Образ SeedSigner OS, доработанный BitPolito на основе официального проекта SeedSigner." },
    "project:bitcoin-data-analysis": { category: "Lab", description: "Python-инструментарий для получения, обработки и анализа ончейн-данных Bitcoin и Lightning Network." },
    "project:schnorr-signatures": { category: "Обучение", description: "Учебная реализация подписей Шнорра и MuSig на Python по BIP 340." },
    "project:bitcoin-testing-tools": { category: "Lab", description: "Тестовый фреймворк на базе Docker для приложений Bitcoin и Lightning с собственной средой Signet." },
  },
  zh: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "培训",
      title: "BitGeneration 4 · 比特币公开课",
      date: "2025 年 10 月 28 日 – 12 月 2 日",
      description: "一门从技术、经济和社会等多角度探索比特币的课程,并在结业时颁发证书。",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "会议",
      title: "BitPolito 出席柏林 BTC++ 并发表演讲",
      date: "2026 年 10 月 1 – 3 日",
      location: "德国柏林",
      description: "三天的黑客松与工作坊,地点在柏林的 bitcoin++ gets paid。Mo Harchegani 将展示一套开放、可自托管的系统,用于管理闪电网络支付,同时完全掌控你的节点和密钥。",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "会议",
      title: "BitPolito 出席 BTCHEL 并发表演讲",
      date: "2026 年 9 月 25 – 26 日",
      location: "Kaapelitehdas,赫尔辛基",
      description: "我们将参加 BTCHEL——北欧首个大规模比特币会议,Aurora Colucci 将登台讲述比特币如何改变普通人的生活。",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "团队介绍会",
      title: "BitPolito 招募:加入团队",
      date: "2026 年 9 月 29 日 · 17:30",
      location: "都灵理工大学 13 教室 · Corso Duca degli Abruzzi 24",
      description: "来认识 BitPolito——专注于比特币开发与推广的学生团队,并见见行业内的招聘负责人。活动结束后为大家准备了开胃酒会。",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "都灵理工大学推出全新比特币技术高级硕士项目",
      date: "2026 年 9 月",
      description: "一项关于软件开发、密码学和比特币协议设计的全新高级课程,与卢加诺 Plan ₿ 基金会合作推出。",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "2026 年 10 月 17–18 日",
      description: "在都灵度过两天,打造由本地 AI 驱动、以比特币结算的自托管数字美元应用。",
    },
    "project:mining-game": { category: "教育", description: "一款模拟比特币挖矿的互动式教育游戏。" },
    "project:silent-payments": { category: "实验室", description: "静默支付（BIP 352）的概念验证实现。" },
    "project:bitpolito-academy": { category: "教育", description: "一个开源、本地优先的 AI 导师，用于学习比特币。" },
    "project:seed-signer": { category: "实验室", description: "BitPolito 定制的 SeedSigner OS 镜像，基于官方 SeedSigner 项目构建。" },
    "project:bitcoin-data-analysis": { category: "实验室", description: "一个用于获取、处理和分析比特币链上数据及闪电网络数据的 Python 工具包。" },
    "project:schnorr-signatures": { category: "教育", description: "基于 BIP 340 的 Schnorr 签名与 MuSig 的教学型 Python 实现。" },
    "project:bitcoin-testing-tools": { category: "实验室", description: "基于 Docker 的比特币与闪电网络应用测试框架，使用自定义 Signet 环境。" },
  },
  fa: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "آموزش",
      title: "BitGeneration 4 · دوره آزاد بیت‌کوین",
      date: "۶ آبان – ۱۱ آذر ۱۴۰۴",
      description: "دوره‌ای برای کشف بیت‌کوین از همه زوایا: فناوری، اقتصاد و جامعه، همراه با گواهی پایان دوره.",
    },
    "event:bitpolito-speaker-a-btcpp-berlino": {
      type: "کنفرانس",
      title: "سخنرانی BitPolito در BTC++ برلین",
      date: "۹ – ۱۱ مهر ۱۴۰۵",
      location: "برلین، آلمان",
      description: "سه روز هک و کارگاه در bitcoin++ gets paid برلین. Mo Harchegani سیستمی باز و قابل میزبانی شخصی برای مدیریت پرداخت‌های لایتنینگ ارائه می‌کند، بدون از دست دادن کنترل نود و کلیدهایتان.",
    },
    "event:bitpolito-speaker-a-btchel": {
      type: "کنفرانس",
      title: "سخنرانی BitPolito در BTCHEL",
      date: "۳ – ۴ مهر ۱۴۰۵",
      location: "Kaapelitehdas، هلسینکی",
      description: "ما در BTCHEL، نخستین کنفرانس بزرگ‌مقیاس بیت‌کوین در کشورهای شمال اروپا، حضور خواهیم داشت و Aurora Colucci روی صحنه درباره این‌که بیت‌کوین چگونه می‌تواند زندگی مردم عادی را تغییر دهد صحبت می‌کند.",
    },
    "event:unisciti-a-bitpolito-29-settembre": {
      type: "معرفی تیم",
      title: "استخدام در BitPolito: به تیم بپیوندید",
      date: "۷ مهر ۱۴۰۵ · ۱۷:۳۰",
      location: "کلاس ۱۳، دانشگاه پلی‌تکنیک تورین · Corso Duca degli Abruzzi 24",
      description: "با BitPolito، تیم دانشجویی فعال در توسعه و آموزش بیت‌کوین، آشنا شوید و با فردی که در این صنعت به‌دنبال استعداد است دیدار کنید. در پایان، پذیرایی آپریتیوو برای همه.",
    },
    "article:executive-master-bitcoin-tecnologia-e-protocolli": {
      title: "دانشگاه پلی‌تکنیک تورین دوره جدید Executive Master در فناوری بیت‌کوین را راه‌اندازی کرد",
      date: "سپتامبر ۲۰۲۶",
      description: "یک برنامه پیشرفته جدید در توسعه نرم‌افزار، رمزنگاری و طراحی پروتکل بیت‌کوین، که با همکاری بنیاد Plan ₿ در لوگانو ایجاد شده است.",
    },
    "hackathon:agentic-dollars-on-bitcoin": {
      date: "۲۵–۲۶ مهر ۱۴۰۵",
      description: "دو روز در تورین برای ساخت اپلیکیشن‌های دلار دیجیتال خودنگهدارانه، مبتنی بر هوش مصنوعی محلی و تسویه‌شده روی بیت‌کوین.",
    },
    "project:mining-game": { category: "آموزش", description: "یک بازی آموزشی تعاملی که استخراج بیت‌کوین را شبیه‌سازی می‌کند." },
    "project:silent-payments": { category: "آزمایشگاه", description: "پیاده‌سازی اثبات مفهوم پرداخت‌های بی‌صدا (BIP 352)." },
    "project:bitpolito-academy": { category: "آموزش", description: "یک معلم هوش مصنوعی متن‌باز و محلی‌محور برای یادگیری بیت‌کوین." },
    "project:seed-signer": { category: "آزمایشگاه", description: "یک تصویر سفارشی SeedSigner OS از BitPolito، بر پایه پروژه رسمی SeedSigner." },
    "project:bitcoin-data-analysis": { category: "آزمایشگاه", description: "یک جعبه‌ابزار پایتون برای دریافت، پردازش و تحلیل داده‌های آن‌چین بیت‌کوین و شبکه لایتنینگ." },
    "project:schnorr-signatures": { category: "آموزش", description: "پیاده‌سازی آموزشی پایتون از امضاهای شنور و MuSig بر پایه BIP 340." },
    "project:bitcoin-testing-tools": { category: "آزمایشگاه", description: "یک چارچوب آزمون مبتنی بر Docker برای برنامه‌های بیت‌کوین و لایتنینگ با محیط Signet سفارشی." },
  },
};

// Backwards-compatible alias used by the existing callers.
content.it = {}; // Italian is the base language already in the data files; no override needed.

export function localizeContent(item, language) {
  const lang = (language || "it").split("-")[0];
  const table = content[lang];
  if (!table) return item;
  return { ...item, ...(table[`${item.type}:${item.slug}`] || {}) };
}

// City names that have a common exonym in other languages. Cities without an
// entry here (e.g. Cuneo, Nichelino) are kept as-is in every language.
const cityNames = {
  Torino: { en: "Turin", de: "Turin", es: "Turín", fr: "Turin", nl: "Turijn", pt: "Turim", ru: "Турин", zh: "都灵", fa: "تورین" },
};

export function localizeCity(city, language) {
  const lang = (language || "it").split("-")[0];
  return cityNames[city]?.[lang] || city;
}
