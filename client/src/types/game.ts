export type Game = {
    id: number;
    name: string;
    platform: string;
    year: number;
    score: number;
    genres: string[];
    imageUrl: string;
    state?: "Owned" | "Wishlist";
};