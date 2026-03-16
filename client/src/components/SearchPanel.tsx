type SearchPanelProps = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onSearchSubmit: () => void;
}

function SearchPanel({
    searchTerm, 
    onSearchChange, 
    onSearchSubmit,
}: SearchPanelProps){
    return(
        <div>
            <input 
                type="text" 
                placeholder="Search for games to add..."
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />
            <button type="button" onClick={onSearchSubmit}>Search</button>
        </div>
    );
}

export default SearchPanel;