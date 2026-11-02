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
        <div className="relative">
            <form onSubmit={(e) => {
                e.preventDefault();
                searchByCity(search)
                setSuggestions([])
                }} className="flex justify-evenly items-center font-dm-sans pb-5">
                <div className="bg-Neutral-800 flex gap-2 px-3.5 py-2 rounded-md hover:bg-Neutral-600 focus-within:outline-Neutral-0 focus-within:outline-2 focus-within:outline-offset-2">
                    <img src={iconSearch} alt="Search-Icon" />
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a place..." className="text-Neutral-0 font-medium outline-hidden" />
                </div>
                <button type="submit" className="bg-Blue-500 text-Neutral-200 hover:bg-Blue-700 font-medium py-2 px-3 rounded-md cursor-pointer focus-visible:outline-Blue-500">Search</button>
            </form>
            <ul>
                {suggestions.length > 0 && <Dropdown className="w-58.5 p-2 top-10 left-2">{suggestions.map((suggestion) => {
                    return <li key={suggestion.id}>
                        <button onClick={() => {
                            selectSuggestion(suggestion)
                            setSuggestions([])}} className="text-Neutral-0 cursor-pointer px-2 py-1 w-full flex hover:bg-Neutral-600 rounded-sm focus-visible:outline-1">{suggestion.name}</button>
                    </li>
                })}</Dropdown>}
            </ul>
        </div>
    )
}

export default SearchBar