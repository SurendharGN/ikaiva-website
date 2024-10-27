import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing cover pages
import artistHubCover from '../public/portfolio assets/artistsHub/cover-page.png';
import auraCover from '../public/portfolio assets/aura/aura-cover-page.png';
import harmonyCover from '../public/portfolio assets/harmony/harmony-cover-page.png';
import emberCover from '../public/portfolio assets/emberRoast/emberRoast-cover-page.png';
import astralisCover from '../public/portfolio assets/astralisVentures/astralisVentures-cover-page.png';
import amplifyCover from '../public/portfolio assets/amplify/amplify-cover-page.png';
import davinciCover from '../public/portfolio assets/davinciMedia/davinci-cover-page.png';

// importing functions
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate=useNavigate()

  return (
    <body>
      <h1 className='logo'>ikaiva <span>studio.</span></h1>

      <div className="project" onClick={()=>navigate('/TheArtistsHub')} style={{ cursor: 'pointer' }}>
        <img src={artistHubCover} alt="" className='cover-page'/>
        <p>THE ARTIST'S HUB '24</p>
      </div>
      
      <div className="project" onClick={()=>navigate('/AuraStudio')} style={{ cursor: 'pointer' }}>
        <img src={auraCover} alt="" className="cover-page"/>
        <p>AURA STUDIO '24</p>
      </div>

      <div className="project" onClick={()=>navigate('/EmberRoast')} style={{ cursor: 'pointer' }}>
        <img src={emberCover} alt="" className="cover-page"/>
        <p>EMBER ROAST '24</p>
      </div>

      <div className="project" onClick={()=>navigate('/AstralisVentures')} style={{ cursor: 'pointer' }}>
        <img src={astralisCover} alt="" className="cover-page"/>
        <p>ASTRALIS VENTURES '24</p>
      </div>

      <div className="project" onClick={()=>navigate('/HarmonyStore')} style={{ cursor: 'pointer' }}>
        <img src={harmonyCover} alt="" className="cover-page"/>
        <p>THE HARMONY STORE '24</p>
      </div>

      <div className="project" onClick={()=>navigate('/AmplifyMediaHouse')} style={{ cursor: 'pointer' }}>
        <img src={amplifyCover} alt="" className="cover-page" />
        <p>AMPLIFY MEDIA HOUSE '24</p>
      </div>

      <div className="project" onClick={()=>navigate('/DavinciMedia')} style={{ cursor: 'pointer' }}>
        <img src={davinciCover} alt="" className="cover-page"/>
        <p>DAVINCI MEDIA '24</p>
      </div>
    </body>
  )
}

export default App
