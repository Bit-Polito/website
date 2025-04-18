import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect, useCallback } from 'react';
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSelector from "./LanguageSelector";
import functions from "../functions";

/**
 * @constant {string[]} carouselImages
 * @description Array of image paths for the carousel
 * @todo Implement them in a JSON configuration file
 */
export const carouselImages = [
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
 * @constant {number} MIN_SWIPE_DISTANCE
 * @description Minimum pixel distance required to register a swipe gesture
 */
const MIN_SWIPE_DISTANCE = 50;

/**
 * @constant {number} GESTURE_DELAY
 * @description Millisecond delay between gesture recognition to prevent rapid triggering
 */
const GESTURE_DELAY = 1000;

/**
 * @function useSwipeGestures
 * @description Custom hook for handling touch and mouse swipe gestures
 * @param {Function} onSwipeLeft - Callback for left swipe detection
 * @param {Function} onSwipeRight - Callback for right swipe detection
 * @returns {Object} Object containing event handlers and state
 */
const useSwipeGestures = (onSwipeLeft, onSwipeRight) => {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [mouseStart, setMouseStart] = useState(null);
    const [mouseEnd, setMouseEnd] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = useCallback((e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }, []);
    
    const handleTouchMove = useCallback((e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }, []);
    
    const handleTouchEnd = useCallback(() => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
        const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;
        
        if (isLeftSwipe) {
            onSwipeLeft();
        } else if (isRightSwipe) {
            onSwipeRight();
        }
        
        setTouchStart(null);
        setTouchEnd(null);
    }, [touchStart, touchEnd, onSwipeLeft, onSwipeRight]);
    
    const handleMouseDown = useCallback((e) => {
        e.preventDefault();
        setMouseStart(e.clientX);
        setIsDragging(true);
    }, []);
    
    const handleMouseMove = useCallback((e) => {
        if (isDragging) {
            setMouseEnd(e.clientX);
        }
    }, [isDragging]);
    
    const handleMouseUp = useCallback(() => {
        if (!mouseStart || !mouseEnd || !isDragging) {
            setIsDragging(false);
            return;
        }
        
        const distance = mouseStart - mouseEnd;
        const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
        const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;
        
        if (isLeftSwipe) {
            onSwipeLeft();
        } else if (isRightSwipe) {
            onSwipeRight();
        }
        
        setMouseStart(null);
        setMouseEnd(null);
        setIsDragging(false);
    }, [mouseStart, mouseEnd, isDragging, onSwipeLeft, onSwipeRight]);

    return {
        touchHandlers: {
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
        },
        mouseHandlers: {
            onMouseDown: handleMouseDown,
            onMouseMove: handleMouseMove,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseUp,
        },
        isDragging
    };
};

/**
 * @function useKeyboardNavigation
 * @description Hook to handle keyboard arrow key navigation
 * @param {Function} onPrevious - Function to call for previous item
 * @param {Function} onNext - Function to call for next item
 */
const useKeyboardNavigation = (onPrevious, onNext) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                onPrevious();
            } else if (e.key === 'ArrowRight') {
                onNext();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onPrevious, onNext]);
};

/**
 * @function useHandGestureDetection
 * @description Hook for hand gesture detection using handtrackjs
 * @param {Function} onLeftGesture - Callback for left hand gesture
 * @param {Function} onRightGesture - Callback for right hand gesture
 * @returns {Object} Object containing video ref and detection state
 * @requires handtrackjs
 */
