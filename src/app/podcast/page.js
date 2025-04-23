"use client";

// import { useTranslation } from "react-i18next";
// import "../i18n/i18n";
// import Footer from "../components/Footer";
// import DarkModeSwitch from "../components/DarkModeSwitch";
// import LanguageSelector from "../components/LanguageSelector";
// import SpotifyPodcast from "../components/SpotifyPodcast";

// to prevent access to podcast section
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Podcast() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;

  // const { t } = useTranslation();

  // return (
  //   <>
  //     <div>
  //       <header className="w-full flex justify-end">
  //         <div className="flex items-center gap-x-2 mt-3 mb-3 mr-4">
  //           <DarkModeSwitch />
  //           <LanguageSelector />
  //         </div>
  //       </header>

  //       <SpotifyPodcast />
  //     </div>

  //     <button
  //       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  //       className="btn-w ml-5"
  //     >
  //       <img src={"icons/back-top-light.png"} className="icon-style-opposite !w-6 !h-6" />
  //       <span>{t("top")}</span>
  //     </button>

  //     <div className="footer">
  //       <Footer />
  //     </div>
  //   </>
  // );
}