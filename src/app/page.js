"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n/i18n";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Chessboard from "./components/Chessboard";
import DarkModeSwitch from "./components/DarkModeSwitch";
import LanguageSelector from "./components/LanguageSelector";
import HamburgerMenu from "./components/HamburgerMenu";
import Image from "next/image";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [isCarouselFixed, setIsCarouselFixed] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isDonatePopupOpen, setIsDonatePopupOpen] = useState(false);
  const chessboardRef = useRef(null);

  // Load saved language on mount
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      if (chessboardRef.current) {
        const chessboardBottom = chessboardRef.current.getBoundingClientRect().bottom;
        setIsCarouselFixed(chessboardBottom > window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      {/* Mobile/Tablet Fixed Header - hidden on desktop */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9] dark:bg-blue-dark shadow-md">
        <div className="flex justify-between items-center gap-4 sm:gap-7 w-full pt-4 sm:pt-6 px-4 sm:px-6 pb-4">
          <div className="relative w-[200px] sm:w-[160px] md:w-[200px]">
            <Image
              src="/bitpolito-logo-light.svg"
              alt="Bitpolito Logo"
              width={334}
              height={57}
              className="icon-style-opposite !w-full !h-auto"
              unoptimized
            />
          </div>

          {/* Language selector and menu trigger for mobile/tablet */}
          <div className="flex flex-row items-center gap-2 sm:gap-4">
            <LanguageSelector />
            <HamburgerMenu variant="mobile" onDonateClick={() => setIsDonatePopupOpen(true)} />
          </div>
        </div>
      </header>

      {/* Desktop Fixed Controls - only theme and language selector fixed on right */}
      <div className={`hidden lg:flex fixed top-4 right-8 z-50 flex-row items-center gap-7 transition-opacity duration-300 ${isCarouselFixed ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <DarkModeSwitch />
        <LanguageSelector />
        <HamburgerMenu variant="desktop" onDonateClick={() => setIsDonatePopupOpen(true)} />
      </div>

      {/* Main Content with padding to account for fixed header */}
      <div className="
        pt-[100px] sm:pt-[110px] lg:pt-8
        px-4 sm:px-6 lg:px-8
        sm:mr-0 sm:ml-0 sm:break-words
        lg:flex-1 lg:overflow-y-auto lg:min-h-screen
        lg:pr-20 lg:pl-2 lg:break-words lg:mr-[460px]
        text-sm sm:text-base
        overflow-x-hidden
      ">
        {/* Desktop Logo - scrolls with content */}
        <div className="hidden lg:block w-full max-w-7xl pl-5 sm:pl-[50px] pr-5">
          <div className="relative w-[334px]">
            <Image
              src="/bitpolito-logo-light.svg"
              alt="Bitpolito Logo"
              width={334}
              height={57}
              className="icon-style-opposite !w-full !h-auto"
              unoptimized
            />
          </div>
        </div>

        <div className="w-full max-w-7xl mt-8 sm:mt-10 lg:mt-12 pl-5 sm:pl-[50px] pr-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-tight mt-16 mb-8 sm:mb-10 lg:mb-12">
            {t("title")}
          </h1>

          <div className="mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium leading-relaxed sm:leading-[1.4] lg:leading-[40px] tracking-wide
               whitespace-normal break-words">
              {t("paragraph")}
            </p>
          </div>

          {/* Download Report Button */}
          <div className="mt-6 mb-20 sm:mt-8">
            <a
              href={i18n.language === 'it' 
                ? "https://docs.bitpolito.it/bitpolito-report-24-25-ita.pdf" 
                : "https://docs.bitpolito.it/bitpolito-report-24-25-eng.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 text-base sm:text-lg font-semibold
                         border-2 border-blue-dark text-blue-dark bg-white
                         dark:border-white dark:text-white dark:bg-blue-dark
                         rounded-lg hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
            >
              <svg className="w-5 h-6" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 10.2857L20 13.7143L17.1429 13.7143L17.1429 10.2857L20 10.2857ZM14.2857 17.1429L14.2857 13.7143L17.1429 13.7143L17.1429 17.1429L14.2857 17.1429ZM11.4286 20.5714L14.2857 20.5714L14.2857 17.1429L11.4286 17.1429L11.4286 4.15356e-05L11.5598 4.13371e-05L8.2945 4.4479e-09L8.57145 1.58426e-07L8.57143 17.1429L5.71428 17.1429L5.71428 13.7143L2.85714 13.7143L2.85714 10.2857L-4.49604e-07 10.2857L-5.99471e-07 13.7143L2.85714 13.7143L2.85714 17.1429L5.71428 17.1429L5.71428 20.5714L8.57143 20.5714L8.57143 24L11.4286 24L11.4286 20.5714Z" fill="currentColor" />
              </svg>
              <span>{t("download-report")}</span>
            </a>
          </div>
        </div>

        {/* only for mobile and tablet version */}
        <div className="carousel-mobile">
          <Carousel isOpen={isDonatePopupOpen} setIsOpen={setIsDonatePopupOpen} />
        </div>

        <div className="flex mt-2 sm:mt-10 lg:mt-12">
          <div ref={chessboardRef}>
            <Chessboard />
          </div>

          <div className={`bg-white dark:bg-blue-dark carousel-desktop w-[460px] h-screen p-2 ml-auto transition-all duration-300 top-0 right-0 z-40 ${isCarouselFixed ? "fixed" : "absolute"}`}>
            <Carousel isOpen={isDonatePopupOpen} setIsOpen={setIsDonatePopupOpen} />
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}