const useHandGestureDetection = (onLeftGesture, onRightGesture) => {
    const [handDetection, setHandDetection] = useState(null);
    const videoRef = useRef(null);
    
    const detectHands = useCallback((model, video) => {
        if (!model) return;
        
        let lastGesture = null;
        let lastGestureTime = 0;
        
        const runDetection = () => {
            model.detect(video).then(predictions => {
                if (predictions.length > 0) {
                    const hand = predictions[0];
                    const centerX = (hand.bbox[0] + hand.bbox[2]) / 2;
                    const videoWidth = video.offsetWidth;
                    const now = Date.now();
                    
                    // Determine gesture based on hand position
                    let gesture = null;
                    if (centerX < videoWidth * 0.4) {
                        gesture = 'left';
                    } else if (centerX > videoWidth * 0.6) {
                        gesture = 'right';
                    }
                    
                    // prevent rapid changes
                    if (gesture && gesture !== lastGesture && now - lastGestureTime > GESTURE_DELAY) {
                        if (gesture === 'left') {
                            onLeftGesture();
                        } else if (gesture === 'right') {
                            onRightGesture();
                        }
                        lastGesture = gesture;
                        lastGestureTime = now;
                    }
                }
                
                requestAnimationFrame(runDetection);
            });
        };
        
        runDetection();
    }, [onLeftGesture, onRightGesture]);

    useEffect(() => {
        let handtrack;
        const startHandDetection = async () => {
            try {
                const handTrack = await import('handtrackjs');
                const video = videoRef.current;
                
                if (video) {
                    const model = await handTrack.load({
                        flipHorizontal: true,
                        maxNumBoxes: 1,
                        detectionConfidence: 0.8,
                    });
                    
                    setHandDetection(model);
                    
                    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                        video.srcObject = stream;
                        
                        // Start detection when video is ready
                        video.onloadedmetadata = () => {
                            video.play();
                            detectHands(model, video);
                        };
                    }
                }
            } catch (error) {
                console.log("Hand tracking initialization error:", error);
            }
        };
        
        startHandDetection();
        
        return () => {
            if (handDetection) {
                handDetection.dispose();
            }
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [detectHands]);

    return { videoRef, handDetection };
};

/**
 * @component Header
 * @description Header component with dark mode toggle and language selector
 */
const Header = () => (
    <header className="w-full flex justify-center">
        <div className="flex items-center space-x-7 lg:flex">
            <DarkModeSwitch />
            <LanguageSelector />
        </div>
    </header>
);

/**
 * @component NavigationLinks
 * @description Component that renders main navigation links
 */
const NavigationLinks = () => {
    const { t } = useTranslation();
    
    return (
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
    );
};

/**
 * @component ProgressBar
 * @description Visual indicator showing carousel progress
 */
const ProgressBar = () => {
    const { progress } = functions();
    
    return (
        <div className="w-full h-1 bg-white dark:bg-blue-700 mb-2">
            <div
                className="h-full bg-blue-700 dark:bg-white"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

/**
 * @component Footer
 * @description Footer component containing Telegram link and donation button
 * @issues
 * - Define a consistent link to the donation page
 * - Fix the link to the telegram group (currently returns a dns_probe)
 */
const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="w-full flex justify-between space-x-3 mt-5">
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

            <a href="#" className="btn-b rounded-md border-blue-700">
                <img
                    src="icons/donate-light.png"
                    alt="Donate Icon"
                    className="icon-style"
                />
                {t("donate")}
            </a>
        </footer>
    );
};

/**
 * @component CarouselImage
 * @description Component to render individual carousel images with fade transitions
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alternative text for the image
 * @param {boolean} props.fade - Controls image visibility with fade effect
 * @param {string} props.href - Link URL for the image
 * @param {boolean} props.isDragging - Whether user is currently dragging
 */
const CarouselImage = ({ src, alt, fade, href, isDragging }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-full w-full pointer-events-auto"
        onClick={(e) => isDragging && e.preventDefault()}
    >
        <img
            src={src}
            alt={alt}
            className={`max-w-full w-full transition-opacity duration-700 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
            }`}
            style={{ height: "400px", objectFit: "cover" }}
            draggable="false"
        />
    </a>
);

/**
 * @component NavigationArrow
 * @description Arrow button for carousel navigation
 * @param {Object} props
 * @param {string} props.direction - Direction of the arrow ('left' or 'right')
 * @param {Function} props.onClick - Click handler function
 * @param {boolean} props.isVisible - Controls arrow visibility
 */
const NavigationArrow = ({ direction, onClick, isVisible }) => (
    <button
        onClick={onClick}
        className={`arrow !${direction === 'left' ? 'left' : 'right'}-1 ${isVisible ? "opacity-100" : "opacity-0"} z-20`}
        aria-label={`${direction === 'left' ? 'Previous' : 'Next'} image`}
    >
        {direction === 'left' ? '\u003C' : '\u003E'}
    </button>
);

/**
 * @component SwipeOverlay
 * @description Rectangular overlay for capturing swipe gestures between the navigation arrows
 * @param {Object} props
 * @param {Object} props.touchHandlers - Touch event handlers
 * @param {Object} props.mouseHandlers - Mouse event handlers
 * @param {boolean} props.isDragging - Whether user is currently dragging
 */
const SwipeOverlay = ({ touchHandlers, mouseHandlers, isDragging }) => (
    <div 
        {...touchHandlers}
        {...mouseHandlers}
        className="absolute z-10 flex items-center justify-between pointer-events-auto"
        style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            left: '40px',      
            right: '40px',     
            top: '50%',        
            height: '50px',    
            transform: 'translateY(-50%)',  
        }}
        title="Swipe area"
    ></div>
);


