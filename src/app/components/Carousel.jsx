"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSelector from "./LanguageSelector";

/**
 * @constant {string[]} carouselImages
 * @description Array of image paths for the carousel
 */
const carouselImages = [
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-missione-praga.png",
    "/DRAFT-bitpolito-panel-mining.jpg",
    "/DRAFT-bitpolito-partnership-braiins.jpg"
];

/**
 * @constant {string[]} imageLinks
 * @description URLs that each carousel image links to when clicked
 */
const imageLinks = ["", "", "", ""];

/**
 * Carousel component renders a series of images in swipeable format.
 * It includes a progress bar that fills over time and navigation arrows for manual image switching.
 * The component is designed for both desktop and mobile use with swipe support.
 *
 * @component
 * @returns {JSX.Element} The rendered Carousel component.
 * @author BitPolito Team : polito-dev
 * @version 1.0.0
 * @example <Carousel />
 *
 * @description
 * - The component renders a carousel that automatically cycles through images or content every 15 seconds, with smooth fade transitions between images.
 * - A progress bar fills over time to show how much of the current image is displayed.
 * - The Carousel supports swipe gestures on mobile and desktop, enabling navigation between images by swiping or clicking the arrows.
 * - Popup behavior is included for more interactive content, with the ability to disable page scrolling when the popup is open.
 *  
 * @dependencies
 * - 'useState': React hook for managing the state within the component, such as current image, progress and visibility of elements.
 * - 'useEffect': React hook to handle side effects like automatic image cycling and progress updates.
 * - 'useRef': React hook for tracking mutable values related to swipe gestures (starting position, drag status).
 * - 'useTranslation': Hook for internationalization (i18next) to support multiple languages for image descriptions.
 * 
 * @function
 * @name Carousel
 */
