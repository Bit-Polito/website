import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Funzione helper per determinare se un'immagine è orizzontale
const isImageHorizontal = (isHorizontalCheckbox) => {
    // Usa solo il campo checkbox dal database Notion
    return isHorizontalCheckbox === true;
};


// Funzione helper per creare un layout dinamico basato sul checkbox "Is Horizontal"
const createDynamicLayout = (images) => {
    if (!images || images.length === 0) return [];
    
    const layout = [];
    let imageIndex = 0;
    
    // Crea righe dinamiche basate sulle immagini disponibili
    while (imageIndex < images.length) {
        const currentImage = images[imageIndex];
        const isHorizontal = isImageHorizontal(currentImage.isHorizontal);
        
        if (isHorizontal) {
            // Immagine orizzontale occupa 2 span
            layout.push([
                { type: 'image', span: 2, src: currentImage.src, link: currentImage.link, filter: currentImage.filter }
            ]);
            imageIndex++;
        } else {
            // Crea una riga con 3 immagini verticali
            const row = [];
            for (let i = 0; i < 3 && imageIndex < images.length; i++) {
                const img = images[imageIndex];
                if (!isImageHorizontal(img.isHorizontal)) {
                    row.push({ type: 'image', span: 1, src: img.src, link: img.link, filter: img.filter });
                    imageIndex++;
                } else {
                    break; // Se troviamo un'immagine orizzontale, fermiamoci
                }
            }
            if (row.length > 0) {
                layout.push(row);
            }
        }
    }
    
    return layout;
};


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

    /**
     * @hook useEffect
     * @description 
     * Runs once when the component mounts. It fetches data from Notion API and uses the `populateLayout` function 
     * to fill the layout with images from Notion, ordered by date (descending).
     * 
     * The layout is populated using the `createDynamicLayout` function with Notion data.
     * If Notion API fails or returns no data, the layout remains empty.
     * 
     * This hook does not depend on any state or props (hence the empty dependency array), meaning it runs only 
     * once when the component mounts and will not trigger on subsequent re-renders.
     */
    useEffect(() => {
        const fetchNotionData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/notion');
                const data = await response.json();
                
                if (data.chessboard && data.chessboard.length > 0) {
                    setLayout(populateLayout(data.chessboard));
                } else {
                    // Nessun dato disponibile
                    setLayout([]);
                }
            } catch (error) {
                console.error('Error fetching Notion data:', error);
                // Nessun dato disponibile in caso di errore
                setLayout([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotionData();
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
            .map(row => row.filter(item => {
                // Mappa i filtri ai valori corretti dal database Notion
                const filterMap = {
                    'event': 'Event',
                    'podcast': 'Podcast', 
                    'project': 'Project',
                    'other': 'Other'
                };
                return item.filter === filterMap[activeFilters[0]];
            }))
            .filter(row => row.length > 0);

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
                <div className="flex flex-wrap justify-center gap-2 sm:gap-x-3 mb-3 pt-8 sm:pt-12 lg:pt-16">
                    {["event", "podcast", "project", "other"].map((key) => {
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
                                    {key === 'podcast' ? 'Podcasts' : t(key + 's')}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Chessboard grid */}
            {!isLoading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 p-2 sm:p-4 lg:p-5">
                    {filteredLayout.slice(0, visibleRows).flatMap((row, rowIndex) =>
                        row.map((item, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`${item.span === 2
                                    ? 'col-span-1 sm:col-span-2'
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
                                                        alt={item.altTextITA || `Chessboard item ${rowIndex}-${colIndex}`}
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
            )}

            {/* Navigation buttons */}
            {!isLoading && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-8 sm:py-12">
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
                </div>
            )}
        </div>
    );
}