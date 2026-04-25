import express from 'express';

const searchRouter = express.Router();

type RawgPlatform = {
  platform: {
    name: string;
  };
};

type RawgGenre = {
  name: string;
};

type RawgGame = {
  id: number;
  name: string;
  released: string | null;
  metacritic: number | null;
  background_image: string | null;
  parent_platforms?: RawgPlatform[];
  genres?: RawgGenre[];
};

type RawgSearchResponse = {
  results?: RawgGame[];
};

searchRouter.get('/api/search', async (req, res) => {
    const query = typeof req.query.q === "string" ? req.query.q : "";
    const trimmedQuery = query.trim();

    if(!trimmedQuery){
        return res.json([]);
    }

    const apiKey = process.env.RAWG_API_KEY;

    if(!apiKey){
        return res.status(500).json({error: "RAWG API key is missing."});
    }

    try {
        const rawgUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(trimmedQuery)}`;
        const response = await fetch(rawgUrl);

        if(!response.ok){
        return res.status(response.status).json({error: "Failed to fetch from RAWG"})
        }   

        const rawgData: RawgSearchResponse = await response.json();

        const rawgGames = Array.isArray(rawgData.results) ? rawgData.results : [];
        const filteredGames = rawgGames.filter((rawgGame) => {
          const platformNames = Array.isArray(rawgGame.parent_platforms) ? rawgGame.parent_platforms.map((item) => item.platform.name) : [];

          return !platformNames.includes("Web");
        });

        const normalizedGames = filteredGames.map((rawgGame) => ({
            id: rawgGame.id,
            name: rawgGame.name ?? "Unknown",
            platform: Array.isArray(rawgGame.parent_platforms)
            ? rawgGame.parent_platforms.map((item) => item.platform.name).join(", ")
            : "Unknown",
            year: rawgGame.released ? new Date(rawgGame.released).getFullYear() : null,
            score: typeof rawgGame.metacritic === "number" ? rawgGame.metacritic : null,
            genres: Array.isArray(rawgGame.genres)
            ? rawgGame.genres.map((genre) => genre.name)
            : [],
            imageUrl: rawgGame.background_image || null,
        }));

        res.json(normalizedGames);
    } catch(error) {
        res.status(500).json({error: "Something went wrong fetching RAWG data"})
    }
});

export default searchRouter;

