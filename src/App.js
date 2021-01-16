import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Components/Search'
import Results from './Components/Results'
import Nominations from './Components/Nominations'
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([]);


  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    console.log("🚀 ~ file: App.js ~ line 23 ~ handleSearchChange ~ searchValue", searchValue)
    console.log("🚀 ~ file: App.js ~ line 27 ~ handleSearchChange ~ http://www.omdbapi.com/?apikey=2baadd4c&s=${searchValue}", `http://www.omdbapi.com/?apikey=2baadd4c&s=${searchValue}`)
    axios
      .get(`http://www.omdbapi.com/?apikey=2baadd4c&s='${searchValue}'`)
      .then(response => {
        (response.data["Response"] != "False") ? setMovies(response.data["Search"]) : setMovies([])
      })
  }

  const handleNomination = (nomination) => {
    setNominations([...nominations, nomination])
  }

  const removeNomination = (nomination) => {
    console.log("🚀 ~ file: App.js ~ line 29 ~ removeNomination ~ nomination", nomination)
    const updatedNominations = nominations.filter(remove => nomination.Title !== remove.Title)
    console.log("🚀 ~ file: App.js ~ line 30 ~ removeNomination ~ updatedNominations", updatedNominations)
    setNominations(updatedNominations)
  }

  return (
    <div className="container">
      <h2>The Shoppies</h2>
      <div className="shoppies-search">
        <Search handleSearchChange={handleSearchChange}></Search>
      </div>
      <div className="shoppies-nomination">
        <Results handleNomination={handleNomination} movies={movies} nominations={nominations}></Results>
        <Nominations nominations={nominations} removeNomination={removeNomination}></Nominations>
      </div>
    </div >
  );
}

export default App;
