"use client";

import React, { useState, useEffect } from "react";

/**
 * A React functional component that provides a toggle switch for dark mode.
 * 
 * This component uses the 'useState' hook to manage the dark mode state and the 'useEffect'
 * hook to apply the "dark" class to the 'document.documentElement' when dark mode is enabled.
 * 
 * The toggle switch is styled using Tailwind CSS classes and includes a smooth transition 
 * effect for the toggle button. It also displays sun and moon icons to indicate light and 
 * dark modes respectively.
 * 
 * @component
 * @returns {JSX.Element} The rendered dark mode toggle switch component.
 * @author BitPolito Team : polito-dev
 * @version 1.0.0
 * @example <Carousel />
 * 
 * @dependencies
 * - 'useState': React hook for managing the state within the component.
 * 
 * @function
 * @name DarkModeToggle
 */
export default function DarkModeToggle() {
    /**
     * @state {boolean} isDarkMode
     * @description A state variable that tracks if the dark mode is enabled or not. 
     * State syncs with the actual DOM class to reflect current theme.
     */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    /**
     * @effect
     * @description Loads the saved theme from localStorage on component mount.
     * This runs once to sync the component state with the saved preference.
     */
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark' || document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    /**
     * @function handleToggle
     * @description Toggles dark mode on/off, updates DOM and saves preference to localStorage.
     */
    const handleToggle = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="flex items-center">
            <img src="/icons/bitpolito-icon-sun.svg" className="icon-style-opposite !w-5 !h-5 !mr-2 hidden sm:block"></img>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={mounted ? isDarkMode : false}
                    onChange={handleToggle}
                    className="sr-only peer"
                    disabled={!mounted}
                />
                <div className="w-11 h-6 bg-blue-dark rounded-full peer peer-checked:bg-white"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5 dark:peer-checked:bg-blue-dark"></div>
            </label>
            <img src="/icons/bitpolito-icon-moon.svg" className="icon-style-opposite !w-5 !h-5 !mr-0 ml-2 hidden sm:block"></img>
        </div>
    );
}