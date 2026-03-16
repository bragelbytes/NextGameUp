import { useState } from "react";
import SearchPanel from "./components/SearchPanel";
import GameCard from "./components/GameCard";
import { demoShelf } from "./data/mockGames";
import type { Game } from "./types/game";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(){
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(searchTerm)}`);

      if(!response.ok){
        throw new Error("Could not fetch data");
      }
      
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError("Something went wrong while searching.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <section>
        <h1>NextGameUp</h1>
        <p>Track your library and decide what to play next!</p>

        <SearchPanel searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearchSubmit={handleSearch} />
      </section>

      <section>
        <h2>Search Results</h2>
        {isLoading && <p>Now Loading...</p>}
        {error && <p>{error}</p>}
        {
          results.length > 0 && 
          <div className="game-grid">        
          {results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
          </div>
        }
      </section>

      <section>
        <h2>My Library</h2>

        <div className="game-grid">
          {demoShelf.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App