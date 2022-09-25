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

function Thanks() {
  const { t, i18n } = useTranslation();

  let navigate = useNavigate();

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

  return (
    <>
      <div className="hero-secondary hero-thanks-kz">
        <div className="wrapper ">
          <div className="header-nav nav-secondary">
            <a className="button button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
            <div className="heading thanks-heading">
              <img src={t('hero.thanks')}/>
              <img className="thanks-comma thanks-comma-1" src={Comma1} alt="" />
              <img className="thanks-comma thanks-comma-2" src={Comma2} alt="" />
              <img className="thanks-comma thanks-comma-3" src={Comma3} alt="" />
              <img className="thanks-comma thanks-comma-4" src={Comma4} alt="" />
              <img className="thanks-comma thanks-comma-5" src={Comma5} alt="" />
            </div>
            <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
            <SwitcherKz imageUrl={RU}/>
          </div>

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
          <a href="#">
            <picture className="yt">
            <source media="(max-width:767px)" srcSet={yt}/>
            <img src={yt} alt="" />
            </picture>
          </a>
        </div>
      </div>
    </>
  )
}

export default Thanks;
