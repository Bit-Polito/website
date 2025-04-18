"use client";

import React, { useState, useEffect } from "react";

/**
 * A React functional component that provides a toggle switch for dark mode.
 * 
 * This component uses the `useState` hook to manage the dark mode state and the `useEffect` 
 * hook to apply the "dark" class to the `document.documentElement` when dark mode is enabled.
 * 
 * The toggle switch is styled using Tailwind CSS classes and includes a smooth transition 
 * effect for the toggle button. It also displays sun and moon icons to indicate light and 
 * dark modes respectively.
 * 
 * @component
 * @returns {JSX.Element} The rendered dark mode toggle switch component.
 */
/**
 * @function DarkModeToggle
 * @description A React functional component that provides a toggle switch for enabling or disabling dark mode.
 * The component uses a checkbox input styled as a toggle switch and updates the `classList` of the 
 * `document.documentElement` to apply or remove the "dark" class based on the toggle state.
 *
 * @returns {JSX.Element} A JSX element containing the dark mode toggle switch with sun and moon icons.
 *
 * @example
 * // Usage in a React application
 * import DarkModeToggle from './DarkModeSwitch';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <DarkModeToggle />
 *     </div>
 *   );
 * }
 */
export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className="flex items-center space-x-1">
            <span>🌞</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleToggle}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-blue-700 rounded-full peer peer-checked:bg-white"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5 dark:peer-checked:bg-blue-700"></div>
            </label>
            <span>🌙</span>
        </div>
    );
}
