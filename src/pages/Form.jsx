import React from "react";
import '../index.css';

import FormBlockKz from '../FormBlockKz';

import ImageUrl from '../assets/thumbs-up.png';

function Auth(props) {
  return (
    <div>
      <FormBlockKz imageUrl={ImageUrl} heroBg="hero-secondary hero-form-kz"/>
    </div>
  )
}

export default Auth;
