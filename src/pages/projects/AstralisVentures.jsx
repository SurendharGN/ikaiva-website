import React from 'react';
// importing all the assets
import astralisVentures from "../../../public/portfolio assets/astralisVentures/astralis-ventures.png";


const AstralisVentures = () => {
  return (
    <body>
      <p>ikaiva <span>studio.</span></p>
      <div>
        <h1>THE ARTIST'S HUB</h1>

        <div>
          <h2>STORY</h2>
          <p>The Artist's Hub is a global platform dedicated to showcasing and connecting diverse creators across every art form.</p>
        </div>
        
        <div>
          <h2>YEAR</h2>
          <p>2024</p>
        </div>
        
        <div>
          <h2>ROLE</h2>
          <p>High-Fidelity Wireframe, UI/UX Design, Interactive Prototype</p>
        </div>
      </div>

      <img src={astralisVentures} alt="" className="artists-hub-images" />
      
    </body>
  )
}

export default AstralisVentures