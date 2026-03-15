export type Game = {
    id: number;
    name: string;
    year: number;
    score: number;
    imageUrl: string;
    state?: "Owned" | "Wishlist";
};