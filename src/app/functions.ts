"use client";

import { useState, useEffect, useRef } from "react";
import { carouselImages } from "./components/Carousel";
import axios from "axios";

type Episode = {
    id: string;
    name: string;
    [key: string]: any;
};

type FunctionsReturnType = {
    isBottom: boolean;
    footerHeight: number;
    footerRef: React.RefObject<HTMLDivElement | null>;
    scrollToTop: () => void;
    currentImage: number;
    progress: number;
    fade: boolean;
    changeImage: (direction: number) => void;
    arrowsVisible: boolean;
    showArrows: (visible: boolean) => void;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    episodes: Episode[];
    currentEpisode: Episode | null;
    loading: boolean;
    setCurrentEpisode: React.Dispatch<React.SetStateAction<Episode | null>>;
};

export default function useFunctions(): FunctionsReturnType {
    // page.ts
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

    // Carousel.ts
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true);
    const [arrowsVisible, setArrowsVisible] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

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

    const changeImage = (direction: number): void => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + direction + carouselImages.length) % carouselImages.length);
            setProgress(0);
            setFade(true);
        }, 100);
    };

    const showArrows = (visible: boolean): void => {
        setArrowsVisible(visible);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    // SpotifyPodcast.ts
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchEpisodes(): Promise<void> {
            try {
                const response = await axios.get("/api/spotify");
                setEpisodes(response.data.episodes.items);
                setCurrentEpisode(response.data.episodes.items[0]);
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEpisodes();
    }, []);

    return {
        isBottom,
        footerHeight,
        footerRef,
        scrollToTop,
        currentImage,
        progress,
        fade,
        changeImage,
        arrowsVisible,
        showArrows,
        isOpen,
        setIsOpen,
        episodes,
        currentEpisode,
        loading,
        setCurrentEpisode,
    };
}