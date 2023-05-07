import React from "react";
import "./common-section.css"

const CommonSection = (props) => {
  return (
    <section className="position-relative" 
>
      <img src={props.img} alt=""  width="100%"/>
        <h3 className="text-light text-uppercase position-absolute top-50 start-50 translate-middle text-center">•&nbsp;&nbsp;{props.title}&nbsp;&nbsp;•</h3>
    </section>
  );
};

export default CommonSection;