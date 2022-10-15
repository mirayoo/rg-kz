import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

import PhoneCall from "../assets/phone-call.png";
import PhoneNumber from "../assets/3775.png";
import Rules from "../assets/rules.png";
import SwitcherKz from "../components/SwitcherKz";
import RU from "../assets/ru.png";
import yt from "../assets/yt.png";
import Bull from "../assets/bull.png";
import Bottles from "../assets/kg-bottles.png";
import Comma1 from "../assets/light-comma-1.png";
import Comma2 from "../assets/light-comma-2.png";
import Comma3 from "../assets/light-comma-3.png";
import Comma4 from "../assets/light-comma-4.png";
import Comma5 from "../assets/light-comma-5.png";
import { useTranslation } from "react-i18next";
import { default as axios } from "axios";
import HeaderThanks from "../components/HeaderThanks";

function Thanks() {
  const { t, i18n } = useTranslation();

  let navigate = useNavigate();

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

  return (
    <>
      <div className="hero-secondary hero-thanks-kz">
        <div className="wrapper ">
          <HeaderThanks></HeaderThanks>

          <div className="hero-images">
            <img className="hero-right thanks-right-img thanks-right-kg" src={Bull} alt="" />

            <img className="hero-left thanks-left-img thanks-left-kg" src={Bottles} alt="" />
          </div>
        </div>
      </div>
      <div className="link-kg">
        <picture className="yt">
          <source media="(max-width:767px)" srcSet={t('thanks.titlemob')}/>

          <img className="link-text-kg" src={t('thanks.title')} alt="" />
        </picture>
        <div className="yt-block">
          <span className="pointer" onClick={()=>ytLink()}>
            <picture className="yt">
            <source media="(max-width:767px)" srcSet={yt}/>
            <img src={yt} alt="" />
            </picture>
          </span>
        </div>
      </div>
    </>
  )
}

export default Thanks;
