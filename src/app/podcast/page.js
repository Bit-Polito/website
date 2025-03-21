"use client";

import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import functions from "../functions";
import Footer from "../components/Footer";
import DarkModeSwitch from "../components/DarkModeSwitch";
import LanguageSelector from "../components/LanguageSelector";
import SpotifyPodcast from "../components/SpotifyPodcast";

export default function Podcast() {
  const { t } = useTranslation();
  const { isBottom, footerHeight, footerRef, scrollToTop } = functions();

  return (
    <>
      <div style={{ paddingBottom: `${footerHeight + 50}px` }}>
        <header className="w-full flex justify-end">
          <div className="flex items-center space-x-2 mt-3 mb-3 mr-4">
            <DarkModeSwitch />
            <LanguageSelector />
          </div>
        </header>

        <SpotifyPodcast />
      </div>

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
    </>
  );
}