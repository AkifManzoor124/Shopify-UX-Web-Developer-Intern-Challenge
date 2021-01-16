import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import './Nominations.css'

function Nominations({ nominations, removeNomination }) {
    const [banner, setBanner] = useState(true);

    useEffect(() => {
        if (nominations.length >= 1) setBanner(false);
    }, [nominations.length])

    return (
        <div>
            <div className={`banner ${banner ? 'show' : 'hidden'}`}>
                <img className='shoppies_logo' src={process.env.PUBLIC_URL + '/oscar.png'} />
                <h1 className='shoppies_text'>THE SHOPPIES</h1>
            </div>
            <div>
                <div className={`panels ${!banner ? 'show' : 'hidden'}`}>
                    {nominations.map((nomination, i) => {
                        return <div key={i} className='panel'>
                            <img alt={nomination.Title} src={nomination.Poster}></img>
                            <Button variant="contained" onClick={() => removeNomination(nomination)} >Remove</Button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Nominations

{/* <ul>
                {nominations.map(nomination =>
                    <li key={nomination.imdbID}>{nomination.Title} {nomination.date}
                        <Button variant="contained" onClick={() => removeNomination(nomination)} >Remove</Button>
                    </li>)}
            </ul> */}
