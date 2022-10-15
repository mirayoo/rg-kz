import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import './index.css';

import HeaderPrimary from "./components/HeaderPrimary";

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

  return (
    <div className="hero-primary hero-kg" id="header">
      <div className="wrapper ">
        <HeaderPrimary imageUrl={t('header.title')} ></HeaderPrimary>

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
