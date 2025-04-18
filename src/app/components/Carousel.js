import { useTranslation } from "react-i18next";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSelector from "./LanguageSelector";
import functions from "../functions";
// Array of carousel image URLs
export const carouselImages = [
    "/bitpolito-bitgen-3.jpg",
    "/bitpolito-missione-praga.png",
    "/DRAFT-bitpolito-panel-mining.jpg",
    "/DRAFT-bitpolito-partnership-braiins.jpg"
];

// Array of links corresponding to carousel images
const imageLinks = [
    "",
    "",
    "",
    ""
];

/**
 * Carousel component that displays a carousel of images with navigation arrows,
 * progress bar, and additional features like language selection, dark mode toggle,
 * and navigation links.
 *
 * @component
 * @returns {JSX.Element} The rendered Carousel component.
 * @description
 * - The component includes a header with a dark mode switch and language selector.
 * - Navigation links are provided for "projects", "podcast", and "about" sections.
 * - A progress bar indicates the current progress of the carousel, before it changes image automatically.
 * - The carousel displays images with left and right navigation arrows that appear
 *   on hover to allow manual image changes.
 * - Each image is clickable and links to an external URL (TODO: Understand which page should they refer to as at the moment thay head to #).
 * - A footer section includes a Telegram link (bitpolito) and a donate button (TODO: Make it work as now it does anything).
 * @dependencies
 * - `useTranslation`: A hook for internationalization.
 * - `functions`: A custom hook or function providing carousel-related state and actions.
 * - `DarkModeSwitch`: A component for toggling dark mode.
 * - `LanguageSelector`: A component for selecting the language.
 * @state
 * - `currentImage` (number): The index of the currently displayed image.
 * - `progress` (number): The progress percentage of the carousel.
 * - `fade` (boolean): Determines the fade-in/out effect for images.
 * - `arrowsVisible` (boolean): Controls the visibility of navigation arrows.
 * @methods
 * - `changeImage(direction: number)`: Changes the current image based on the direction (-1 for previous, 1 for next).
 * - `showArrows(visible: boolean)`: Toggles the visibility of navigation arrows.
 */

export default function Carousel() {
    const { t } = useTranslation();    
    const { currentImage, fade, changeImage, arrowsVisible, showArrows } = functions();


    return (
        <div className='flex-1 flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto px-4'>
            <Header />
           <NavigationLinks />
            <ProgressBar />
            

            {/* Carousel Images */}
            <section
                aria-label="Image Carousel"
                onMouseEnter={() => showArrows(true)}
                onMouseLeave={() => showArrows(false)}
                onFocus={() => showArrows(true)}
                onBlur={() => showArrows(false)}
                className="relative"
            >
                {/* Left Arrow */}
                <button
                    onClick={() => changeImage(-1)}
                    className={`arrow !left-1 ${arrowsVisible ? "opacity-100" : "opacity-0"}`}
                >
                    &lt;
                </button>

                {/* Image with Link */}
                <a
                    href={imageLinks[currentImage]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-full w-full"
                >
                    <img
                        src={carouselImages[currentImage]}
                        alt={`Carousel ${currentImage + 1}`}
                        className={`max-w-full w-full transition-opacity duration-700 ease-in-out ${
                            fade ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ height: "400px", objectFit: "cover" }}
                    />
                </a>

                {/* Right Arrow */}
                <button
                    onClick={() => changeImage(1)}
                    className={`arrow !right-1 ${arrowsVisible ? "opacity-100" : "opacity-0"}`}
                >
                    &gt;
                </button>
            </section>
            <Footer />
        </div>
    );
}


function ProgressBar() {
    const { progress} = functions();

    return (<>
    <div className="w-full h-1 bg-white dark:bg-blue-700 mb-2">
                <div
                    className="h-full bg-blue-700 dark:bg-white"
                    style={{ width: `${progress}%` }}
                ></div>
            </div></>)
}

function NavigationLinks () {
    const { t } = useTranslation();

    return (<>
     <nav className="flex justify-between space-x-8 mb-3 mt-7">
                <a href="#" className="transition-all duration-200 hover:scale-105 font-bold">
                    {t("projects")}
                </a>
                <a href="#" className="transition-all duration-200 hover:scale-105 font-bold">
                    {t("podcast")}
                </a>
                <a href="#" className="transition-all duration-200 hover:scale-105 font-bold">
                    {t("about")}
                </a>
            </nav>
    </>)
}

function Header () {
    return (
        <>
           <header className="w-full flex justify-center">
                <div className="flex items-center space-x-7 lg:flex ">
                    <DarkModeSwitch />
                    <LanguageSelector />
                </div>
            </header>
        </>
    )
}

/**
 * @description
 * Footer component that renders a footer section with links to a Telegram group
 * and a donate button. It uses the `useTranslation` hook for internationalization.
 * @component
 *
 * @returns {JSX.Element} The rendered Footer component.
 * @dependencies
 * - `useTranslation`: A hook for internationalization (multiple language support).
 * @externalLinks
 * - Telegram: Links to the BitPolitoForum Telegram group.
 * - Donate: A placeholder link for donations.
 * */
function Footer() {
    const { t } = useTranslation();
    return (
        <>
            {/* Footer Section */}
            <footer className="w-full flex justify-between space-x-3 mt-5">
                {/* Telegram Link */}
                <a
                    href="https://t.me/BitPolitoForum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-w flex items-center space-x-2"
                >
                    <img
                        src={"icons/telegram-light.png"}
                        alt="Telegram Icon"
                        className="icon-style-opposite"
                    />
                    <span>{t("telegram")}</span>
                </a>

                {/* Donate Button */}
                <a href="#" className="btn-b rounded-md border-blue-700">
                    <img
                        src="icons/donate-light.png"
                        alt="Donate Icon"
                        className="icon-style"
                    />
                    {t("donate")}
                </a>
            </footer>
        </>
    );
}

