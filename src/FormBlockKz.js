import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useTranslation } from "react-i18next";
import './index.css';
import SwitcherKz from './components/SwitcherKz';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/1309.png';
import RU from './assets/ru.png';
import ArrowBlue from "./assets/arrow-blue.png";

const axios = require('axios').default;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function FormBlockKz(props) {
  const [open, setOpen] = React.useState(false);
  const [errorMessage,setErrorMessage]= useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t, i18n } = useTranslation();
  const PhoneMask = "+000000000000";
  function getRules() {
    axios.get("https://staging-gateway.vpluse.me/v2/smallpromo/terms/1")
      .then(function(response) {
        if (i18n.language == 'ru') {
          window.open(response.data.data[0].file.ru, '_blank');

        } else if (i18n.language == 'kz') {
          window.open(response.data.data[0].file.kz, '_blank');
        }
      });
  }
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const [cities,setCities]= useState([])
  const [city,setCity ]=useState(6)
  const [isCodeSented,setCodeSented]=useState(false)
  const [code,setCode]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [age,setAge]=useState("18-24")
  const [gender,setGender]=useState("1")
  function signUp(){
    axios.post("https://staging-gateway.vpluse.me/v2/client/action/vkusnee/phone-sign-up",{phone:localStorage.getItem("phoneNumber",phoneNumber),age:age,gender:gender,cityId:parseInt(city),countryId:1})
      .then(function(response){
        if(response.status===204){
          setCodeSented(true)
        }
      })
      .catch ((error) => {
        setErrorMessage(error.response.data.data[0].message)
        handleOpen()
      })
  }
  function confirmation(){
    axios.post("https://staging-gateway.vpluse.me/v2/client/action/vkusnee/phone-sign-up-confirm",{phone:phoneNumber,sms_password:OTP})
      .then(function(response){
        if(response.status===204){
          setCodeSented(true);

          function checkGift(){
            axios.post("https://staging-gateway.vpluse.me/v2/vkusnee/survey",{user_name:phoneNumber.toString(),items:[
                {
                  "question_id": 1,
                  "answer_id": 1
                },
                {
                  "question_id": 2,
                  "answer_id": 1
                },
                {
                  "question_id": 3,
                  "answer_id": 1
                },
                {
                  "question_id": 4,
                  "answer_id": 1
                },
                {
                  "question_id": 5,
                  "answer_id": 1
                },
                {
                  "question_id": 6,
                  "answer_id": 1
                },
                {
                  "question_id": 7,
                  "answer_id": 1
                },
                {
                  "question_id": 8,
                  "answer_id": 1
                }
              ]})
              .then(function(response){
                let validate = Object.keys(response.data);
                if (validate.length == 0) {
                  navigate("/thanks");
                } else {
                  navigate("/confirm");
                }
              });
          };
          checkGift();
        }
      })
      .catch ((error) => {
        setErrorMessage(error.response.data.data[0].message)
        handleOpen()
      })
  }

  useEffect( ()=>{
    localStorage.setItem("phoneNumber",phoneNumber)
  })
  useEffect(()=>{

    axios.get("https://staging-gateway.vpluse.me/v2/vkusnee/cities/1")
      .then(function(response){
        setCities(response.data.data.items)
      })
  },[])

  useEffect(()=>{
    localStorage.setItem("phoneNumber",phoneNumber);
  },[phoneNumber])

  function OptionsRender() {
    if (i18n.language == 'ru') {
      return (
        <>
          {cities.map((city) => (
            <>
              <option value={city.id}>{city.name_ru}</option>
            </>
          ))}
        </>
      )} else if (i18n.language == "kz") {
      return (
        <>
          {cities.map((city) => (
            <>
              <option value={city.id}>{city.name_ua}</option>
            </>
          ))}
        </>
      )}
  }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   navigate('../thanks');
  // };

  return (
    <div className={props.heroBg}>
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:1309"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
          <SwitcherKz imageUrl={RU}/>
        </div>
        <div className="form-hero">
          <div className="form-section-left">
            <img className="heading-secondary form-heading" src={t('hero.formTitle')}/>
            <img className="form-img" src={props.imageUrl}/>
            <picture>
              <source media="(max-width:767px)" srcSet={t('hero.formSubtitleMob')}/>
              <img className="subheading-secondary form-subheading" src={t('hero.formSubtitle')}/>
            </picture>
            <div className="clearfix"></div>
          </div>
          <div className="form-section-right">
            <div>
              <img className="form-title" src={t('form.formTitle')} alt="" />
              <div className="form">

                <div className="form-city">
                  <img className="input-label" src={t('form.city')} alt="" />
                  <select value={city} onChange={(e)=>setCity(e.target.value)}>
                    {OptionsRender()}
                  </select>
                </div>
                <div className="form-phone">
                  <img className="input-label" src={t('form.number')} alt="" />

                  <IMaskInput

                    className="form-control"
                    mask={PhoneMask}
                    type="tel"
                    value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                    placeholder="+7"
                  />
                </div>

                <div className="form-items-left">
                  <div className="form-gender">
                    <img className="input-label" src={t('form.gender')} alt="" />
                    <select value={gender} onChange={(e)=>setGender(e.target.value)} className="form-gender">
                      <option value={"1"}>{t('form.male')}</option>
                      <option value={"2"}>{t('form.female')}</option>
                    </select>
                  </div>

                  <div className="form-age">
                    <img className="input-label" src={t('form.age')} alt="" />
                    <select value={age} onChange={(e)=>setAge(e.target.value)} className="form-age">
                      <option>18-24</option>
                      <option>25-30</option>
                      <option>31-35</option>
                      <option>{t('form.older')}</option>
                    </select>
                  </div>
                </div>
                {!isCodeSented &&
                  <div className="phone-confirm">
                    <picture>
                      <source media="(max-width:767px)" srcSet={t('form.phoneConfirmMob')} />
                      <img className="phone-confirm-text" src={t('form.phoneConfirm')} alt="" />
                    </picture>
                    <button onClick={() => signUp()} className="phone-confirm-button button button-red"><img
                      src={t('form.formConfirm')} alt="" /></button>
                  </div>
                }
                <div className="confirm-code">
                  <img className="confirm-code-text" src={t('form.otpForm')} alt="" />
                  <>
                    <OTPInput value={OTP} onChange={setOTP} OTPLength={4} otpType="number" disabled={false}/>
                    {/*<ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                  </>
                </div>

                <div className="checkboxes-container">
                  <div className="form-checkbox">
                    <input className="checkbox visually-hidden" type="checkbox" required/>
                    <span className="checkbox-fake"></span>
                    <img className="checkbox-text" src={t('form.firstCheck')} alt=""/>
                  </div>

                  <div className="form-checkbox">
                    <input className="checkbox visually-hidden" type="checkbox" required/>
                    <span className="checkbox-fake"></span>
                    <img className="checkbox-text" src={t('form.secondCheck')} alt=""/>
                  </div>
                </div>

                <button className="button form-button button-arrow" onClick={()=>confirmation()}>
                  <img className="button-arrow-text" src={t('form.approve')} alt="" />
                  <img className="button-arrow-icon" src={ArrowBlue} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {errorMessage}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default FormBlockKz;
