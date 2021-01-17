import React from 'react'
import "./Search.css"

function Search({ handleSearchChange }) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="podium">
            <div className='podium-bar'>
                <form className="search-form" onSubmit={handleSubmit}>
                    <label>Movie Title: </label>
                    <input type="text" onChange={handleSearchChange} />
                </form>
            </div>
            <div className="podium-bar-base"></div>
            <div className="podium-stand"></div>
            <div className="podium-base-support"></div>
            <div className="podium-base"></div>
        </div>
    )
}

export default Search
