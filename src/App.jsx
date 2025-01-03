import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { useNavigate } from 'react-router-dom';

// importing the video
import homepageVideo from "../public/homepage.mp4"
// importing cover pages
import blumeCp from "../public/portfolio assets/blume/3-1.png";
import beansCp from "../public/portfolio assets/beans/1-1.png";
import calentonCp from "../public/portfolio assets/calenton/1-1.png";import etherealCp from "../public/portfolio assets/ethereal/cover-page.png";
import harmonyCp from "../public/portfolio assets/harmony/page-6.png";
import emberCp from "../public/portfolio assets/emberRoast/emberRoast-cover-page.png";
import artistshubCp from "../public/portfolio assets/artistsHub/cover-page.png";
import davinciCp from "../public/portfolio assets/davinciMedia/davinci-cover-page.png";
import auraCp from "../public/portfolio assets/aura/aura-cover-page.png";


import Sample from '../src/pages/projects/Sample.jsx'
// importing functions

function App() {
  const navigate=useNavigate();

  

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

        <div id="rich-text-container-mobile">
            <span id="richText">IKAIVA</span>
          </div>

        {/* <div id="schedule-container">
          <div id="schedule-content">
            <p className='schedule-para'>3 Premium Slots</p>
          <div id="circle"></div>
          <p className='schedule-para'>January '25</p>
          <div id="circle"></div>
          <p className='schedule-para'>Schedule Now</p>
          
          
          
          <div id="circle"></div>
          </div>
          
          
          
          
        
        
          
        </div> */}

        <div id='projects-mobile'>
          <div className="project" onClick={()=>navigate('/Blume')}>
            <img className="cover-page" src={blumeCp}></img>
            <p>BLUME '24</p>
          </div>
          
          <div className="project" onClick={()=>navigate('/Beans')}>
            <img className="cover-page" src={beansCp}></img>
            <p>BEANS '24</p>
          </div>
          <div className="project" onClick={()=>navigate('Calenton')}>
            <img className="cover-page" src={calentonCp}></img>
            <p>CALENTON '24</p>
          </div>
          <div className="project">
            <img className="cover-page" src={etherealCp} onClick={()=>navigate("Ethereal")}></img>
            <p>ETHEREAL ESSENCE '24</p>
          </div>
          <div className="project">
            <img className="cover-page" src={emberCp} onClick={(navigate('/EmberRoast'))}></img>
            <p>EMBER ROAST '24</p>
          </div>
          <div className="project">
            <img className="cover-page" src={harmonyCp} onClick={(navigate('/HarmonyStore'))}></img>
            <p>HARMONY '24</p>
          </div>
          <div className="project">
            <img className="cover-page" src={auraCp} onClick={(navigate('/AuraStudio'))}></img>
            <p>AURA STUDIOS '24</p>
          </div>
          <div className="project">
            <img className="cover-page" src={artistshubCp} onClick={(navigate('/TheArtistsHub'))}></img>
            <p>THE ARTIST'S HUB '24</p>
          </div>
          <div className="project">
            <img className="cover-page" src={davinciCp}  onClick={(navigate('/DavinciMedia'))}></img>
            <p>DAVINCI MEDIA '24</p>
          </div>
          {/* <div className="project">
            <img className="cover-page" src="../../public/portfolio assets/harmony/harmony-cover-page.png"></img>
            <p>MANAM CHENNAI '24</p>
            
          </div> */}
        </div>
      </div>

      
      

      

     
      <div id="projects">
        <Sample/>

      </div>
      
    </body>
  )
}

export default App
