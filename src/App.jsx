import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing the video
import homepageVideo from "../public/homepage.mp4"
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

      <div id="hero-section">

        <div id="left-container">
          <h1 className='logo'>ikaiva <span>studio.</span></h1>

          <div id="rich-text-container">
            <span id="richText">IKAIVA</span>
          </div>

          <p id="homepage-desc">ikaiva is an independently owned creative studio, specializing in branding and interface design for businesses all over the world.</p>

          <div id="contact">
            <a href="https://www.instagram.com/ikaiva.studio/"  target="_blank" >INSTAGRAM</a>
            <a href="https://x.com/IkaivaStudio" target="_blank" >X</a>
            <a href="https://www.linkedin.com/company/ikaiva-studio" target="_blank" >LINKEDIN</a>
            <a href="mailto:ikaiva.studio@gmail.com" target="_blank" >CONTACT</a>
          </div>
        </div>

        <div id="vid-container">
          <video preload="true" autoPlay loop muted src={homepageVideo} id="hero-vid"></video>
        </div>
          
        
      </div>

      <div className="scroll-container">
      <div className="scroll-item">Container 1</div>
      <div className="scroll-item">Container 2</div>
      <div className="scroll-item">Container 3</div>
      <div className="scroll-item">Container 4</div>
      <div className="scroll-item">Container 5</div>
      <div className="scroll-item">Container 6</div>
      <div className="scroll-item">Container 7</div>
      <div className="scroll-item">Container 8</div>
      <div className="scroll-item">Container 9</div>
    </div>

      

      {/* <div id="project-display">
        <div id="project-container">
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
        </div>
      </div> */}
    </body>
  )
}

export default App
