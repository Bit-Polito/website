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
      <div
        className="
        sm:pr-2 sm:mr-0 sm:ml-0 sm:break-words
        lg:flex-1 lg:overflow-y-auto lg:min-h-screen
        lg:pr-20 lg:pl-2 lg:break-words lg:mr-[350px]
        text-sm sm:text-base
        "
      >
        <header className="flex justify-between gap-7">
          <img src="bitpolito-logo-light.png" className="icon-style-opposite !w-fit !h-fit !mr-0 pt-3 pl-4 mt-4"></img>
          {/* only for mobile and tablet version */}
          <div className="flex flex-col items-center gap-4 mt-8 lg:hidden block">
            <DarkModeSwitch />
            <LanguageSelector />
          </div>
        </header>

        <h1 className="text-8xl my-2 mt-16 ml-4">{t("title")}</h1>
        <h1 className="text-xl my-2 mt-3 ml-4">{t("paragraph")}</h1>

        {/* only for mobile and tablte version */}
        <div className="sm:hidden">
          <Carousel />
        </div>

        <div className="flex">
          <div ref={chessboardRef}>
            <Chessboard />
          </div>

          <div className={`sm:block hidden w-[400px] h-full p-2 ml-auto transition-all duration-300 top-0 right-0 ${isCarouselFixed ? "fixed" : "absolute"}`}>
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