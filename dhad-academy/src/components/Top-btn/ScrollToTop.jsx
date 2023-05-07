import React, { useState, useEffect } from "react";
import "./ScrollToTop.css"

const ScrollToTop = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 340) {
              setScrollTop(true);
            } else {
              setScrollTop(false);
            }
          });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
      });
    };
   
    return (
        <>
        {scrollTop && (
            <button 
            className="backToTop btn"
            onClick={goToTop}>top
                {/* <i className="fa-solid fa-arrow-up"></i> */}
                </button>)}
        </>
            
                
    );
};
export default ScrollToTop;