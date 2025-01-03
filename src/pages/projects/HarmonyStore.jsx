import React from 'react'

// importing all the assets
import cover from '../../../public/portfolio assets/harmony/harmony-cover-page.png';
import page1 from '../../../public/portfolio assets/harmony/page-1.png';
import page2 from '../../../public/portfolio assets/harmony/page-2.png';
import page3 from '../../../public/portfolio assets/harmony/page-3.png';
import page4 from '../../../public/portfolio assets/harmony/page-4.png';
import page5 from '../../../public/portfolio assets/harmony/page-5.png';
import page6 from '../../../public/portfolio assets/harmony/page-6.png';
import page7 from '../../../public/portfolio assets/harmony/page-7.png';
import page8 from '../../../public/portfolio assets/harmony/page-8.png';
import page9 from '../../../public/portfolio assets/harmony/page-9.png';
import page10 from '../../../public/portfolio assets/harmony/page-10.png';
import page11 from '../../../public/portfolio assets/harmony/page-11.png';
import page12 from '../../../public/portfolio assets/harmony/page-12.png';

// importing libraries
import { Link } from 'react-router-dom';

const HarmonyStore = () => {
  return (
    <body id="harmony-container">
      <p className="logo">ikaiva <span>studio.</span></p>
      <div>
        <h1>HARMONY STORE</h1>

        <div>
          <h2>STORY</h2>
          <p> Founded in 2023, Harmony was created to bridge the gap between traditional Indian clothing and contemporary fashion, ensuring that the beauty of heritage attires is accessible to modern consumers.
</p>
        </div>
        
        <div>
          <h2>YEAR</h2>
          <p>2024</p>
        </div>
        
        <div>
          <h2>ROLE</h2>
          <p>Brand Identity</p>
        </div>
      </div>

      <img src={cover} alt="" className="harmony-images" />
      <img src={page1} alt="" className="harmony-images" />
      <img src={page2} alt="" className="harmony-images" />
      <img src={page3} alt="" className="harmony-images" />
      <img src={page4} alt="" className="harmony-images" />
      <img src={page5} alt="" className="harmony-images" />
      <img src={page6} alt="" className="harmony-images" />
      <img src={page7} alt="" className="harmony-images" />
      <img src={page8} alt="" className="harmony-images" />
      <img src={page9} alt="" className="harmony-images" />
      <img src={page10} alt="" className="harmony-images" />
      <img src={page11} alt="" className="harmony-images" /><img src={page12} alt="" className="harmony-images" />
      
      <p style={{color:"#333"}}>NEXT PROJECT</p>
      <Link to="/AmplifyMediaHouse" className="nextProject">AMPLIFY MEDIA HOUSE</Link>
    </body>
  )
}

export default HarmonyStore