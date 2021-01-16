import React from 'react'

function Results({ searchValue, movies, nominations, handleNomination }) {

    return (
        <div>
            <h3>Results for "{searchValue}"</h3>
            <ul>
                {movies.map(movie =>
                    <li key={movie.imdbID}>{movie.Title} {movie.Year} { }
                        <button disabled={nominations.includes(movie)} onClick={() => handleNomination(movie)}>Nominate</button>
                        {console.log("🚀 ~ file: App.js ~ line 47 ~ App ~ !nominations.includes(movie)", !nominations.includes(movie))}
                    </li>)}
            </ul>
        </div>
    )
}

export default Results
