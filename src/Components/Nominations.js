import React from 'react'

function Nominations({ nominations, removeNomination }) {
    return (
        <div>
            <h3>Nominations</h3>
            <ul>
                {nominations.map(nomination => <li key={nomination.imdbID}>{nomination.Title} {nomination.date} <button onClick={() => removeNomination(nomination)} >Remove</button></li>)}
            </ul>
        </div>
    )
}

export default Nominations
