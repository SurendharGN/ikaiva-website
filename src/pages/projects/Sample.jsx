import React, { useEffect, useRef } from "react";

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollSpeedFactor = 0.5; // Adjust this factor for speed
      container.style.transform = `translateX(-${scrollTop * scrollSpeedFactor}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="projects-parent" >
      <div className="scroll-wrapper">
        <div className="scroll-container" ref={containerRef}>
          {[...Array(10)].map((_, index) => (
            <div className="scroll-item" key={index}>
              <h1>Item {index + 1}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
