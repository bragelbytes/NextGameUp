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
        const games = Array.isArray(rawgData.results) ? rawgData.results : [];
        const gameObject = games.map((game) => ({
            id: game.id,
            name: game.name ?? "Unknown",
            platform: Array.isArray(game.parent_platforms)
            ? game.parent_platforms.map((item) => item.platform.name).join(", ")
            : "Unknown",
            year: game.released ? new Date(game.released).getFullYear() : null,
            score: typeof game.metacritic === "number" ? game.metacritic : null,
            genres: Array.isArray(game.genres)
            ? game.genres.map((genre) => genre.name)
            : [],
            imageUrl: game.background_image || null,
        }));

        res.json(gameObject);
    } catch(error) {
        res.status(500).json({error: "Something went wrong fetching RAWG data"})
    }
});

export default searchRouter;

