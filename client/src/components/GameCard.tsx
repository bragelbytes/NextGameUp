import type { Game } from "../types/game";

type GameProps = {
    game: Game;
};

function GameCard({game}: GameProps){
    const defaultImage = "/default_img.png"
    const imageLabel = game.imageUrl === null ? defaultImage : game.imageUrl
    const yearLabel = game.year === null ? "Unknown" : game.year
    const scoreLabel = game.score === null ? "Not rated" : game.score
    const genreLabel =game.genres.length === 0 ? "No genres listed" : game.genres.join(", ")

    return (
        <article className="game-card">
            <img src={imageLabel} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.platform}</p>
            <p>{yearLabel}</p>
            <p>Metacritic: {scoreLabel}</p>
            <p>{genreLabel}</p>
            {game.state && <span>{game.state}</span>}
        </article> 
    );
}

export default GameCard;
