import React from 'react'
import './Results.css'
import Button from '@material-ui/core/Button';

function Results({ searchValue, movies, nominations, handleNomination }) {

    return (
        <div className="results">
            <h3>Results for "{searchValue}"</h3>
            <ul>
                {movies.map(movie =>
                    <li key={movie.imdbID}>{movie.Title} {movie.Year} { }
                        <Button variant="contained" disabled={nominations.includes(movie)} onClick={() => handleNomination(movie)}>Nominate</Button>
                        {console.log("🚀 ~ file: App.js ~ line 47 ~ App ~ !nominations.includes(movie)", !nominations.includes(movie))}
                    </li>)}
            </ul>
        </div>
    )
}

export default Results
