import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Sponsors from "./Sponsors";
import chessboardImages from "../data/chessboardImages.json";

const staticFilterMap = {
    events: 'Event',
    podcast: 'Podcast',
    projects: 'Project',
    others: 'Other'
};

const fallbackChessboardImages = chessboardImages.map(img => ({
    ...img,
    filter: staticFilterMap[img.filter] || img.filter,
    altTextITA: img.name,
}));

const resourceItems = [
    [
        { type: 'resource', span: 1, title: 'Mining Game', link: 'https://bitpolito-mining-game.vercel.app', filter: 'resources', icon: 'icons/bitpolito-mining-blue.png' },
        { type: 'resource', span: 1, title: 'Silent Payments', link: 'https://silent-payments.vercel.app/', filter: 'resources' },
    ]
];

const projectTextItems = [
    [{ type: 'resource', span: 1, title: 'BitPolito Academy', link: 'https://drive.google.com/file/d/1Zxj0i3HWSh27AcYz8YxH0qgqd3zJFOzE/view?usp=sharing', filter: 'projects' }],
    [{ type: 'resource', span: 1, title: 'Seed Signer', link: 'https://github.com/BitPolito/seedsigner', filter: 'projects' }],
    [{ type: 'resource', span: 1, title: 'Movie Subtitles', link: 'https://github.com/BitPolito/movies', filter: 'projects' }]
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
     * @state {boolean} isLoading
     * @description Tracks whether the chessboard is currently loading data from Notion
     */
    const [isLoading, setIsLoading] = useState(true);

    const cacheTTL = 60 * 60 * 24 * 1000; // 24 hrs in ms
    const [cache, setCache] = useState({
        data: null,
        timestamp: 0
    });

    /**
     * Populates the layout with images from Notion API.
     *
     * This function uses the predefined 'layoutTemplate' as a blueprint to build the final layout.
     * It assigns images from the Notion API to layout slots based on their type and orientation:
     *
     * - If the slot is of type 'box', it is filled with an image tagged as 'projects'.
     * - If the slot is of type 'image', it is filled with any other image (not tagged as 'projects').
     * - Images are automatically sized based on their orientation (horizontal = 2 span, vertical = 1 span)
     *
     * The images are ordered by date (descending) and filtered by content type.
     * If there are more slots than images, unassigned slots are left with their default data (e.g. 'src: null').
     *
     * @function populateLayout
     * @param {Array} notionImages - Array of images from Notion API
     * @returns {Array<Array<Object>>} A 2D array representing the populated layout grid.
     *
     */
    function populateLayout(notionImages = []) {
        // Usa il layout dinamico basato sul checkbox "Is Horizontal"
        return createDynamicLayout(notionImages);
    }

    // Funzione helper per determinare se un'immagine è orizzontale
    const isImageHorizontal = (isHorizontalCheckbox) => {
        // Usa solo il campo checkbox dal database Notion
        return isHorizontalCheckbox === true;
    };

    // Funzione helper per creare un layout dinamico con ordinamento intelligente
    const createDynamicLayout = (images) => {
        if (!images || images.length === 0) return [];

        images = images.filter(img => img && typeof img.src === 'string' && img.src.trim() !== '');

        // avoid duplicates based on src
        const uniqueImages = [];
        const seen = new Set();

        for (const img of images) {
            if (img && typeof img.src === 'string' && img.src.trim() !== '' && !seen.has(img.src)) {
                seen.add(img.src);
                uniqueImages.push(img);
            }
        }

        // Separa elementi orizzontali e verticali
        const horizontalItems = uniqueImages.filter(img => isImageHorizontal(img.isHorizontal));
        const verticalItems = uniqueImages.filter(img => !isImageHorizontal(img.isHorizontal));

        const layout = [];
        let verticalIndex = 0;
        // let lastHorizontalRow = -3; // Inizializza a -3 per permettere il primo elemento orizzontale

        const shuffledVertical = verticalItems;
        const shuffledHorizontal = horizontalItems;

        const horizontalPositions = [];
        for (let i = 0; i < shuffledHorizontal.length; i++) {
            horizontalPositions.push(1 + i * 3);
        }

        let horizontalPositionIndex = 0;

        // Crea il layout con le regole specifiche
        while (verticalIndex < shuffledVertical.length || horizontalPositionIndex < horizontalPositions.length) {
            const currentRowIndex = layout.length;

            // Controlla se dobbiamo inserire un elemento orizzontale in questa riga
            const shouldInsertHorizontal = horizontalPositionIndex < horizontalPositions.length &&
                currentRowIndex === horizontalPositions[horizontalPositionIndex];

            if (shouldInsertHorizontal) {
                // Inserisci elemento orizzontale con un elemento verticale
                const horizontalItem = shuffledHorizontal[horizontalPositionIndex];
                const verticalItem = shuffledVertical[verticalIndex];

                if (verticalItem) {
                    layout.push([
                        { type: 'image', span: 2, src: horizontalItem.src || null, link: horizontalItem.link, filter: horizontalItem.filter, altTextITA: horizontalItem.altTextITA },
                        { type: 'image', span: 1, src: verticalItem.src || null, link: verticalItem.link, filter: verticalItem.filter, altTextITA: verticalItem.altTextITA }
                    ]);
                    verticalIndex++;
                } else {
                    // Solo elemento orizzontale se non ci sono più elementi verticali
                    layout.push([
                        { type: 'image', span: 2, src: horizontalItem.src || null, link: horizontalItem.link, filter: horizontalItem.filter, altTextITA: horizontalItem.altTextITA }
                    ]);
                }
                horizontalPositionIndex++;
            } else {
                // Crea una riga normale con elementi verticali
                const row = [];
                for (let i = 0; i < 3 && verticalIndex < shuffledVertical.length; i++) {
                    const verticalItem = shuffledVertical[verticalIndex];
                    row.push({
                        type: 'image',
                        span: 1,
                        src: verticalItem.src || null,
                        link: verticalItem.link,
                        filter: verticalItem.filter,
                        altTextITA: verticalItem.altTextITA
                    });
                    verticalIndex++;
                }
                if (row.length > 0) {
                    layout.push(row);
                }
            }

            // Se non ci sono più elementi da inserire, esci
            if (verticalIndex >= shuffledVertical.length && horizontalPositionIndex >= horizontalPositions.length) {
                break;
            }
        }

        return layout;
    };

    /**
     * Fetches and populates the chessboard layout from a local JSON file
     *
     * This effect is triggered when the component is mounted. It attempts to load
     * the data from the imported `carouselData` JSON file, checks for available chessboard
     * data, and populates the layout state with the data if it's available.
     * If no data is found or an error occurs, it sets the layout to an empty array.
     */
    useEffect(() => {
        const fetchNotionData = async () => {
            setIsLoading(true);

            if (cache.data && (Date.now() - cache.timestamp) < cacheTTL) {
                setLayout(populateLayout(cache.data.chessboard));
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch('/api/notion');
                const data = await response.json();

                if (data.chessboard && data.chessboard.length > 0) {
                    setLayout(populateLayout(data.chessboard));
                    setCache({
                        data: data,
                        timestamp: Date.now(),
                    });
                } else {
                    setLayout(populateLayout(fallbackChessboardImages));
                }
            } catch (error) {
                console.error('Error fetching Notion data:', error);
                setLayout(populateLayout(fallbackChessboardImages));
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotionData();
    }, [cache]);

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
     * Resources are static (not sourced from Notion) and pre-grouped.
     * For projects, alternates between span-2 and span-1 to maintain visual rhythm
     * and appends the static project text items.
     */
    const filteredLayout = activeFilters.length === 0
        ? layout
        : (() => {
            if (activeFilters[0] === 'resources') {
                return resourceItems;
            }

            // Mappa i filtri ai valori corretti dal database Notion
            const filterMap = {
                'events': 'Event',
                'podcast': 'Podcast',
                'projects': 'Project',
                'others': 'Other'
            };

            const filtered = layout
                .flatMap(row => row.filter(item => item.filter === filterMap[activeFilters[0]]));

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
                return [...projectRows, ...projectTextItems];
            }

            const rows = [];
            for (let i = 0; i < filtered.length; i += 3) {
                rows.push(filtered.slice(i, i + 3));
            }
            return rows.filter(row => row.length > 0);
        })();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Loading indicator */}
            {isLoading && (
                <div className="flex justify-center items-center py-12">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-dark dark:border-white"></div>
                        <p className="text-lg font-semibold text-blue-dark dark:text-white">
                            {t("loading") || "Caricamento..."}
                        </p>
                    </div>
                </div>
            )}

            {/* Filter buttons */}
            {!isLoading && (
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
            )}

            {/* Chessboard grid */}
            {!isLoading && (
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
                                                    <div className="chessboard flex flex-col items-center justify-center bg-blue-dark dark:bg-white min-h-[200px]">
                                                        {item.icon && (
                                                            <img src={item.icon} alt="" className="w-16 h-16 mb-3" />
                                                        )}
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
                                                    unoptimized
                                                    width={1}
                                                    height={1}
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
                                                        unoptimized
                                                        width={1}
                                                        height={1}
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
                                                        unoptimized
                                                        width={1}
                                                        height={1}
                                                    />
                                                </a>
                                            );
                                    }
                                })()}
                            </div>
                        ))
                    )}
                </div>
            )}

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
                {/* Load more / Reset button - First on mobile, Second on desktop */}
                <div className="order-1 sm:order-2">
                    {visibleRows >= filteredLayout.length && (
                        <button
                            onClick={() => setVisibleRows(4)}
                            className="font-bold hover:opacity-80 transition-opacity"
                        >
                            {t("reset")}
                        </button>
                    )}
                </div>

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
