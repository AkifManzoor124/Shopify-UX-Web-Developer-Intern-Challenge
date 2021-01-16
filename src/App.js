import React, { useState } from 'react'
import axios from 'axios'
import Search from './Components/Search'
import Results from './Components/Results'
import Nominations from './Components/Nominations'
import SuccessDialog from './Components/SuccessDialog'
import ErrorDialog from './Components/ErrorDialog'
import SplashScreen from './Components/SplashScreen'
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([]);

  const [openErrorDialog, setOpenErrorDialog] = React.useState(false);

  const showErrorDialog = () => {
    setOpenErrorDialog(true);
  };

  const closeErrorDialog = () => {
    setOpenErrorDialog(false)
  }

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
    if (nominations.length < 5) {
      setNominations([...nominations, nomination])
    } else {
      showErrorDialog()
    }
  }

  const removeNomination = (nomination) => {
    console.log("🚀 ~ file: App.js ~ line 29 ~ removeNomination ~ nomination", nomination)
    const updatedNominations = nominations.filter(remove => nomination.Title !== remove.Title)
    console.log("🚀 ~ file: App.js ~ line 30 ~ removeNomination ~ updatedNominations", updatedNominations)
    setNominations(updatedNominations)
  }

  return (
    <div>
      <SplashScreen></SplashScreen>
      <div className="shoppies">
        <div className="shoppies-screen">
          <div className="shoppies-screen-content">
            <Nominations nominations={nominations} removeNomination={removeNomination}></Nominations>
          </div>
        </div>
        <div className="shoppies-stage">
          <Search handleSearchChange={handleSearchChange}></Search>
          <Results searchValue={searchValue} handleNomination={handleNomination} movies={movies} nominations={nominations}></Results>
        </div>
        <SuccessDialog nominations={nominations}></SuccessDialog>
        <ErrorDialog handleClickOpen={showErrorDialog} open={openErrorDialog} handleClose={closeErrorDialog}></ErrorDialog>
      </div>
    </div>
  );
}

export default App;
