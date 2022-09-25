import React from "react";
import './index.css';

function FooterKz(props) {

  return (
    <div className="footer footer-kg">
      <div className="wrapper">
        <img className="footer-title footer-title-kg" src={props.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default FooterKz;
