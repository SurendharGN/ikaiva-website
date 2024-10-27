import React from 'react'
// importing the images
import cover from '../../../public/portfolio assets/aura/aura-cover-page.png';
import page1 from '../../../public/portfolio assets/aura/page-1.png';
import page2 from '../../../public/portfolio assets/aura/page-2.png';
import page3 from '../../../public/portfolio assets/aura/page-3.png';
import page4 from '../../../public/portfolio assets/aura/page-4.png';
import page5 from '../../../public/portfolio assets/aura/page-5.png';
import page6 from '../../../public/portfolio assets/aura/page-6.png';
import page7 from '../../../public/portfolio assets/aura/page-7.png';
import page8 from '../../../public/portfolio assets/aura/page-8.png';
import page9 from '../../../public/portfolio assets/aura/page-9.png';
import page10 from '../../../public/portfolio assets/aura/page-10.png';
import page11 from '../../../public/portfolio assets/aura/page-11.png';

// importing libraries
import { Link } from 'react-router-dom';

const AuraStudio = () => {
  return (
    <body>
      <p className="logo">ikaiva <span>studio.</span></p>
      <div>
        <h1>AURA STUDIO</h1>

        <div>
          <h2>STORY</h2>
          <p>Aura Home Interiors was born from a deep love for Persian artistry and the timeless elegance of home design. Rooted in the rich cultural heritage of Persia, Their studio seeks to bring the beauty of ancient craftsmanship into modern homes.</p>
        </div>
        
        <div>
          <h2>YEAR</h2>
          <p>2024</p>
        </div>
        
        <div>
          <h2>ROLE</h2>
          <p>Visual identity and Brand Strategy</p>
        </div>
      </div>

      <img src={cover} alt="" className="aura-images" />
      <img src={page1} alt="" className="aura-images" />
      <img src={page2} alt="" className="aura-images" />
      <img src={page3} alt="" className="aura-images" />
      <img src={page4} alt="" className="aura-images" />
      <img src={page5} alt="" className="aura-images" />
      <img src={page6} alt="" className="aura-images" />
      <img src={page7} alt="" className="aura-images" />
      <img src={page8} alt="" className="aura-images" />
      <img src={page9} alt="" className="aura-images" />
      <img src={page10} alt="" className="aura-images" />
      <img src={page11} alt="" className="aura-images" />

      <p style={{color:"#333"}}>NEXT PROJECT</p>
      <Link to="/EmberRoast" className="nextProject">EMBER ROAST</Link>
      
    </body>
  )
}

export default AuraStudio