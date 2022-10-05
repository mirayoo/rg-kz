import React from "react";
import { useTranslation } from 'react-i18next';
import './index.css';

import SwitcherKz from './components/SwitcherKz';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/3775.png';
import RU from './assets/ru.png';
import Bottles from './assets/bottles-2.png';
import BottlesMob from './assets/bottles-mob-2.png';
import Plov from './assets/plov.png';
import Burger from './assets/burger.png';
import PlovMob from './assets/plov.png';
import BurgerMob from './assets/burger.png';
import ArrowLeft from './assets/arrow-left.png';
import ArrowRight from './assets/arrow-right.png';
import { default as axios } from "axios";

function HeroKz(props) {
  const { t, i18n } = useTranslation();

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
          a.href= response.data.data[0].file.kz;
          a.click();
        }
      });
  }

  return (
    <div className="hero-primary hero-kg" id="header">
      <div className="wrapper ">
        <div className="header-nav">
          <a className="button button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <picture className="heading" >
            <source media="(max-width: 767px)" srcSet={t('header.mobTitle')}/>
            <img src={t('header.title')}/>
          </picture>
          <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
          <SwitcherKz imageUrl={RU}/>
        </div>

        <div className="hero-images-kg">
          <picture className="hero-left-kg" >
            <source media="(max-width: 767px)" srcSet={PlovMob}/>
            <img src={Plov} alt="" />
          </picture>
          <img className="hero-arrow-right-kg" src={ArrowRight} alt="" />

          <picture className="hero-center-kg">
            <source media="(max-width: 767px)" srcSet={BottlesMob}/>
            <img src={Bottles} alt="" />
          </picture>

          <img className="hero-arrow-left-kg" src={ArrowLeft} alt="" />
          <picture className="hero-right-kg">
            <source media="(max-width: 767px)" srcSet={BurgerMob}/>
            <img src={Burger} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default HeroKz;
