import React from 'react';

// importing the images
import cover from '../../../public/portfolio assets/amplify/amplify-cover-page.png';
import page1 from '../../../public/portfolio assets/amplify/page-1.png';
import page2 from '../../../public/portfolio assets/amplify/page-2.png';
import page3 from '../../../public/portfolio assets/amplify/page-3.png';
import page4 from '../../../public/portfolio assets/amplify/page-4.png';
import page5 from '../../../public/portfolio assets/amplify/page-5.png';
import page6 from '../../../public/portfolio assets/amplify/page-6.png';
import page7 from '../../../public/portfolio assets/amplify/page-7.png';
import page8 from '../../../public/portfolio assets/amplify/page-8.png';
import page9 from '../../../public/portfolio assets/amplify/page-9.png';


const AmplifyMediaHouse = () => {
  return (
    <body>
      <p>ikaiva <span>studio.</span></p>
      <div>
        <h1>AMPLIFY MEDIA HOUSE</h1>

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

      <img src={cover} alt="" className="amplify-images" />
      <img src={page1} alt="" className="amplify-images" />
      <img src={page2} alt="" className="amplify-images" />
      <img src={page3} alt="" className="amplify-images" />
      <img src={page4} alt="" className="amplify-images" />
      <img src={page5} alt="" className="amplify-images" />
      <img src={page6} alt="" className="amplify-images" />
      <img src={page7} alt="" className="amplify-images" />
      <img src={page8} alt="" className="amplify-images" />
      <img src={page9} alt="" className="amplify-images" />
      
    </body>
  )
}

export default AmplifyMediaHouse