import React from 'react'

function Results({movies, handleNomination}) {

    return (
        <div>
            <h3>Results for ""</h3>
            <ul>
                {movies.map(movie => <li key={movie.imdbID}>{movie.Title} {movie.Year} <button onClick={ () => handleNomination(movie)}>Nominate</button> </li> )}
            </ul>
        </div>
    )
}

export default Results
