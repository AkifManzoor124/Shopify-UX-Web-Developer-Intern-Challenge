import React from 'react'
import './SplashScreen.css'

function SplashScreen() {
    const [splash, setSplash] = React.useState(true);

    React.useEffect(() => setTimeout(() => setSplash(false), 1250), [])

    return (
        <div className={`splash-screen ${splash ? 'splash' : 'hidden'}`}>
            <img className='shoppies_logo' src={process.env.PUBLIC_URL + '/oscar.png'} />
            <h1 className='shoppies_text'>THE SHOPPIES</h1>
        </div>
    )
}

export default SplashScreen
