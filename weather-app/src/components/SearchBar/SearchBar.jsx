import { useState } from 'react'

import iconSearch from '@/assets/icons/icon-search.svg'

function SearchBar() {

    const [search, setSearch] = useState('')

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Teste")
                }}>
                <img src={iconSearch} alt="Search-Icon" />
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a place..." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar