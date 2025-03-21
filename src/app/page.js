"use client";

import { useTranslation } from "react-i18next";
import "./i18n/i18n";
import functions from "./functions";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Chessboard from "./components/Chessboard";
import DarkModeSwitch from "./components/DarkModeSwitch";
import LanguageSelector from "./components/LanguageSelector";

export default function HomePage() {
  const { t } = useTranslation();
  const { isBottom, footerHeight, footerRef, scrollToTop } = functions();

  return (
    <div className="flex flex-col min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className={`${"sm:pr-2 sm:mr-0 sm:ml-0 sm:break-words" +
        " lg:flex-1 lg:overflow-y-auto lg:min-h-screen lg:pr-20 lg:pl-2 lg:break-words lg:mr-[350px]"
        }`} style={{ paddingBottom: `${footerHeight}px` }}
      >

        <header className="w-full flex justify-between">
          <img src="bitpolito-logo-light.png" className="icon-style-opposite !w-64 !h-16 pt-3 pl-4 mt-4"></img>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 lg:hidden block mt-3 mb-3 mr-4">
              <DarkModeSwitch />
            </div>
            <div className="flex items-center space-x-2 lg:hidden block">
              <LanguageSelector />
            </div>
          </div>
        </header>

        <h1 className="text-7xl my-2 mt-16 ml-4">{t("title")}</h1>
        <h2 className="text-2xl my-2 mt-3 ml-4">{t("paragraph")}</h2>

        <div className={`w-[400px] h-screen flex flex-col items-end justify-end p-2 ml-auto ${isBottom ? 'hidden' : 'block'} lg:fixed lg:right-0 lg:top-0 lg:z-20 absolute sm:relative`}>
          <Carousel />
        </div>

        <Chessboard />

        {isBottom && (
          <>
            <div className="fixed bottom-[calc(100vh-100px)] left-7 z-20" style={{ bottom: `${footerHeight + 15}px` }}>
              <button onClick={scrollToTop} className="btn-w">
                <img src={"icons/back-top-light.png"} className="icon-style-opposite !w-6 !h-6"></img>
                {t("top")}
              </button>
            </div>

            <div ref={footerRef} className="w-full bg-blue-dark dark:bg-white text-white dark:text-blue-dark font-bold p-4 fixed bottom-0 left-0 flex flex-col items-center justify-center space-y-4 z-10">
              <Footer />
            </div>
          </>
        )}
      </div>
    </div>
  );
}