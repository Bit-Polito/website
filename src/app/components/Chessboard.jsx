import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import chessboardImages from '../data/chessboardImages.json';
import Image from "next/image";
import Sponsors from "./Sponsors";

// const chartRow = [
//     { type: 'image', span: 1 },
//     { type: 'chart', span: 2, src: null, link: null }
// ];

const box1 = [
    { type: 'image', span: 1 },
    { type: 'box', span: 2, src: null, link: null }
];

const box2 = [
    { type: 'box', span: 2, src: null, link: null },
    { type: 'image', span: 1 }
];

const fullImage = [
    { type: 'image', span: 1 },
    { type: 'image', span: 1 },
    { type: 'image', span: 1 }
];

const singleImage = [
    { type: 'image', span: 1 }
];

const resourceItems = [
    [
        { type: 'resource', span: 1, title: 'Mining Game',     link: 'https://bitpolito-mining-game.vercel.app',       filter: 'resources' },
        { type: 'resource', span: 1, title: 'Silent Payments', link: 'https://silent-payments.vercel.app/',  filter: 'resources' },
    ]
];

/**
 * @constant {Array[]} layoutTemplate
 * @description 
 * An array representing the layout template of chessboard. Each "page" 
 * is composed of rows (chartRow, box1, box2, fullImage, singleImage), which are repeated across multiple pages.
 * 
 */
const layoutTemplate = [
    fullImage,
    fullImage,
    box1,
    box2,
    fullImage,
    fullImage,
    fullImage,
    singleImage,
    singleImage
];

/**
 * Chessboard component renders a grid layout with dynamic rows and interactive elements.
 * It includes a grid of items and a "Load More" button to display additional rows.
 *
 * @component
 * @returns {JSX.Element} The rendered Chessboard component.
 * @author BitPolito Team : polito-dev
 * @version 1.0.0
 * @example <Chessboard />
 *
 * @description
 * - The component displays a grid of images and charts in a responsive layout.
 * - The "Load More" button allows users to reveal more rows (4) of items dynamically.
 *  
 * @dependencies
 * - 'useTranslation': React hook for internationalization (multiple language support).
 *
 * @function
 * @name Chessboard
 */
