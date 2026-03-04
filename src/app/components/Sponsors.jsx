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
        { src: "/sponsors/Braiins.svg", name: "Braiins", url: "https://braiins.com/", noInvert: false },
        { src: "/sponsors/Blockstream.svg", name: "Blockstream", url: "https://blockstream.com/", noInvert: false },
        { src: "/sponsors/Fulgur Ventures.svg", name: "Fulgur Ventures", url: "https://www.fulgur.ventures/", noInvert: false },
        { src: "/sponsors/Vexl.svg", name: "Vexl", url: "https://vexl.it/", noInvert: false },
        { src: "/sponsors/Zebedee.svg", name: "Zebedee", url: "https://zbd.gg/", noInvert: false },
        { src: "/sponsors/Plan B Network.svg", name: "Plan B Network", url: "https://planb.network/", noInvert: false },
        { src: "/sponsors/Lugano Plan B Forum.svg", name: "Lugano Plan B Forum", url: "https://planb.lugano.ch/planb-forum/", noInvert: false },
        { src: "/sponsors/BitCare Forum.svg", name: "BitCare Forum", url: "https://bitcareforum.it/", noInvert: false },
        { src: "/sponsors/BitCuneo.svg", name: "BitCuneo", url: "https://bitcuneo.it/", noInvert: true },
        { src: "/sponsors/Stratum V2.svg", name: "Stratum V2", url: "https://stratumprotocol.org/", noInvert: false },
    ];

    return (
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-5 p-2 sm:p-4 lg:p-5">
            <div className="mb-8 sm:mb-10 lg:mb-12 pt-8 sm:pt-9 lg:pt-10">
                <div className="relative mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center relative text-blue-dark dark:text-white"
                        style={{
                            letterSpacing: '0.05em',
                        }}>
                        {t("sponsors")}
                    </h2>
                </div>
                <div className="sponsors-container w-full">
                    <div className="sponsors-scroll">
                        <div className="sponsors-track">
                            {sponsorsList.map((sponsor, index) => (
                                <div key={index} className="sponsor-item">
                                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                                        <img
                                            src={sponsor.src}
                                            alt={sponsor.name}
                                            className={`sponsor-logo ${sponsor.noInvert ? 'no-invert' : ''}`}
                                        />
                                        <span className="sponsor-name">{sponsor.name}</span>
                                    </a>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {sponsorsList.map((sponsor, index) => (
                                <div key={`dup-${index}`} className="sponsor-item">
                                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                                        <img
                                            src={sponsor.src}
                                            alt={sponsor.name}
                                            className={`sponsor-logo ${sponsor.noInvert ? 'no-invert' : ''}`}
                                        />
                                        <span className="sponsor-name">{sponsor.name}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
