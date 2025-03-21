import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const chessboardImages = [
    "chessboard/bitpolito-post-sindaco-lugano.jpg",
    "chessboard/bitpolito-post-mastering-lightning.jpg",
    "#",
    "chessboard/bitpolito-post-capire-bitcoin.jpg",
    "chessboard/bitpolito-opensource-post-discovering-bitcoin.jpg",
    "chessboard/bitpolito-opensource-post-custodire-bitcoin.jpg",
    "#",
    "chessboard/bitpolito-post-pizza-day-gridless.jpg",
    "#",
    "chessboard/bitpolito-opensource-post-bitcoin-everyday.jpg",
    "chessboard/bitpolito-post-zbd.jpg",
    "#",
    "chessboard/bitpolito-post-todd.jpg",
    "chessboard/bitpolito-post-corso-bitcoin.jpg",
    "chessboard/bitpolito-opensource-post-teoria-dei-giochi.jpg",
    "#",
    "chessboard/bitpolito-opensource-post-scaling-bitcoin.jpg"
];

const imageLinks = [
    "https://www.instagram.com/p/Csd0MmFtisC/",
    "https://www.amazon.it/Mastering-Lightning-Network-Protocollo-Istantanei-ebook/dp/B0BSRB3BG1/ref=sr_1_1?crid=FG4OGKEIRC4T&dib=eyJ2IjoiMSJ9.9g0Ezn3vK9ozcoRV-A12Zj0laHh7zZnez9WdEeHr6XzIfTlCRRzb9IHhIP0m2kRwJgnw-rLIjP0qwJ6ScK6AW66JLnoqzWXOUCLY7qBAuGqUtfp6q9HQwDHLn__z8ubyexAwYSVwU9ocn9ETqRKIleYmTFTFE2FQUmMfwnxthi-p-Nww7K19OOmVHs0u69vN.QGE7-HwChTv4lYX88ff5kU_lMtZZMHjIAxGaiKIXn-k&dib_tag=se&keywords=mastering+lightning+network&nsdOptOutParam=true&qid=1736418758&sprefix=mastering+light%2Caps%2C397&sr=8-1",
    "#",
    "https://www.instagram.com/p/Cl_rlqHtqFW/",
    "https://www.instagram.com/p/C7j74w0NrN5/",
    "https://www.instagram.com/p/C6O1cmPtbxe/",
    "#",
    "https://www.instagram.com/p/C6tzVJ3tc3F/?img_index=1",
    "#",
    "https://www.instagram.com/p/C4-tmUMN3Ow/",
    "https://www.instagram.com/p/DBwk6grNy9D/",
    "#",
    "https://www.instagram.com/p/DBGg-EqojVE/",
    "#",
    "https://www.instagram.com/p/C2-fr-btZ1D/",
    "#",
    "https://www.instagram.com/p/DCpKJ0-oJuk/"
];

const layout = [
    [
        { type: 'chart', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[0], link: imageLinks[0] }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[1], link: imageLinks[1] },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[3], link: imageLinks[3] },
        { type: 'image', span: 1, src: chessboardImages[4], link: imageLinks[4] },
        { type: 'image', span: 1, src: chessboardImages[5], link: imageLinks[5] }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[7], link: imageLinks[7] }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[9], link: imageLinks[9] }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[10], link: imageLinks[10] },
        { type: 'image', span: 2, src: null, link: null }
    ],
    [
        { type: 'image', span: 1, src: chessboardImages[12], link: imageLinks[12] },
        { type: 'image', span: 1, src: chessboardImages[13], link: imageLinks[13] },
        { type: 'image', span: 1, src: chessboardImages[14], link: imageLinks[14] }
    ],
    [
        { type: 'image', span: 2, src: null, link: null },
        { type: 'image', span: 1, src: chessboardImages[16], link: imageLinks[16] }
    ]
];

export default function Chessboard() {
    const { t } = useTranslation();
    const [visibleRows, setVisibleRows] = useState(4);

    const loadMoreRows = () => {
        setVisibleRows((prev) => prev + 4);
    };

    return (
        <>
            <div className="flex justify-center space-x-2 mb-3 pt-16 pl-4">
                <a href="#" className="btn-b rounded-full !px-5">{t("events")}</a>
                <Link href="/podcast" className="btn-b rounded-full !px-5">{t("podcast")}</Link>
                <a href="#" className="btn-b rounded-full !px-5">{t("projects")}</a>
                <a href="#" className="btn-b rounded-full !px-5">{t("others")}</a>
            </div>

            <div className="grid grid-cols-3 gap-4 p-5 w-full max-w-5xl mx-auto">
                {layout.slice(0, visibleRows).flatMap((row, rowIndex) =>
                    row.map((item, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`${item.span === 2 ? 'col-span-2' : 'col-span-1'} h-100`}
                        >
                            {item.type === 'chart' ? (
                                <img src="#" className="chessboard"></img>
                            ) : (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                    <img
                                        src={item.src}
                                        className="chessboard"
                                    />
                                </a>
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className="flex justify-center mt-4">
                {visibleRows < layout.length && (
                    <button onClick={loadMoreRows} className="font-bold">
                        {t("load-more")}
                    </button>
                )}
            </div>
            <div className="mb-16"></div>
        </>
    );
}