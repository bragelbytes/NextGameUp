import type { Game } from "../types/game";

type GameProps = {
    game: Game;
};

function GameCard({game}: GameProps){
    return (
        <article className="game-card">
            <img src={game.imageUrl} alt={game.name} />
            <h3>{game.name}</h3>
            <p>Platform: {game.platform}</p>
            <p>Released: {game.year}</p>
            <p>Average score: {game.score}</p>
            <p>Genres: {game.genres}</p>
            <span>{game.state ?? ""}</span>
        </article> 
    );
}

export default GameCard;
