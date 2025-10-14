import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import chessboardImages from '../data/chessboardImages.json';

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
     * Empty rows are removed.
     */
    const filteredLayout = activeFilters.length === 0
        ? layout
        : layout
            .map(row => row.filter(item => item.filter === activeFilters[0]))
            .filter(row => row.length > 0);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-x-3 mb-3 pt-2 sm:pt-3 lg:pt-4">
                {["events", "podcast", "projects", "others"].map((key) => {
                    const isActive = activeFilters.includes(key);
                    return (
                        <div key={key} className="relative group">
                            <button
                                onClick={() => toggleFilter(key)}
                                className={`
                                    rounded-full px-3 sm:px-5 py-1 text-sm sm:text-base font-semibold
                                    border-2 border-blue-dark dark:border-white
                                    ${isActive ? "bg-blue-dark text-white hover:bg-blue-600" : "bg-white text-blue-dark hover:bg-blue-200"}
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
                                ? 'col-span-1 chessboard-span-2'
                                : 'col-span-1'
                                } transition-all duration-300 ease-in-out hover:opacity-95 hover:scale-[1.02]`}
                        >
                            {(() => {
                                switch (item.type) {
                                    case 'chart':
                                        return (
                                            <img
                                                src="#"
                                                alt="Chart placeholder"
                                                className="chessboard !min-h-[200px]"
                                            />
                                        );
                                    case 'box':
                                        return (
                                            <div className="chessboard relative !min-h-[200px]">
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src={item.src}
                                                        alt="Project image"
                                                        className="w-full h-full object-cover rounded-2xl"
                                                    />
                                                </a>
                                            </div>
                                        );
                                    default:
                                        return (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full h-full"
                                            >
                                                <img
                                                    src={item.src}
                                                    alt={`Chessboard item ${rowIndex}-${colIndex}`}
                                                    className="chessboard"
                                                    loading="lazy"
                                                />
                                            </a>
                                        );
                                }
                            })()}
                        </div>
                    ))
                )}
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 px-5 py-8 sm:py-12">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="btn-w flex items-center gap-2"
                >
                    <img
                        src="/icons/back-top-light.png"
                        alt="Back to top"
                        className="icon-style-opposite w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span>{t("top")}</span>
                </button>

                {visibleRows < filteredLayout.length && (
                    <button
                        onClick={() => setVisibleRows(prev => prev + 4)}
                        className="font-bold hover:opacity-80 transition-opacity"
                    >
                        {t("load-more")}
                    </button>
                )}
                {visibleRows >= filteredLayout.length && (
                    <button
                        onClick={() => setVisibleRows(4)}
                        className="font-bold hover:opacity-80 transition-opacity"
                    >
                        {t("reset")}
                    </button>
                )}
            </div>
        </div>
    );
}