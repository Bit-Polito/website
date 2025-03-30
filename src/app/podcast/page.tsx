"use client";

import { useTranslation } from "react-i18next";
import "./i18n/i18n";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import DarkModeSwitch from "../components/DarkModeSwitch";
import LanguageSelector from "../components/LanguageSelector";
import SpotifyPodcast from "../components/SpotifyPodcast";

export default function HomePage() {
    const { t } = useTranslation();
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const [footerHeight, setFooterHeight] = useState<number>(0);
    const footerRef = useRef<HTMLDivElement>(null);

    const scrollToTop = (): void => {
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, -window.scrollY / (500 / 15));
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    const handleScroll = (): void => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        setIsBottom(isAtBottom);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (footerRef.current) {
            setFooterHeight(footerRef.current.offsetHeight);
        }
    }, [isBottom]);

    useEffect(() => {
        const handleResize = (): void => {
            if (footerRef.current) {
                setFooterHeight(footerRef.current.offsetHeight);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

                <SpotifyPodcast />

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