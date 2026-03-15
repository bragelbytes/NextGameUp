import GameCard from "./components/GameCard"
import { demoResults, demoShelf } from "./data/mockGames"

function App() {

  return (
    <main>
      <section>
        <h1>NextGameUp</h1>
        <p>Track your library and decide what to play next!</p>
      </section>

      <section>
        <h2>Search Results</h2>

        <div className="game-card">        
          {demoResults.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

      </section>

      <section>
        <h2>My Library</h2>
          {demoShelf.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
      </section>
    </main>
  )
}

export default App