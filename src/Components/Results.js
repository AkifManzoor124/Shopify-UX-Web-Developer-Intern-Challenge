import React from 'react'
import './Results.css'
import Button from '@material-ui/core/Button';

function Results({ searchValue, movies, nominations, handleNomination }) {

    return (
        <div className="results">
            <h3>Results for "{searchValue}"</h3>
            <ul>
                {movies.map(movie =>
                    <div className="result-data">
                        <li key={movie.imdbID}>- {movie.Title} {movie.Year}
                            <span>&nbsp;&nbsp;</span>
                            <Button disableElevation variant="contained" disabled={nominations.includes(movie)} onClick={() => handleNomination(movie)}>Nominate</Button>
                        </li>
                    </div>
                )
                }
            </ul>
        </div>
    )
}

export default Results
