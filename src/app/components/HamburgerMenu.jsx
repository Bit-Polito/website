"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

/**
 * List of nav items shown in the full-screen menu.
 * Available destinations open directly; the remaining entries keep the
 * existing "coming soon" pattern until their pages/sections exist.
 */
const NAV_ITEMS = [
    { key: "home", available: true, href: "/" },
    { key: "hackathon", available: true, href: "/hackathon" },
    { key: "blog", available: false },
    { key: "projects", available: false },
    { key: "events", available: false },
    { key: "merch", available: false },
];

/**
 * HamburgerMenu component renders a trigger button that opens a full-screen
 * navigation overlay, styled for both the light and dark (blue) themes.
 * Rendered once per responsive header (mobile vs desktop), matching the
 * pattern already used for DarkModeSwitch/LanguageSelector in page.js.
 *
 * @component
 * @param {Object} props
 * @param {() => void} props.onDonateClick - Called when the Donate button is pressed, after the menu closes.
 * @param {"mobile"|"desktop"} [props.variant="desktop"] - Controls which trigger style is rendered (visibility handled by breakpoint classes).
 * @returns {JSX.Element}
 */
export default function HamburgerMenu({ onDonateClick, variant = "desktop" }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <>
            {variant === "mobile" ? (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label={t("menu")}
                    className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border-2 border-blue-dark dark:border-white cursor-pointer hover:scale-105 transition-transform"
                >
                    <span className="flex flex-col gap-1">
                        <span className="block h-0.5 w-4 bg-blue-dark dark:bg-white rounded-full"></span>
                        <span className="block h-0.5 w-4 bg-blue-dark dark:bg-white rounded-full"></span>
                        <span className="block h-0.5 w-4 bg-blue-dark dark:bg-white rounded-full"></span>
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label={t("menu")}
                    className="hidden lg:flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                >
                    <span className="block h-0.5 w-full bg-blue-dark dark:bg-white rounded-full"></span>
                    <span className="block h-0.5 w-full bg-blue-dark dark:bg-white rounded-full"></span>
                    <span className="block h-0.5 w-full bg-blue-dark dark:bg-white rounded-full"></span>
                </button>
            )}

            {isOpen && (
                <div className="fixed inset-0 z-[200] flex min-h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-[#F9F9F9] p-6 text-blue-dark shadow-2xl dark:bg-blue-dark dark:text-white sm:p-12">
                    <div className="flex justify-between items-center">
                        <Link href="/" onClick={() => setIsOpen(false)} aria-label="Torna alla home di BitPolito" className="block w-48 sm:w-56">
                            <img src="/bitpolito-logo-light.svg" alt="BitPolito" className="icon-style-opposite !mr-0 !h-auto !w-full" />
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label={t("close")}
                            className="btn-b rounded-full"
                        >
                            ⨉
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col justify-center gap-4 sm:gap-6">
                        {NAV_ITEMS.map(({ key, available, href }) =>
                            available ? (
                                <Link
                                    key={key}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-left text-4xl sm:text-5xl font-bold hover:scale-105 transition-transform w-fit"
                                >
                                    {t(key)}
                                </Link>
                            ) : (
                                <div key={key} className="relative group w-fit">
                                    <span className="text-4xl sm:text-5xl font-bold cursor-not-allowed">
                                        {t(key)}
                                    </span>
                                    <div className="coming-soon">{t("coming-soon")}</div>
                                </div>
                            )
                        )}
                    </nav>

                </div>
            )}
        </>
    );
}
