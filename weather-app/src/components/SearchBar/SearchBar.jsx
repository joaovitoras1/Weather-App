import { useEffect, useState } from 'react'

import iconSearch from '@/assets/icons/icon-search.svg'

import Dropdown from '@/components/UI/Dropdown/Dropdown.jsx'

function SearchBar({searchByCity, selectSuggestion}) {

    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState([])

    async function fetchSuggestions(cityName) {
        const suggestionsResult = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`)
        
        if(!suggestionsResult.ok) {
            return []
        }
        const suggestions = await suggestionsResult.json()
        return suggestions
    }
    
    useEffect(() => {
        const timer = setTimeout(async () => {
            if(!search.trim().length) {
                setSuggestions([])
                return
            }
            const suggestionsList = await fetchSuggestions(search)
            if(suggestionsList.results) {
                setSuggestions(suggestionsList.results)
            } else {
                setSuggestions([])
            }
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [search])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                searchByCity(search)
                setSuggestions([])
                }}>
                <img src={iconSearch} alt="Search-Icon" />
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a place..." />
                <button type="submit">Search</button>
            </form>
            <ul>
                {suggestions.length > 0 && <Dropdown>{suggestions.map((suggestion) => {
                    return <li key={suggestion.id}>
                        <button onClick={() => {
                            selectSuggestion(suggestion)
                            setSuggestions([])}}>{suggestion.name}</button>
                    </li>
                })}</Dropdown>}
            </ul>
        </div>
    )
}

export default SearchBar