export default function Carousel() {
    const { t } = useTranslation();

    /**
     * @state {number} currentImage
     * @description The index of the currently displayed image in the carousel
     */
    const [currentImage, setCurrentImage] = useState(0);

    /**
     * @state {number} progress
     * @description The progress value (from 0 to 100) for the loading bar that runs above the carousel
     */
    const [progress, setProgress] = useState(0);

    /**
     * @state {boolean} fade
     * @description Check if fade effect is currently applied to the carousel image
     */
    const [fade, setFade] = useState(true);

    /**
     * @state {boolean} arrowsVisible
     * @description Check if the carousel navigation arrows are visible
     */
    const [arrowsVisible, setArrowsVisible] = useState(false);

    /**
     * @state {boolean} isOpen
     * @description Track if the popup is currently open or not
     */
    const [isOpen, setIsOpen] = useState(false);


    // to make the carousel swipeable on mobile and on desktop
    /**
     * @ref {number} startX
     * @description A reference to track the starting x position of a swipe action on the screen
     */
    const startX = useRef(0);

    /**
     * @ref {boolean} isDragging
     * @description A reference that tracks if a swipe gesture is currently in progress
     */
    const isDragging = useRef(false);

    /**
     * @ref {boolean} hasMoved
     * @description A reference that tracks if the swipe gesture has moved beyond the threshold distance
     */
    const hasMoved = useRef(false);

    /**
     * @constant {number} threshold
     * @description The minimum pixel distance required to register a swipe gesture
     */
    const threshold = 50;

    /**
    * @constant {string[]} descriptionImages
    * @description Array of image descriptions used as alt text for each image in the carousel, translated using i18next
    */
    const descriptionImages = [
        t("alt-img-1"),
        t("alt-img-2"),
        t("alt-img-3"),
        t("alt-img-4"),
    ];

    /**
     * @effect
     * @description An effect hook that automatically changes the image every 15 seconds and updates the progress bar
     */
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

    /**
     * @function changeImage
     * @description Changes the carousel image (forwards or backwards) with a fade effect between transitions
     * @param {number} direction - The direction to change the image: positive for forward, negative for backward
     */
    const changeImage = (direction) => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + direction + carouselImages.length) % carouselImages.length);
            setProgress(0);
            setFade(true);
        }, 100);
    };

    /**
     * @function showArrows
     * @description Controls the visibility of the carousel navigation arrows
     * @param {boolean} visible - Boolean indicating if the arrows should be visible
     */
    const showArrows = (visible) => {
        setArrowsVisible(visible);
    };

    /**
     * @effect
     * @description Adds or removes the 'overflow-hidden' class on the body to prevent scrolling when the popup is open
     */
    useEffect(() => {
        (isOpen) ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    /**
     * @function newLine
     * @description Splits a paragraph into sentences, each followed by a line break (`<br />`), to format text for display in the popup
     * @param {string} text - The text to be formatted with line breaks
     * @returns {JSX.Element} - The formatted text with line breaks between sentences
     */
    const newLine = (text) =>
        text.split(". ").map((sentence, i) => (
            <span key={i}>
                {sentence}.
                <br />
            </span>
        ));

    /**
     * @function handleStart
     * @description Starts the swipe action, tracking the initial x position of the gesture
     * @param {number} x - The x coordinate of the initial touch or mouse event
     */
    const handleStart = (x) => {
        startX.current = x;
        isDragging.current = true;
        hasMoved.current = false;
    };

    /**
     * @function handleMove
     * @description Handles the movement during a swipe action, detecting the direction and triggering image changes when the threshold is crossed
     * @param {number} x - The current x position of the swipe gesture
     */
    const handleMove = (x) => {
        if (!isDragging.current) return;
        const difference = x - startX.current;

        if (Math.abs(difference) > threshold && !hasMoved.current) {
            hasMoved.current = true;
            (difference > 0) ? changeImage(-1) : changeImage(1);
        }
    };

    /**
     * @function handleEnd
     * @description Ends the swipe action and resets the dragging state
     */
    const handleEnd = () => {
        isDragging.current = false;
    };

    return (
        <div className="relative flex-1 flex flex-col items-center justify-center w-full"
            onMouseEnter={() => showArrows(true)}
            onMouseLeave={() => showArrows(false)}
        >
            <header className="w-full flex justify-center">
                <div className="flex items-center gap-x-7 lg:flex hidden">
                    <DarkModeSwitch />
                    <LanguageSelector />
                </div>
            </header>

            <div className="flex justify-between gap-x-8 mb-3 mt-7">
                {["projects", "podcast", "about"].map((key) => (
                    <div key={key} className="relative group">
                        <a className="cursor-not-allowed transition-all duration-200 hover:scale-105 font-bold">{t(key)}</a>
                        <div className="coming-soon">{t("coming-soon")}</div>
                    </div>
                ))}
            </div>

            <div>
                <div className="w-full h-1 bg-white dark:bg-blue-dark mb-2">
                    <div
                        className="h-full bg-blue-dark dark:bg-white"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <button
                    onClick={() => changeImage(-1)}
                    className={`hidden lg:block arrow !left-1 ${arrowsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    &lt;
                </button>
                <a href={imageLinks[currentImage]} target="_blank" rel="noopener noreferrer" className="max-w-full w-full">
                    <img
                        src={carouselImages[currentImage]}
                        title={descriptionImages[currentImage]}
                        className={`img-carousel ${fade ? 'opacity-100' : 'opacity-0'}`}
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
                    className={`hidden lg:block arrow !right-1 ${arrowsVisible ? 'opacity-100' : 'opacity-0'}`}>
                    &gt;
                </button>

                <footer className="flex justify-between gap-x-3 mt-5">
                    <a href="https://t.me/BitPolitoForum" target="_blank" rel="noopener noreferrer" className="btn-w !px-8">
                        <img src={"icons/bitpolito-icon-social-telegram.svg"} className="icon-style-opposite"></img>
                        <span>{t("telegram")}</span>
                    </a>
                    <button onClick={() => setIsOpen(true)} className="btn-b rounded-md !px-7">
                        <img src="icons/donate-light.png" className="icon-style !w-6 !h-6"></img>
                        {t("donate")}
                    </button>
                </footer>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
                    onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }} // closes popup when clicking outside the content
                >
                    <div className="relative bg-white dark:bg-blue-dark p-6 rounded-3xl w-80 sm:w-[600px] h-auto">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 btn-b rounded-full"
                        >
                            ⨉
                        </button>

                        <h1 className="text-3xl sm:text-5xl font-bold mb-4 dark:text-white">{t("popup-title")}</h1>
                        <p className="text-base sm:text-xl mb-6 dark:text-white">{newLine(t("popup-paragraph"))}</p>

                        <div className="flex flex-col items-center">
                            <img src="/FP_PhotoProfile.png" className="w-40 h-43 sm:w-60 sm:h-64"></img>
                            <div className="flex flex-col mt-5 gap-y-5">
                                <a href="https://t.me/bitciccio" target="_blank" rel="noopener noreferrer" className="btn-w">
                                    <img src="icons/bitpolito-icon-social-telegram.svg" className="icon-style-opposite"></img>
                                    @Bitciccio
                                </a>
                                <a href='mailto: francesco.pelle@studenti.polito.it' target="_blank" rel="noopener noreferrer" className="btn-w">
                                    <img src="icons/bitpolito-icon-mail.svg" className="icon-style-opposite"></img>
                                    francesco.pelle@studenti.polito.it
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}