import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cities from '../cities-uz.json';
import OTPInput, { ResendOTP } from "otp-input-react";
import '../index.css';

import Approve from "../assets/uz-approve-ru.png";
import ArrowBlue from "../assets/arrow-blue.png";
import confirmText from "../assets/uz-phone-confirm-text-ru.png";
import confirmTextMob from "../assets/uz-phone-confirm-text-mob-ru.png";
import confirmButton from "../assets/uz-phone-confirm-button-ru.png";
import firstCheckbox from "../assets/uz-first-check-ru.png";
import secondCheckbox from "../assets/uz-second-check-ru.png";
import otpText from "../assets/uz-form-confirm-ru.png";
import cityLabel from "../assets/uz-city-label-ru.png";
import telLabel from "../assets/uz-number-label-ru.png";
import genderLabel from "../assets/uz-gender-label-ru.png";
import ageLabel from "../assets/uz-age-label-ru.png";

function Form(props) {
  const [isBlocked,setIsBlocked]=useState(false)
  const {register, handleSubmit, formState:{errors},setError,clearErrors} = useForm();
  const onSubmit = (data)=> {

  };
  const [OTP, setOTP] = useState("");

  function OptionsRender() {
    return (
      <>
        {cities.map((city, index) => (
          <>
            <option key={index.toString()}>{city.name}</option>
          </>
        ))}
      </>
    )
  }

  return (
    <div>
      <img className="form-title" src={props.formTitle} alt="" />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-city">
          <img className="input-label" src={cityLabel} alt="" />
          <select {...register("city")} >
            {OptionsRender()}
          </select>
        </div>
        <div className="form-phone">
          <img className="input-label" src={telLabel} alt="" />
          <input {...register("phone")} type="tel" placeholder="+998" />
        </div>

        <div className="form-items-left">
          <div className="form-gender">
            <img className="input-label" src={genderLabel} alt="" />
            <select className="form-gender" {...register("gender")}>
              <option>Муж</option>
              <option>Жен</option>
            </select>
          </div>

          <div className="form-age">
            <img className="input-label" src={ageLabel} alt="" />
            <select className="form-age" {...register("age")}>
              <option>18-24</option>
              <option>25-30</option>
              <option>31-35</option>
              <option>старше</option>
            </select>
          </div>
        </div>

        <div className="phone-confirm">
          <picture>
            <source media="(max-width:767px)" srcSet={confirmTextMob}/>
            <img className="phone-confirm-text" src={confirmText} alt="" />
          </picture>
          <button className="phone-confirm-button button button-red" type="submit"><img src={confirmButton} alt=""/></button>
        </div>

        <div className="confirm-code">
          <img className="confirm-code-text" src={otpText} alt="" />
          <>
            <OTPInput value={OTP} onChange={setOTP} OTPLength={4} otpType="number" disabled={false}/>
            {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
          </>
        </div>

        <div className="checkboxes-container">
          <div className="form-checkbox">
            <input className="checkbox visually-hidden" type="checkbox"/>
            <span className="checkbox-fake"></span>
            <img className="checkbox-text" src={firstCheckbox} alt=""/>
          </div>

          <div className="form-checkbox">
            <input className="checkbox visually-hidden" type="checkbox"/>
            <span className="checkbox-fake"></span>
            <img className="checkbox-text" src={secondCheckbox} alt=""/>
          </div>
        </div>

        <button className="button form-button button-arrow" type="submit">
          <img className="button-arrow-text" src={Approve} alt="" />
          <img className="button-arrow-icon" src={ArrowBlue} alt="" />
        </button>
      </form>
    </div>
  );
}

export default Form;

