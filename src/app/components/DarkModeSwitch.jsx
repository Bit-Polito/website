"use client";

import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className="flex items-center">
            <img src="/icons/bitpolito-icon-sun.svg" className="icon-style-opposite w-[30px] h-[30px] mr-[13px]"></img>
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
            <img src="/icons/bitpolito-icon-moon.svg" className="icon-style-opposite w-[26px] h-[30px] ml-[13px]"></img>
        </div>
    );
}