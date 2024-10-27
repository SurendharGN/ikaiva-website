import React from 'react';
// importing all the assets
import astralisVentures from "../../../public/portfolio assets/astralisVentures/astralis-ventures.png";

// importing libraries
import { Link } from 'react-router-dom';

const AstralisVentures = () => {
  return (
    <body>
      <p className="logo">ikaiva <span>studio.</span></p>
      <div>
        <h1>ASTRALIS VENTURES</h1>

        <div>
          <h2>STORY</h2>
          <p>Astralis Ventures is an innovative venture capital firm dedicated to empowering the next generation of pioneers in space technology and frontier innovation.  </p>
          <p>It is a visionary partner for startups and entrepreneurs with bold ambitions to revolutionize space travel, satellite communications, clean energy solutions, and cutting-edge research.</p>
        </div>
        
        <div>
          <h2>YEAR</h2>
          <p>2024</p>
        </div>
        
        <div>
          <h2>ROLE</h2>
          <p>UI/UX Design, Brand Guideline</p>
        </div>
      </div>

      <img src={astralisVentures} alt="" className="artists-hub-images" />

      <p style={{color:"#333"}}>NEXT PROJECT</p>
      <Link to="/HarmonyStore" className="nextProject">HARMONY</Link>
      
    </body>
  )
}

export default AstralisVentures