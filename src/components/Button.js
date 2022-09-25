import React from "react";
import '../index.css';

function Button(props) {

  return (
    <button className="button"><img src={props.imageUrl} alt="" /></button>
  );
}

export default Button;