/**
 * @component Carousel
 * @description Main carousel component that integrates all the parts and provides multiple navigation methods
 * @author BitPolito Team
 * @version 1.0.0
 * @since 2025-04-18
 * @features 
 * - Multi-touch support with limited swipe area to preserve image links
 * - Keyboard navigation
 * - Hand gesture recognition
 * - Clickable image links outside the swipe area
 * @issues 
 * - Hand tracking may have performance issues on mobile devices
 * - Need to implement image links in JSON configuration
 */
export default function Carousel() {
    const { t } = useTranslation();    
    const { currentImage, progress, fade, changeImage, arrowsVisible, showArrows } = functions();
    
    // Use memoized callbacks for navigation to prevent unnecessary re-renders
    const goToPrevious = useCallback(() => changeImage(-1), [changeImage]);
    const goToNext = useCallback(() => changeImage(1), [changeImage]);
    
    // Use our custom hooks
    const { touchHandlers, mouseHandlers, isDragging } = useSwipeGestures(goToNext, goToPrevious);
    useKeyboardNavigation(goToPrevious, goToNext);
    const { videoRef } = useHandGestureDetection(goToPrevious, goToNext);
    
    return (
        <div className='flex-1 flex flex-col items-center justify-center w-full'>
            <Header />
            <NavigationLinks />
            <ProgressBar />
            
            {/* Hand tracking video (hidden) */}
            <video 
                ref={videoRef}
                className="hidden"
                width="320"
                height="240"
                autoPlay
                muted
            />
            
            {/* Carousel Images */}
            <section
                aria-label="Image Carousel"
                onMouseEnter={() => showArrows(true)}
                onMouseLeave={() => showArrows(false)}
                onFocus={() => showArrows(true)}
                onBlur={() => showArrows(false)}
                className="relative select-none"
            >
                {/* Carousel Image - This is clickable everywhere except in the swipe area */}
                <CarouselImage 
                    src={carouselImages[currentImage]}
                    alt={`Carousel ${currentImage + 1}`}
                    fade={fade}
                    href={imageLinks[currentImage]}
                    isDragging={isDragging}
                />
                
                {/* Navigation Arrows */}
                <NavigationArrow 
                    direction="left" 
                    onClick={goToPrevious} 
                    isVisible={arrowsVisible} 
                />
                
                <NavigationArrow 
                    direction="right" 
                    onClick={goToNext} 
                    isVisible={arrowsVisible} 
                />
                
                <SwipeOverlay 
                    touchHandlers={touchHandlers}
                    mouseHandlers={mouseHandlers}
                    isDragging={isDragging}
                />
                
            </section>
            
            <Footer />
        </div>
    );
}