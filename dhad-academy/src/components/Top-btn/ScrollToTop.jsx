import React, { useState, useEffect } from "react";
import "./ScrollToTop.css"

const ScrollToTop = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
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
            <div className=" ">
              <button 
            className="btn backToTop text-center rounded-3 d-inline-block"
            onClick={goToTop}>
                <i className=" p-0 fa-solid fa-arrow-up "></i>
                </button>
            </div>
            )}
        </>
            
                
    );
};
export default ScrollToTop;