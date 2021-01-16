import React from 'react'
import Button from '@material-ui/core/Button';

function Nominations({ nominations, removeNomination }) {
    return (
        <div>
            <ul>
                {nominations.map(nomination =>
                    <li key={nomination.imdbID}>{nomination.Title} {nomination.date}
                        <Button variant="contained" onClick={() => removeNomination(nomination)} >Remove</Button>
                    </li>)}
            </ul>
        </div>
    )
}

export default Nominations
