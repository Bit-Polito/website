import axios from "axios";

const clientId: string | undefined = process.env.SPOTIFY_CLIENT_ID;
const clientSecret: string | undefined = process.env.SPOTIFY_CLIENT_SECRET;

export async function GET(): Promise<Response> {
    try {
        if (!clientId || !clientSecret) {
            throw new Error("Missing Spotify client id or secret.");
        }

        const tokenResponse = await axios.post(
            "https://accounts.spotify.com/api/token",
            new URLSearchParams({ grant_type: "client_credentials" }).toString(),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const accessToken: string = tokenResponse.data.access_token;
        const showId: string = "3xXqSrkyLloGhTozWMnuhH";
        const showResponse = await axios.get(`https://api.spotify.com/v1/shows/${showId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return new Response(JSON.stringify(showResponse.data), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error.";

        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}