import React from 'react'
import "./Search.css"

function Search({ handleSearchChange }) {



    return (
        <div>
            <form className="search-form">
                <label>Movie Title:</label>
                <input type="text" onChange={handleSearchChange} />
            </form>
        </div>
    )
}

export default Search