export default function Chessboard() {
    const { t } = useTranslation();

    /**
     * @state {number} visibleRows
     * @description The number of rows to be displayed in the chessboard
     */
    const [visibleRows, setVisibleRows] = useState(4);

    /**
     * @constant {Array[]} layout
     * @description Array representing the layout of the chessboard. Each row contains an array of objects defining
     * the type of content, the span, the image source and the link associated with the image
     */
    const [layout, setLayout] = useState([]);

    /**
     * Populates the layout with random images from `chessboardImages`.
     * 
     * This function uses the predefined 'layoutTemplate' as a blueprint to build the final layout.
     * It assigns images from the 'chessboardImages' dataset to layout slots based on their type:
     * 
     * - If the slot is of type 'box', it is filled with an image tagged as 'projects'.
     * - If the slot is of type 'image', it is filled with any other image (not tagged as 'projects').
     * 
     * The images are shuffled randomly before assignment to ensure a different layout each time.
     * If there are more slots than images, unassigned slots are left with their default data (e.g. 'src: null').
     *
     * @function populateLayout
     * @returns {Array<Array<Object>>} A 2D array representing the populated layout grid.
     * 
     */
    function populateLayout() {
        const shuffledImages = [...chessboardImages].sort(() => 0.5 - Math.random());

        const projectImages = shuffledImages.filter(img => img.filter === 'projects');
        const otherImages = shuffledImages.filter(img => img.filter !== 'projects');

        let projectIndex = 0;
        let imageIndex = 0;
        let img = null;

        return layoutTemplate.map(row =>
            row.map(item => {
                if (item.type === 'box') {
                    img = projectImages[projectIndex++];
                } else if (item.type === 'image') {
                    img = otherImages[imageIndex++];
                }
                return img ? { ...item, src: img.src, link: img.link, filter: img.filter } : { ...item };
            })
        );
    }

    /**
     * @hook useEffect
     * @description 
     * Runs once when the component mounts. It uses the `populateLayout` function to fill the layout with random 
     * images and then updates the state with the populated layout.
     * 
     * The layout is populated using the `layoutTemplate` and `chessboardImages` (external data) passed to `populateLayout`.
     * 
     * This hook does not depend on any state or props (hence the empty dependency array), meaning it runs only 
     * once when the component mounts and will not trigger on subsequent re-renders.
     */
    useEffect(() => {
        setLayout(populateLayout());
    }, []);

    /**
     * @state {string[]} activeFilters
     * @description Tracks the currently active filters selected by the user.
     * Each filter is a string representing a category for images.
     * When empty, no filters are applied and the full layout is shown.
     */
    const [activeFilters, setActiveFilters] = useState([]);

    /**
     * Toggles a filter on or off.
     * Adds the filter if not present; removes it if already active.
     *
     * @param {string} filter - The filter to toggle.
     */
    const toggleFilter = (filter) => {
        setActiveFilters((prev) => {
            if (prev.includes(filter)) {
                return [];
            }
            return [filter];
        });
    };

    /**
     * @constant {Array<Array<Object>>} filteredLayout
     * Filters layout by active filter.
     * Returns full layout if no filters are active.
     * When a filter is selected, only items matching it are shown.
     * For projects, alternates between span-2 and span-1 to maintain visual rhythm.
     */
    const filteredLayout = activeFilters.length === 0
        ? layout
        : (() => {
            const filtered = layout
                .flatMap(row => row.filter(item => item.filter === activeFilters[0]));

            // Resources are static and pre-grouped
            if (activeFilters[0] === 'resources') {
                return resourceItems;
            }

            // For projects, recreate rows with alternating spans
            if (activeFilters[0] === 'projects') {
                const projectRows = [];
                for (let i = 0; i < filtered.length; i += 2) {
                    if (i + 1 < filtered.length) {
                        // Alternate: first item span-2, second item span-1
                        projectRows.push([
                            { ...filtered[i], span: 2 },
                            { ...filtered[i + 1], span: 1 }
                        ]);
                    } else {
                        // Last item if odd number
                        projectRows.push([{ ...filtered[i], span: 2 }]);
                    }
                }
                return projectRows;
            }

            // For other filters, group items in rows of 3
            const rows = [];
            for (let i = 0; i < filtered.length; i += 3) {
                rows.push(filtered.slice(i, i + 3));
            }
            return rows.filter(row => row.length > 0);
        })();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-x-3 mb-8 sm:mb-10 lg:mb-12 pt-2 sm:pt-3 lg:pt-4">
                {["events", "podcast", "projects", "resources", "others"].map((key) => {
                    const isActive = activeFilters.includes(key);
                    return (
                        <div key={key} className="relative group">
                            <button
                                onClick={() => toggleFilter(key)}
                                className={`
                                    rounded-full px-3 sm:px-5 py-1 text-sm sm:text-base font-semibold
                                    border-2 border-blue-dark dark:border-white
                                    ${isActive
                                        ? "bg-blue-dark text-white hover:bg-blue-600 dark:bg-white dark:text-blue-dark dark:hover:bg-gray-200"
                                        : "bg-white text-blue-dark hover:bg-blue-200 dark:bg-blue-dark dark:text-white dark:hover:bg-gray-800"}
                                `}
                            >
                                {t(key)}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Chessboard grid */}
            <div className="grid grid-cols-1 chessboard-responsive gap-3 sm:gap-4 lg:gap-5 p-2 sm:p-4 lg:p-5">
                {filteredLayout.slice(0, visibleRows).flatMap((row, rowIndex) =>
                    row.map((item, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`${item.span === 2
                                ? 'col-span-1 sm:col-span-2 lg:col-span-2'
                                : 'col-span-1'
                                } transition-all duration-300 ease-in-out hover:opacity-95 hover:scale-[1.02]`}
                        >
                            {(() => {
                                switch (item.type) {
                                    case 'resource':
                                        return (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full h-full"
                                            >
                                                <div className="chessboard flex items-center justify-center bg-blue-dark dark:bg-white min-h-[200px]">
                                                    <span className="text-white dark:text-blue-dark font-bold text-xl text-center px-4">{item.title}</span>
                                                </div>
                                            </a>
                                        );
                                    case 'chart':
                                        return (
                                            <Image
                                                src="#"
                                                alt="Chart placeholder"
                                                className="chessboard !min-h-[200px]"
                                                priority
                                                width={2000}
                                                height={2000}
                                            />
                                        );
                                    case 'box':
                                        return (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full h-full"
                                            >
                                                <Image
                                                    src={item.src}
                                                    alt={`Chessboard item ${rowIndex}-${colIndex}`}
                                                    className="chessboard"
                                                    priority
                                                    width={2000}
                                                    height={2000}
                                                />
                                            </a>
                                        );
                                    default:
                                        return (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full h-full"
                                            >
                                                <Image
                                                    src={item.src}
                                                    alt={`Chessboard item ${rowIndex}-${colIndex}`}
                                                    className="chessboard"
                                                    //loading="lazy"
                                                    priority
                                                    width={2000}
                                                    height={2000}
                                                />
                                            </a>
                                        );
                                }
                            })()}
                        </div>
                    ))
                )}
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-x-3 mt-8 sm:mt-10 lg:mt-12 sm:pt-1 sm:pb-3 lg:pt-2">
                <button
                    onClick={() => setVisibleRows(prev => prev + 4)}
                    className="font-bold hover:opacity-80 transition-opacity"
                >
                    {t("load-more")}
                </button>
            </div>

            {/* Sponsors Section */}
            <Sponsors />

            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 sm:gap-5 px-5 py-8 sm:py-12">

                <div className="order-1 sm:order-2"></div>

                {/* Back to top button - Second on mobile, First on desktop */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="back-top-btn text-blue-dark dark:text-white bg-white dark:bg-blue-dark"
                >


                    <img
                        src={"icons/bitpolito-icon-back-top.svg"}
                        alt="Back to top"
                        className="icon-style-opposite w-[17.73px] h-[15px]"
                    />
                    <span>{t("top")}</span>
                </button>
            </div>
        </div>
    );
}