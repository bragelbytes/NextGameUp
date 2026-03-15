import type { Game } from "../types/game";

type GameProps = {
    game: Game;
};

function GameCard({game}: GameProps){
    return (
        <article>
            <img src={game.imageUrl} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.year}</p>
            <p>{game.score}</p>
            {game.state && <span>{game.state}</span>}
        </article> 
    );
}

export default GameCard;
