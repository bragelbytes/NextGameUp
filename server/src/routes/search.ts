import express from 'express';

const searchRouter = express.Router();

searchRouter.get('/api/search', (req, res) => {
    res.json([
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
    ]);
});

export default searchRouter;

