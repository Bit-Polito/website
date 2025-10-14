"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n/i18n";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Chessboard from "./components/Chessboard";
import DarkModeSwitch from "./components/DarkModeSwitch";
import LanguageSelector from "./components/LanguageSelector";

export default function HomePage() {
  const { t } = useTranslation();
  const [isCarouselFixed, setIsCarouselFixed] = useState(true);
  const chessboardRef = useRef(null);

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

  return (
    <div className="flex flex-col min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="
        px-4 sm:px-6 lg:px-8
        sm:mr-0 sm:ml-0 sm:break-words
        lg:flex-1 lg:overflow-y-auto lg:min-h-screen
        lg:pr-20 lg:pl-2 lg:break-words lg:mr-[460px]
        text-sm sm:text-base
      ">
        <header className="flex justify-between items-center gap-4 sm:gap-7 max-w-7xl w-full pt-4 sm:pt-6">
          <div className="relative w-[334px] sm:w-[160px] md:w-[200px] lg:w-[334px] mt-[20px] ml-[20px] sm:ml-[50px]">
            <img
              src="/bitpolito-logo-light.svg"
              alt="Bitpolito Logo"
              width={334}
              height={57}
              className="icon-style-opposite !w-full !h-auto"
            />
          </div>

          {/* only for mobile and tablet version */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:hidden">
            <DarkModeSwitch />
            <LanguageSelector />
          </div>
        </header>

        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 ml-[20px] sm:ml-[50px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
            {t("title")}
          </h1>

          <div className="max-w-prose">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide
               w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%]">
              {t("paragraph")}
            </p>
          </div>
        </div>

        {/* only for mobile and tablet version */}
        <div className="carousel-mobile">
          <Carousel />
        </div>

        <div className="flex mt-8 sm:mt-12">
          <div ref={chessboardRef}>
            <Chessboard />
          </div>

          <div className={`bg-white dark:bg-blue-dark carousel-desktop w-[460px] h-full p-2 ml-auto transition-all duration-300 top-0 right-0 ${isCarouselFixed ? "fixed" : "absolute"}`}>
            <Carousel />
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}