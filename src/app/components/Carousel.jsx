"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSelector from "./LanguageSelector";
// import Link from "next/link";

const carouselImages = [
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-missione-praga.png",
    "/DRAFT-bitpolito-panel-mining.jpg",
    "/DRAFT-bitpolito-partnership-braiins.jpg"
];

const imageLinks = ["", "", "", ""];

export default function Carousel() {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [fade, setFade] = useState(true);
    const [arrowsVisible, setArrowsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // to make the carousel swipeable on mobile and on desktop
    const startX = useRef(0);
    const isDragging = useRef(false);
    const hasMoved = useRef(false);
    const threshold = 50;

    const descriptionImages = [
        t("alt-img-1"),
        t("alt-img-2"),
        t("alt-img-3"),
        t("alt-img-4"),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % carouselImages.length);
                setProgress(0);
                setFade(true);
            }, 100);
        }, 15000);

        const progressInterval = setInterval(() => {
            if (fade) {
                setProgress((prev) => (prev + 1) % 100);
            }
        }, 150);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [fade]);

    const changeImage = (direction) => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + direction + carouselImages.length) % carouselImages.length);
            setProgress(0);
            setFade(true);
        }, 100);
    };

    const showArrows = (visible) => {
        setArrowsVisible(visible);
    };

    // Disable scrolling when the popup is open
    useEffect(() => {
        (isOpen) ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    // Allows to paragraph in the popup to go to a new line
    const newLine = (text) =>
        text.split(". ").map((sentence, i) => (
            <span key={i}>
                {sentence}.
                <br />
            </span>
        ));

    // Swipable carousel
    const handleStart = (x) => {
        startX.current = x;
        isDragging.current = true;
        hasMoved.current = false;
    };

    const handleMove = (x) => {
        if (!isDragging.current) return;
        const difference = x - startX.current;

        if (Math.abs(difference) > threshold && !hasMoved.current) {
            hasMoved.current = true;
            (difference > 0) ? changeImage(-1) : changeImage(1);
        }
    };

    const handleEnd = () => {
        isDragging.current = false;
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center w-full">
            <header className="w-full flex justify-center mb-[15px]">
                <div className="flex items-center gap-x-7 lg:flex hidden">
                    <DarkModeSwitch />
                    <LanguageSelector />
                </div>
            </header>

            <div className="flex justify-between gap-x-8 mb-3 mt-7 font-sf-pro font-[590] text-[25px] leading-[22px] tracking-normal text-center align-middle mb-[25px]">
                <a className="cursor-not-allowed transition-all duration-200 hover:scale-105 font-bold">{t("projects")}</a>
                <a className="cursor-not-allowed transition-all duration-200 hover:scale-105 font-bold">{t("podcast")}</a>
                <a className="cursor-not-allowed transition-all duration-200 hover:scale-105 font-bold">{t("about")}</a>
            </div>

            <div
                onMouseEnter={() => showArrows(true)}
                onMouseLeave={() => showArrows(false)}
                className="relative"
            >
                <div className="w-full h-1 bg-white dark:bg-blue-dark mb-2">
                    <div
                        className="h-full bg-blue-dark dark:bg-white"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <button
                    onClick={() => changeImage(-1)}
                    className={`arrow left-0 ${arrowsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    &lt;
                </button>
                <a href={imageLinks[currentImage]} target="_blank" rel="noopener noreferrer">
                    <img
                        src={carouselImages[currentImage]}
                        title={descriptionImages[currentImage]}
                        className={`w-full h-[583px] object-cover transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} cursor-grab active:cursor-grabbing`}
                        // for mobile / tablet
                        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                        onTouchEnd={handleEnd}
                        // for desktop
                        onMouseDown={(e) => handleStart(e.clientX)}
                        onMouseMove={(e) => {
                            if (isDragging.current) e.preventDefault();
                            handleMove(e.clientX);
                        }}
                        onMouseUp={handleEnd}
                        onMouseLeave={handleEnd}
                    />
                </a>
                <button
                    onClick={() => changeImage(1)}
                    className={`arrow right-0 ${arrowsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    &gt;
                </button>

                <footer className="w-full flex justify-between gap-x-[5.5px] mt-[10px]">
                    <a href="https://t.me/BitPolitoForum" target="_blank" rel="noopener noreferrer" className="btn-w w-[259px] h-[60px]">
                        <img src={"icons/bitpolito-icon-social-telegram.svg"} className="icon-style-opposite w-[30px] h-[30px] mr-[10px]"></img>
                        <p className="font-sf-pro-display font-medium text-[20px] leading-[40px] tracking-normal align-middle">{t("telegram")}</p>
                    </a>
                    <button onClick={() => setIsOpen(true)} className="btn-b w-[184px] h-[60px]">
                        <img src="icons/donate-light.png" className="icon-style !h-[26px] !mr-[10px]"></img>
                        <p className="font-sf-pro-display font-semibold text-[20px] leading-[1] tracking-normal">{t("donate")}</p>
                    </button>
                </footer>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="relative bg-white dark:bg-[#0016E5] w-[900px] h-[700px] rounded-3xl">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 btn-b w-[30px] h-[30px] rounded-full"
                        >
                            ⨉
                        </button>

                        <div className="ml-[50px] font-sf-pro font-medium tracking-normal dark:text-white">
                            <h1 className="mt-[50px] text-[120px] leading-[120px]">{t("popup-title")}</h1>
                            <p className="mt-[20px] text-2xl leading-10">{newLine(t("popup-paragraph"))}</p>

                            <div className="flex items-center mt-[50px]">
                                <img src="/bitpolito-foto-presidente.jpg" className="w-[330.02px] h-[330.3px] rounded-3xl"></img>
                                <div className="flex flex-col gap-y-7 mt-[50px] ml-[70px] w-[400px] h-[145px]">
                                    <a href="https://t.me/bitciccio" target="_blank" rel="noopener noreferrer" className="btn-w w-[400px] h-[60px]">
                                        <img src={"icons/bitpolito-icon-social-telegram.svg"} className="icon-style-opposite w-[31px] h-[31px] mr-[4.5px]"></img>
                                        <p className="font-sf-pro font-medium text-2xl leading-10 tracking-normal">@Bitciccio</p>
                                    </a>
                                    <a href='mailto: francesco.pelle@studenti.polito.it' target="_blank" rel="noopener noreferrer" className="btn-w w-[400px] h-[60px]">
                                        <img src="icons/bitpolito-icon-mail.svg" className="icon-style-opposite w-[31px] h-[22.55px] mr-[8.73px]"></img>
                                        <p className="font-sf-pro- font-medium text-2xl leading-10 tracking-normal">francesco.pelle@studenti.polito.it</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}