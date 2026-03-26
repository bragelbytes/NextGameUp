import type { Game } from "../types/game";

type GameProps = {
    game: Game;
};

function GameCard({game}: GameProps){
    return (
        <article className="game-card">
            <img src={game.imageUrl} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.platform}</p>
            <p>{game.year}</p>
            <p>Metacritic: {game.score === 0 ? "Not rated" : game.score}</p>
            <p>{game.genres.length === 0 ? "No genres listed" : game.genres.join(", ")}</p>
            {game.state && <span>{game.state}</span>}
        </article> 
    );
}

export default GameCard;
