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
     * @description A state variable that tracks if the dark mode is enabled or not. It is "true" when dark mode is active and "false" when light mode is active.
     */
    const [isDarkMode, setIsDarkMode] = useState(false);

    /**
     * @effect
     * @description A 'useEffect' hook that listens for changes in the 'isDarkMode' state and toggles the 'dark'
     * class on the '<html>' element accordingly.
     */
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    /**
     * @function handleToggle
     * @description Toggles the value of 'isDarkMode' between 'true' (dark mode) and 'false' (light mode).
     * This function is typically used for switching between dark and light themes when the button is clicked.
     */
    const handleToggle = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className="flex items-center">
            <img src="/icons/bitpolito-icon-sun.svg" className="icon-style-opposite !w-6 !h-6 !mr-2 hidden sm:block"></img>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleToggle}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-blue-dark rounded-full peer peer-checked:bg-white"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5 dark:peer-checked:bg-blue-dark"></div>
            </label>
            <img src="/icons/bitpolito-icon-moon.svg" className="icon-style-opposite !w-6 !h-6 !mr-0 ml-2 hidden sm:block"></img>
        </div>
    );
}