import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import '../index.css';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Heading from '../assets/uz-confirm-title-ru.png';
import PhoneCall from "../assets/phone-call.png";
import PhoneNumber from "../assets/3775.png";
import Rules from "../assets/rules.png";
import SwitcherKz from "../components/SwitcherKz";
import RU from "../assets/ru.png";
import SubHeadingMob from "../assets/uz-confirm-subtitle-mob-ru.png";
import SubHeading from "../assets/uz-confirm-subtitle-ru.png";
import FormTitle from "../assets/uz-confirm-heading-ru.png";
import ArrowBlue from "../assets/arrow-blue.png";
import ImageUrl from '../assets/clap.png';
import Label from '../assets/uz-confirm-label-ru.png';
import { default as axios } from "axios";

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

function Confirm(props) {

  const [open, setOpen] = React.useState(false);
  const [errorMessage,setErrorMessage]= useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t, i18n } = useTranslation();
  const {register, formState:{errors},setError,clearErrors} = useForm();
  function getRules() {
    axios.get("https://gateway.vpluse.me/v2/vkusnee/terms/1")
      .then(function(response) {
        if (i18n.language == 'ru') {
          let a= document.createElement('a');
a.target= '_blank';
a.href= response.data.data[0].file.ru;
a.click();

        } else if (i18n.language == 'kz') {
          let a= document.createElement('a');
a.target= '_blank';
a.href= response.data.data[0].file.kz
a.click();
        }
      });
  }

  function ytLink() {

    let yt = document.createElement('a');

    if (i18n.language == 'ru') {
      yt.href = 'https://youtu.be/vK-IIqNJceE';
    } else if (i18n.language == 'kz') {
      yt.href = 'https://youtu.be/mljBZp6LP6Q';
    }
    yt.target = '_blank';
    yt.click();
  }

  const [iin,setIin] = useState();
  const [email,setEmail] = useState();


  function confirmation(){
    axios.put("https://gateway.vpluse.me/v2/vkusnee/survey/gift",{phone:localStorage.getItem("phoneNumber"),email:email,iin:iin.toString()})
      .then(function(response){
        if(response.status===200){
          let a = document.createElement('a');
          a.target = "_blank";
          a.href = response.data.data;
          a.click();

          navigate("/share");

        } else {}
      })
      .catch ((error) => {
        setErrorMessage(error.response.data.data[0].message)
        handleOpen()
      })
  }

  const navigate = useNavigate();

  return (
    <div className="hero-secondary hero-form-bg hero-form-kz">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <button className="button-transparent" onClick={()=>{ytLink()}}></button>
          <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
          <SwitcherKz imageUrl={RU}/>
        </div>
        <div className="form-hero">
          <div className="form-section-left">
            <img className="heading-secondary form-heading" src={t('hero.confirmHeading')}/>
            <img className="form-img" src={ImageUrl}/>
            <picture>
              <source media="(max-width:767px)" srcSet={t('combo.mobsubtitle')}/>
              <img className="subheading-secondary form-subheading" src={t('combo.subtitle')}/>
            </picture>
            <div className="clearfix"></div>
          </div>
          <div className="form-section-right">
            <div>
              <img className="form-title" src={t('combo.iin')} alt="" />
              <div className="form">

                <div className="confirm-input name-email combo-input">
                  <input className="redinput" value={iin}  onChange={(e)=>setIin(e.target.value)} type="text" placeholder={t('combo.iinInfo')}/>
                  {/* <button className="redbutton"><img src={t('combo.iinConfirm')} alt="" /></button> */}
                </div>
                <div className="confirm-input name-email combo-input">
                  <input className="redinput" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder={t('combo.emailInfo')}/>
                  {/* <button className="redbutton"><img src={t('combo.email')} alt="" /></button> */}
                </div>

                <img className="confirm-warning combo-warning" src={t('combo.aware')} alt="" />

                <button onClick={() => confirmation()} className="button form-button button-arrow" type="submit">
                  <img className="button-arrow-text" src={t('form.approve')} alt="" />
                  <img className="button-arrow-icon" src={ArrowBlue} alt="" />
                  <span className="button-bg-comma confirm-comma-1 button-bg-comma-1"></span>
                  <span className="button-bg-comma confirm-comma-2 button-bg-comma-2"></span>
                  <span className="button-bg-comma confirm-comma-3 button-bg-comma-3"></span>
                  <span className="button-bg-comma confirm-comma-4 button-bg-comma-4"></span>
                  <span className="button-bg-comma confirm-comma-5 button-bg-comma-5"></span>
                  <span className="button-bg-comma confirm-comma-6 button-bg-comma-6"></span>
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
  )
}

export default Confirm;
