import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-y-7">
            <div className="flex justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 11724 3127"
                    fill="currentColor"
                    className="icon-style !w-72 !h-36"
                >
                    <path d="M225.07 446.602V223.307H3601.64V0H3826.75V223.307H4276.95V0H4502.06V223.307H4952.27V446.618H4727.16V669.93H4502.06V1339.86H3601.64V893.236H3376.54V1339.86H2926.33V893.236H2701.22V669.93H2476.12V893.236H2251.01V1116.55H2025.91V669.93H1800.8V446.618H1575.7V669.93H1350.59V893.236H675.28V446.618H225.109V1116.54H450.208V1339.84H675.317V1563.15H1350.62V893.221H1575.73V1116.54H1800.84V1339.84H2476.15V1563.15H2701.26V1786.47H3376.57V1563.18V1339.87H3601.67V1563.18V1786.5H3376.57V2233.09H3151.47V3126.33H2926.36V2009.77H2701.26V2233.09H2476.15V3126.33H2251.05V2009.77H1800.84V1786.47H1350.62V2009.77H1125.52V3126.33H900.416V1786.47H675.317V2009.77H450.208V3126.33H225.109V1786.47H0V446.602H225.07ZM3376.54 446.618H3151.43V669.93H3376.54V446.618ZM5519.96 876H5292.67V1105.33H5065.39V1334.67V1564H5292.67V1793.33H5519.96V2022.67H5747.24V2252H5974.53V2022.67H6201.82V1793.33H6429.1V1564H6656.39V1334.67V1105.33H6429.1V876H6201.82H5974.53V1105.33H5747.24V876H5519.96ZM5292.67 1564V1334.67V1105.33H5519.96V1334.67V1564H5292.67ZM7233.39 0V223.282H6784.39V446.569H7008.89V669.856H7233.39V1339.71H8131.39V1786.28H8355.89V2009.57H8580.39V3126H8804.89V2009.57H9029.39V2232.86H9253.89V3126H9478.39V2009.57H9927.39V1786.28H10376.4V1563H10600.9V3126H10825.4V1786.28H11049.9V2009.57H11274.4V3126H11498.9V1786.28H11723.4V446.569H11498.9V223.282H10376.4V0H8355.89V223.282H8131.39V0H7906.89V223.282H7457.89V0H7233.39ZM8355.89 893.138H8131.39V669.856H8355.89V893.138ZM8355.89 669.856V446.569H8580.39V669.856H8355.89Z" />
                </svg>
            </div>

            <div className="flex flex-wrap justify-center gap-7">
                <a href='mailto: info@bitpolito.it' target="_blank" rel="noopener noreferrer" className="btn-b rounded-md !px-6 !py-6">
                    <img src="icons/bitpolito-icon-mail.svg" className="icon-style"></img>
                    info@bitpolito.it
                </a>
                <a href="https://forms.gle/P9mzEhqh8DdrkyQ96" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md !px-5">
                    <img src="icons/bitpolito-icon-share.svg" className="icon-style"></img>
                    {t("apply")}
                </a>
            </div>

            <div className="flex flex-wrap justify-center gap-7">
                <a href="https://t.me/BitPolitoForum" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/bitpolito-icon-social-telegram.svg" className="icon-style"></img>
                    Telegram
                </a>
                <a href="https://www.linkedin.com/company/bitpolito/?originalSubdomain=it" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/bitpolito-icon-social-linkedin.svg" className="icon-style"></img>
                    LinkedIn
                </a>
                <a href="https://www.x.com/bitpolito" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/bitpolito-icon-social-x.svg" className="icon-style"></img>
                    X (Twitter)
                </a>
                <a href="https://www.instagram.com/bitpolito/" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/bitpolito-icon-social-instagram.svg" className="icon-style"></img>
                    Instagram
                </a>
                <a href="https://www.youtube.com/@BitPolito" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/bitpolito-icon-social-youtube.svg" className="icon-style"></img>
                    YouTube
                </a>
                <a href="https://open.spotify.com/show/3xXqSrkyLloGhTozWMnuhH" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/bitpolito-icon-spotify.svg" className="icon-style"></img>
                    Spotify
                </a>
                <a href="https://github.com/BitPolito" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/bitpolito-icon-github.svg" className="icon-style"></img>
                    GitHub
                </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-10">
                <p>Cookie Policy</p>
                <p>©2025, Bitpolito</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}