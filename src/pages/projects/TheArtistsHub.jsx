import React from 'react';

// importing all the assets
import cover from "../../../public/portfolio assets/artistsHub/cover-page.png";
import page1 from "../../../public/portfolio assets/artistsHub/page-1.png";
import page2 from "../../../public/portfolio assets/artistsHub/page-2.png";
import page3 from "../../../public/portfolio assets/artistsHub/page-3.png";
import page4 from "../../../public/portfolio assets/artistsHub/page-4.png";
import page5 from "../../../public/portfolio assets/artistsHub/page-5.png";
import page6 from "../../../public/portfolio assets/artistsHub/page-6.png";
import page7 from "../../../public/portfolio assets/artistsHub/page-7.png";
import page8 from "../../../public/portfolio assets/artistsHub/page-8.png";
import page9 from "../../../public/portfolio assets/artistsHub/page-9.png";
import page10 from "../../../public/portfolio assets/artistsHub/page-10.png";
import page11 from "../../../public/portfolio assets/artistsHub/page-11.png";
import page12 from "../../../public/portfolio assets/artistsHub/page-12.png";

import { Link } from 'react-router-dom';

const TheArtistsHub = () => {
  return (
    <body>
      <p className="logo">ikaiva <span>studio.</span></p>
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

      <img src={cover} alt="" className="artists-hub-images" />
      <img src={page1} alt="" className="artists-hub-images" />
      <img src={page2} alt="" className="artists-hub-images" />
      <img src={page3} alt="" className="artists-hub-images" />
      <img src={page4} alt="" className="artists-hub-images" />
      <img src={page5} alt="" className="artists-hub-images" />
      <img src={page6} alt="" className="artists-hub-images" />
      <img src={page7} alt="" className="artists-hub-images" />
      <img src={page8} alt="" className="artists-hub-images" />
      <img src={page9} alt="" className="artists-hub-images" />
      <img src={page10} alt="" className="artists-hub-images" />
      <img src={page11} alt="" className="artists-hub-images" />
      <img src={page12} alt="" className="artists-hub-images" />

      <p style={{color:"#333"}}>NEXT PROJECT</p>
      <Link to="/AuraStudio" className="nextProject">AURA STUDIO</Link>
    </body>
  )
}

export default TheArtistsHub