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
