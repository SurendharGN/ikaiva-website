import React from 'react'

// importing all the assets
import cover from '../../../public/portfolio assets/davinciMedia/davinci-cover-page.png';
import page1 from '../../../public/portfolio assets/davinciMedia/page-1.png';
import page2 from '../../../public/portfolio assets/davinciMedia/page-2.png';
import page3 from '../../../public/portfolio assets/davinciMedia/page-3.png';
import page4 from '../../../public/portfolio assets/davinciMedia/page-4.png';
import page5 from '../../../public/portfolio assets/davinciMedia/page-5.png';
import page6 from '../../../public/portfolio assets/davinciMedia/page-6.png';
import page7 from '../../../public/portfolio assets/davinciMedia/page-7.png';
import page8 from '../../../public/portfolio assets/davinciMedia/page-8.png';
import page9 from '../../../public/portfolio assets/davinciMedia/page-9.png';
import page10 from '../../../public/portfolio assets/davinciMedia/page-10.png';

// IMPORTING THE LIBRARIES
import { Link } from 'react-router-dom';

const DavinciMedia = () => {
  return (
    <body>
      <p className="logo">ikaiva <span>studio.</span></p>
      <div>
        <h1>DAVINCI MEDIA</h1>

        <div>
          <h2>STORY</h2>
          <p>Founded on the principles of innovation and creativity, DaVinci Media was born to bring cinematic storytelling to the forefront. We thrive on telling stories that are not only visually stunning but emotionally resonant. </p>

          <p>Whether it's through films, documentaries, or commercials, we aim to create content that leaves a lasting impact on the audience.</p>
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

      <img src={cover} alt="" className="davinci-images" />
      <img src={page1} alt="" className="davinci-images" />
      <img src={page2} alt="" className="davinci-images" />
      <img src={page3} alt="" className="davinci-images" />
      <img src={page4} alt="" className="davinci-images" />
      <img src={page5} alt="" className="davinci-images" />
      <img src={page6} alt="" className="davinci-images" />
      <img src={page7} alt="" className="davinci-images" />
      <img src={page8} alt="" className="davinci-images" />
      <img src={page9} alt="" className="davinci-images" />
      <img src={page10} alt="" className="davinci-images" />
      
      <p style={{color:"#333"}}>NEXT PROJECT</p>
      <Link to="/TheArtistsHub" className="nextProject">THE ARTISTS HUB</Link>
    </body>
  )
}

export default DavinciMedia