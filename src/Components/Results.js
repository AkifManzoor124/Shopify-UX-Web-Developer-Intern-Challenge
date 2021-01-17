import React from 'react'
import './Results.css'
import Button from '@material-ui/core/Button';

function Results({ searchValue, movies, nominations, handleNomination, showMovieDetailsDialog }) {

    return (
        <div className="results">
            <ul>
                {movies.map(movie =>
                    <li key={movie.imdbID}>
                        <div className="poster" onClick={() => { showMovieDetailsDialog(movie) }}>
                            <img src={movie.Poster}></img>
                        </div>
                        <div className="movie-content">
                            <p>{movie.Title} {movie.Year}</p>
                            <Button disableElevation variant="contained" disabled={nominations.includes(movie)} onClick={() => handleNomination(movie)}>Nominate</Button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Results
