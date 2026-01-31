"use client";

import { useTranslation } from "react-i18next";

/**
 * Sponsors component displays a horizontal scrolling carousel of sponsor logos.
 * 
 * @component
 * @returns {JSX.Element} The rendered Sponsors component.
 */
export default function Sponsors() {
    const { t } = useTranslation();

    const sponsorsList = [
        { src: "/sponsors/Braiins.svg", name: "Braiins", noInvert: false },
        { src: "/sponsors/Blockstream.svg", name: "Blockstream", noInvert: false },
        { src: "/sponsors/Fulgur Ventures.svg", name: "Fulgur Ventures", noInvert: false },
        { src: "/sponsors/Vexl.svg", name: "Vexl", noInvert: false },
        { src: "/sponsors/Zebedee.svg", name: "Zebedee", noInvert: false },
        { src: "/sponsors/Plan B Network.svg", name: "Plan B Network", noInvert: false },
        { src: "/sponsors/Lugano Plan B Forum.svg", name: "Lugano Plan B Forum", noInvert: false },
        { src: "/sponsors/BitCare Forum.svg", name: "BitCare Forum", noInvert: false },
        { src: "/sponsors/BitCuneo.svg", name: "BitCuneo", noInvert: true },
        { src: "/sponsors/Stratum V2.svg", name: "Stratum V2", noInvert: false },
    ];

    return (
        <div className="w-full max-w-7xl pl-5 sm:pl-[50px] pr-5">
            <div className="mb-8 sm:mb-10 lg:mb-12 pt-2 sm:pt-3 lg:pt-4">
                <div className="relative mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center relative text-blue-dark dark:text-white"
                        style={{
                            letterSpacing: '0.05em',
                            textShadow: '0 2px 10px rgba(0, 102, 255, 0.3)'
                        }}>
                        {t("sponsors")}
                    </h2>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 h-1 rounded-full bg-blue-dark dark:bg-white"
                        style={{
                            boxShadow: '0 0 15px rgba(0, 102, 255, 0.5)',
                            animation: 'glow-pulse 2s ease-in-out infinite'
                        }}>
                    </div>
                </div>
                <style jsx>{`
                    @keyframes glow-pulse {
                        0%, 100% { opacity: 1; transform: translateX(-50%) scaleX(1); }
                        50% { opacity: 0.7; transform: translateX(-50%) scaleX(1.1); }
                    }
                `}</style>
                <div className="sponsors-container w-full">
                    <div className="sponsors-scroll">
                        <div className="sponsors-track">
                            {sponsorsList.map((sponsor, index) => (
                                <div key={index} className="sponsor-item">
                                    <img
                                        src={sponsor.src}
                                        alt={sponsor.name}
                                        className={`sponsor-logo ${sponsor.noInvert ? 'no-invert' : ''}`}
                                    />
                                    <span className="sponsor-name">{sponsor.name}</span>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {sponsorsList.map((sponsor, index) => (
                                <div key={`dup-${index}`} className="sponsor-item">
                                    <img
                                        src={sponsor.src}
                                        alt={sponsor.name}
                                        className={`sponsor-logo ${sponsor.noInvert ? 'no-invert' : ''}`}
                                    />
                                    <span className="sponsor-name">{sponsor.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
