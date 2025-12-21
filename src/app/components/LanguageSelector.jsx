"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

/**
 * LanguageSelector component renders a dropdown to allow users to select their preferred language.
 * The component supports multiple languages and handles switching between them via the i18n library.
 * It also detects clicks outside the dropdown to close it when necessary.
 *
 * @component
 * @returns {JSX.Element} The rendered LanguageSelector component.
 * @author BitPolito Team : polito-dev
 * @version 1.0.0
 * @example <LanguageSelector />
 *
 * @description
 * - The component renders a language dropdown with options to choose from a variety of languages.
 * - On selecting a language, the 'i18n.changeLanguage' function is called to update the language globally.
 * - The dropdown is automatically closed when the user clicks outside of it.
 * - The selected language is displayed in the dropdown, and the interface is updated to reflect the new language.
 *  
 * @dependencies
 * - 'useState': React hook for managing the state within the component, such as the visibility of the dropdown.
 * - 'useEffect': React hook to handle side effects, such as detecting clicks outside the dropdown to close it.
 * - 'useRef': React hook to keep a reference to the dropdown element to detect clicks outside of it.
 * - 'useTranslation': Hook for internationalization (i18next) to handle language switching and support multiple languages.
 *
 * @function
 * @name LanguageSelector
 */
export default function LanguageSelector() {
    const { i18n } = useTranslation();

    /**
     * @state {boolean} isDropdownOpen
     * @description A boolean variable that tracks if the language selection dropdown is open ('true') or closed ('false').
     */
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    /**
     * @ref dropdownRef
     * @description A reference to the language dropdown container element, used to detect clicks outside the dropdown to close it.
     */
    const dropdownRef = useRef(null);

    /**
     * @constant {Object[]} languages
     * @description An array of language objects available for selection, each containing a 'code' and a 'name'.
     * This list is used to populate the language dropdown options.
     */
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
        { code: "fa", name: "فارسی" },
    ];

    /**
     * @function changeLanguage
     * @description Changes the current language and saves the preference to localStorage.
     * 
     * @param {string} langCode - The language code ("en", "it", ...) corresponding to the selected language.
     */
    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem('language', langCode);
        setIsDropdownOpen(false);
    };

    /**
     * @effect
     * @description A 'useEffect' hook that adds an event listener for clicks outside the dropdown. 
     * When a click outside is detected, it closes the dropdown ('setIsDropdownOpen(false)').
     * This effect ensures that the dropdown automatically closes when the user clicks elsewhere on the document.
     */
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
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-blue-dark border-2 border-blue-dark dark:border-white rounded-lg shadow-lg z-50 opacity-100">
                    <ul className="py-1">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    onClick={() => changeLanguage(lang.code)}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150"
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