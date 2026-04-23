export type Game = {
    id: number;
    name: string;
    platform: string;
    year: number | null;
    score: number | null;
    genres: string[];
    imageUrl: string | null;
    state?: "Owned" | "Wishlist";
};