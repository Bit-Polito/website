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
    "project:seed-signer": { category: "Lab", description: "An open-source project for exploring Bitcoin transaction signing." },
    "project:movie-subtitles": { category: "Education", description: "Subtitles and translations that make Bitcoin content more accessible." },
  },
  de: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Bildung",
      title: "BitGeneration 4 · Offener Bitcoin-Kurs",
      date: "28. Oktober – 2. Dezember 2025",
      description: "Ein Kurs, um Bitcoin aus jedem Blickwinkel zu entdecken: Technologie, Wirtschaft und Gesellschaft, mit Abschlusszertifikat.",
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
    "project:bitpolito-academy": { category: "Bildung", description: "Materialien und Ressourcen, um Bitcoin über einen strukturierten Lernpfad zu studieren." },
    "project:seed-signer": { category: "Lab", description: "Ein Open-Source-Projekt zur Erkundung der Signierung von Bitcoin-Transaktionen." },
    "project:movie-subtitles": { category: "Bildung", description: "Untertitel und Übersetzungen, die Bitcoin-Inhalte zugänglicher machen." },
  },
  es: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Formación",
      title: "BitGeneration 4 · Curso abierto sobre Bitcoin",
      date: "28 de octubre – 2 de diciembre de 2025",
      description: "Un curso para descubrir Bitcoin desde todos los ángulos: tecnología, economía y sociedad, con certificación final.",
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
    "project:bitpolito-academy": { category: "Formación", description: "Materiales y recursos para estudiar Bitcoin a través de un itinerario estructurado." },
    "project:seed-signer": { category: "Lab", description: "Un proyecto de código abierto para explorar la firma de transacciones de Bitcoin." },
    "project:movie-subtitles": { category: "Formación", description: "Subtítulos y traducciones que hacen más accesible el contenido sobre Bitcoin." },
  },
  fr: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Formation",
      title: "BitGeneration 4 · Cours ouvert sur Bitcoin",
      date: "28 octobre – 2 décembre 2025",
      description: "Un cours pour découvrir Bitcoin sous tous les angles : technologie, économie et société, avec certification finale.",
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
    "project:bitpolito-academy": { category: "Formation", description: "Matériel et ressources pour étudier Bitcoin à travers un parcours structuré." },
    "project:seed-signer": { category: "Lab", description: "Un projet open source pour explorer la signature des transactions Bitcoin." },
    "project:movie-subtitles": { category: "Formation", description: "Sous-titres et traductions qui rendent le contenu Bitcoin plus accessible." },
  },
  nl: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Opleiding",
      title: "BitGeneration 4 · Open Bitcoin-cursus",
      date: "28 oktober – 2 december 2025",
      description: "Een cursus om Bitcoin vanuit elke invalshoek te ontdekken: technologie, economie en maatschappij, met een eindcertificering.",
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
    "project:bitpolito-academy": { category: "Opleiding", description: "Materiaal en middelen om Bitcoin te bestuderen via een gestructureerd leertraject." },
    "project:seed-signer": { category: "Lab", description: "Een open source-project om het ondertekenen van Bitcoin-transacties te verkennen." },
    "project:movie-subtitles": { category: "Opleiding", description: "Ondertitels en vertalingen die Bitcoin-content toegankelijker maken." },
  },
  pt: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Formação",
      title: "BitGeneration 4 · Curso aberto sobre Bitcoin",
      date: "28 de outubro – 2 de dezembro de 2025",
      description: "Um curso para descobrir o Bitcoin de todos os ângulos: tecnologia, economia e sociedade, com certificação final.",
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
    "project:bitpolito-academy": { category: "Formação", description: "Materiais e recursos para estudar Bitcoin através de um percurso estruturado." },
    "project:seed-signer": { category: "Lab", description: "Um projeto open source para explorar a assinatura de transações Bitcoin." },
    "project:movie-subtitles": { category: "Formação", description: "Legendas e traduções que tornam o conteúdo sobre Bitcoin mais acessível." },
  },
  ru: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "Обучение",
      title: "BitGeneration 4 · Открытый курс по Bitcoin",
      date: "28 октября — 2 декабря 2025",
      description: "Курс, позволяющий рассмотреть Bitcoin со всех сторон: технологии, экономика и общество, с итоговой сертификацией.",
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
    "project:bitpolito-academy": { category: "Обучение", description: "Материалы и ресурсы для изучения Bitcoin по структурированной программе." },
    "project:seed-signer": { category: "Lab", description: "Open-source проект для изучения подписания транзакций Bitcoin." },
    "project:movie-subtitles": { category: "Обучение", description: "Субтитры и переводы, делающие контент о Bitcoin более доступным." },
  },
  zh: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "培训",
      title: "BitGeneration 4 · 比特币公开课",
      date: "2025 年 10 月 28 日 – 12 月 2 日",
      description: "一门从技术、经济和社会等多角度探索比特币的课程,并在结业时颁发证书。",
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
    "project:bitpolito-academy": { category: "教育", description: "通过结构化学习路径研究比特币的资料与资源。" },
    "project:seed-signer": { category: "实验室", description: "一个探索比特币交易签名的开源项目。" },
    "project:movie-subtitles": { category: "教育", description: "让比特币相关内容更易理解的字幕与翻译。" },
  },
  fa: {
    "event:bitgeneration-4-corso-aperto-su-bitcoin": {
      type: "آموزش",
      title: "BitGeneration 4 · دوره آزاد بیت‌کوین",
      date: "۶ آبان – ۱۱ آذر ۱۴۰۴",
      description: "دوره‌ای برای کشف بیت‌کوین از همه زوایا: فناوری، اقتصاد و جامعه، همراه با گواهی پایان دوره.",
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
    "project:bitpolito-academy": { category: "آموزش", description: "مطالب و منابعی برای مطالعه بیت‌کوین از طریق یک مسیر یادگیری ساختاریافته." },
    "project:seed-signer": { category: "آزمایشگاه", description: "یک پروژه متن‌باز برای بررسی امضای تراکنش‌های بیت‌کوین." },
    "project:movie-subtitles": { category: "آموزش", description: "زیرنویس‌ها و ترجمه‌هایی که محتوای بیت‌کوین را در دسترس‌تر می‌کنند." },
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
