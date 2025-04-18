import { useTranslation } from "react-i18next";

/**
 * Footer component that renders the footer section of the website.
 * 
 * This component includes:
 * - A logo image with a light mode issue to be fixed.
 * - Contact and application links.
 * - Social media links for various platforms (Telegram, LinkedIn, X (Twitter), Instagram, YouTube, Spotify, GitHub).
 * - Footer text with Cookie Policy, Privacy Policy, and copyright information.
 * 
 * @component
 * @returns {JSX.Element} The rendered footer section.
 */
/**
 * @description Footer component for the BitPolito website. 
 *              Displays contact links, social media links, and legal information.
 * @author BitPolito Team : Lorenzo
 * @version 1.0.0
 * @dependencies 
 *   - useTranslation (from 'react-i18next'): For internationalization (multiple languages).
 *   - Tailwind CSS: For styling the component.
 * @issues 
 *   - Image in light mode has a display issue (marked with a TODO comment in the code).
 *   - Missing image source for the X (Twitter) link.
 *   - I think that the issue of the footer that appears all of a sudden is due to the isBottom function
 *   - TODO: Understand whether there should be a better way on handle the footer, is it required that is not seen until we reach the end? 
 * @returns {JSX.Element} The rendered Footer component.
 */
export default function Footer() {
    const { t } = useTranslation();

    return (
        <>
            {/* TO FIX: error to show image in light mode */}
            <img src="/bitpolito-light.png" className="icon-style !w-64 !h-36 rotate-7"></img>

            <div className="flex justify-between space-x-3">
                <a href='mailto: info@bitpolito.it' target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src={"icons/email-light.png"} className="icon-style"></img>
                    info@bitpolito.it
                </a>
                <a href="https://forms.gle/P9mzEhqh8DdrkyQ96" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src={"icons/join-us-light.png"} className="icon-style"></img>
                    {t("apply")}
                </a>
            </div>

            <div style={{ height: "5px" }}></div>

            <div className="flex justify-between space-x-2">
                <a href="https://t.me/BitPolitoForum" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/telegram-light.png" className="icon-style"></img>
                    Telegram
                </a>
                <a href="https://www.linkedin.com/company/bitpolito/?originalSubdomain=it" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/linkedIn-light.png" className="icon-style"></img>
                    LinkedIn
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="#" className="icon-style"></img>
                    X (Twitter)
                </a>
                <a href="https://www.instagram.com/bitpolito/" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/instagram-light.png" className="icon-style"></img>
                    Instagram
                </a>
                <a href="https://www.youtube.com/@BitPolito" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/youtube-light.png" className="icon-style"></img>
                    YouTube
                </a>
                <a href="https://open.spotify.com/show/3xXqSrkyLloGhTozWMnuhH" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/spotify-light.png" className="icon-style"></img>
                    Spotify
                </a>
                <a href="https://github.com/BitPolito" target="_blank" rel="noopener noreferrer" className="btn-b rounded-md">
                    <img src="icons/github-light.png" className="icon-style"></img>
                    GitHub
                </a>
            </div>

            <div style={{ height: "30px" }}></div>

            <div className="flex justify-between space-x-10">
                <p>Cookie Policy</p>
                <p>©2025, Bitpolito</p>
                <p>Privacy Policy</p>
            </div>
        </>
    );
}