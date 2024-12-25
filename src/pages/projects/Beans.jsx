import React from 'react';
import img1 from "../../../public/portfolio assets/beans/1-1.png";
import img2 from "../../../public/portfolio assets/beans/1-2.png";
import img3 from "../../../public/portfolio assets/beans/1-3.png";
import img4 from "../../../public/portfolio assets/beans/1-4.png";
import img5 from "../../../public/portfolio assets/beans/1-5.png";
import img6 from "../../../public/portfolio assets/beans/2-1.png";
import img7 from "../../../public/portfolio assets/beans/2-2.png";
import img8 from "../../../public/portfolio assets/beans/2-3.png";
import img9 from "../../../public/portfolio assets/beans/2-4.png";
import img10 from "../../../public/portfolio assets/beans/3-1.png";

const Beans = () => {
  return (
    <body>
      <div id="beans-container">
        <img className="beans-images" src={img1} alt="" />
        <img className="beans-images" src={img2} alt="" />
        <img className="beans-images" src= {img3} alt="" />
        <img  className="beans-images"src={img4} alt="" />
        <img className="beans-images"src={img5} alt="" />
        <img className="beans-images"src={img6} alt="" />
        <img className="beans-images"src={img7} alt="" />
        <img className="beans-images"src={img8} alt="" />
        <img className="beans-images"src={img9} alt="" />
        <img className="beans-images"src={img10} alt="" />

      </div>
    </body>
  )
}

export default Beans