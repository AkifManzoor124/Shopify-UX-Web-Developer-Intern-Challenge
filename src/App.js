import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Components/Search'
import Results from './Components/Results'
import Nominations from './Components/Nominations'
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ searchValue", searchValue)
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([]);


  const handleSearchChange = (event) => {
    console.log("🚀 ~ file: App.js ~ line 23 ~ handleSearchChange ~ searchValue", searchValue)
    console.log("🚀 ~ file: App.js ~ line 27 ~ handleSearchChange ~ http://www.omdbapi.com/?apikey=2baadd4c&s=${searchValue}", `http://www.omdbapi.com/?apikey=2baadd4c&s=${searchValue}`)
    console.log("🚀 ~ file: App.js ~ line 22 ~ handleSearchChange ~ event.target.value", event.target.value)
    setSearchValue(event.target.value)
    getSearchResults(event.target.value)
  }

  const getSearchResults = (value) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=2baadd4c&s='${value}'`)
      .then(response => {
        { console.log("🚀 ~ file: App.js ~ line 30 ~ getSearchResults ~ response", response) }
        (response.data["Response"] !== "False") ? setMovies(response.data["Search"]) : setMovies(movies)
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
        <div className="results"><Results searchValue={searchValue} handleNomination={handleNomination} movies={movies} nominations={nominations}></Results></div>
        <Nominations nominations={nominations} removeNomination={removeNomination}></Nominations>
      </div>
    </div >
  );
}

export default App;
