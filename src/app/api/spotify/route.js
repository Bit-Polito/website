import axios from "axios";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export async function GET() {
    try {
        const tokenResponse = await axios.post(
            "https://accounts.spotify.com/api/token",
            new URLSearchParams({ grant_type: "client_credentials" }).toString(),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const accessToken = tokenResponse.data.access_token;

        const showId = "3xXqSrkyLloGhTozWMnuhH";
        const showResponse = await axios.get(`https://api.spotify.com/v1/shows/${showId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return Response.json(showResponse.data);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}