"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSelector from "./LanguageSelector";
import HamburgerMenu from "./HamburgerMenu";

export default function BlogShell({ children }) {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [isDonatePopupOpen, setIsDonatePopupOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about-us") },
    { href: "/events", label: t("events") },
    { href: "/blog", label: t("blog") },
    { href: "/projects", label: t("projects") },
    { href: "/licei", label: t("licei") },
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-blue-dark bg-[#F9F9F9]/95 backdrop-blur-md dark:border-white dark:bg-blue-dark/95">
        <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between gap-5 px-4 sm:h-[86px] sm:px-8 lg:px-12">
          <Link href="/" aria-label="Torna alla home di BitPolito" className="relative block w-[190px] shrink-0 sm:w-[220px]">
            <Image
              src="/bitpolito-logo-light.svg"
              alt="BitPolito"
              width={334}
              height={57}
              className="icon-style-opposite !h-auto !w-full"
              unoptimized
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-4 py-2 text-sm font-bold transition-colors ${isActive ? "bg-blue-dark text-white dark:bg-white dark:text-blue-dark" : "hover:bg-blue-dark/10 dark:hover:bg-white/15"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <DarkModeSwitch />
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            <LanguageSelector />
            <HamburgerMenu variant="mobile" onDonateClick={() => setIsDonatePopupOpen(true)} />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-x-hidden px-4 pb-16 pt-[106px] sm:px-8 sm:pt-[122px] lg:px-12 lg:pb-24 lg:pt-[134px]">
        <div className="mx-auto w-full max-w-7xl">
          {children}
        </div>
      </main>

      <div className="footer">
        <Footer />
      </div>

      {isDonatePopupOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-blue-dark/30 p-4">
          <div className="max-w-md rounded-xl border-2 border-blue-dark bg-white p-7 text-blue-dark shadow-xl dark:border-white dark:bg-blue-dark dark:text-white">
            <p className="text-xl font-semibold">Grazie per il tuo supporto!</p>
            <p className="mt-3 leading-relaxed">Per effettuare una donazione, contatta il team BitPolito.</p>
            <button onClick={() => setIsDonatePopupOpen(false)} className="btn-w mt-6 rounded-md px-5">
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
