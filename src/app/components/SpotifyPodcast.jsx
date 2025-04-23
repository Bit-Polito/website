import { useEffect, useState } from "react";
import axios from "axios";

export default function SpotifyPodcast() {
    const [episodes, setEpisodes] = useState([]);
    const [currentEpisode, setCurrentEpisode] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEpisodes() {
            try {
                const response = await axios.get("/api/spotify");
                setEpisodes(response.data.episodes.items);
                setCurrentEpisode(response.data.episodes.items[0]);
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEpisodes();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <h2 className="text-xl font-bold text-center mb-4 text-blue-dark dark:text-white">Podcast</h2>

            {loading && <p className="text-center text-blue-dark dark:text-white">Loading...</p>}

            {currentEpisode && (
                <iframe
                    className="w-full h-24 mt-4 rounded-lg"
                    src={`https://open.spotify.com/embed/episode/${currentEpisode.id}`}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            )}

            <ul className="mt-4 gap-y-2">
                {episodes.map((episode) => (
                    <li
                        key={episode.id}
                        onClick={() => setCurrentEpisode(episode)}
                        className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition ${currentEpisode?.id === episode.id ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}`}
                    >
                        <p className="text-blue-dark dark:text-white">{episode.name}</p>
                        <p className="text-sm text-gray-500">{new Date(episode.release_date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}