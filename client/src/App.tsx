import { useState } from "react";
import SearchPanel from "./components/SearchPanel";
import GameCard from "./components/GameCard";
import { demoShelf } from "./data/mockGames";
import type { Game } from "./types/game";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState("")
  const [results, setResults] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(){
    const trimmedSearchTerm = searchTerm.trim()
    if(!trimmedSearchTerm){
      setResults([]);
      setError("Please enter a game title, platform, etc. to begin search");
      return;
    }
    setSubmittedQuery(trimmedSearchTerm);
    setHasSearched(true);
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/search?q=${encodeURIComponent(trimmedSearchTerm)}`);

      if(!response.ok){
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 
        "Could not fetch data");
      }
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong while searching.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <section>
        <h1>NextGameUp</h1>
        <p>Track your library and decide what to play next!</p>

        <SearchPanel searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearchSubmit={handleSearch} isLoading={isLoading} />
      </section>

      <section>
        <h2>Search Results</h2>
        {isLoading && <p>Now Loading...</p>}
        {error && <p>{error}</p>}
        {hasSearched && !isLoading && !error && results.length === 0 && (
          <p>No games matched "{submittedQuery}"</p>
        )}
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