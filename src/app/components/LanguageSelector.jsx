"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const languages = [
        { code: "en", name: "English" },
        { code: "it", name: "Italiano" },
        { code: "de", name: "Deutsch" },
        { code: "es", name: "Español" },
        { code: "fr", name: "Français" },
        { code: "nl", name: "Nederlands" },
        { code: "pt", name: "Português" },
        { code: "ru", name: "Русский" },
        { code: "zh", name: "中文" },
    ];

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="btn-b rounded-full !px-5"
            >
                {i18n.language.toUpperCase()}
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-blue-dark rounded shadow-lg">
                    <ul className="py-1">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    onClick={() => changeLanguage(lang.code)}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-400"
                                >
                                    {lang.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
