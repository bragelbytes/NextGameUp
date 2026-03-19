import express from 'express';

const searchRouter = express.Router();

const exampleGames = [
        {
            id: 1,
            name: "Example Game",
            platform: "PC",
            year: 2024,
            score: 9,
            genres: ["Action", "RPG"],
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Vivi_Ornitier_character.png/250px-Vivi_Ornitier_character.png"
        },
        {
            id: 2, 
            name: "Vivi 3", 
            platform: "Playstation", 
            year: 2000, 
            score: 9, 
            genres: ["Action", "RPG"], 
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Vivi_Ornitier_character.png/250px-Vivi_Ornitier_character.png",
            state: "Wishlist"
        },
    ];

searchRouter.get('/api/search', (req, res) => {
    const query = typeof req.query.q === "string" ? req.query.q : "";
    const normalizedQuery = query.toLowerCase();
    const filteredGames = exampleGames.filter((game) => {
        return (
            game.name.toLowerCase().includes(normalizedQuery) ||
            game.platform.toLocaleLowerCase().includes(normalizedQuery)
        );
    });
    res.json(filteredGames);
});

export default searchRouter;

