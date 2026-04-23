type SearchPanelProps = {
    searchTerm: string;
    isLoading: boolean;
    onSearchChange: (value: string) => void;
    onSearchSubmit: () => void;
}

function SearchPanel({ searchTerm, isLoading, onSearchChange, onSearchSubmit}: SearchPanelProps){
    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        onSearchSubmit();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search for games to add..."
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}

export default SearchPanel;