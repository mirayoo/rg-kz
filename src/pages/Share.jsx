import React from "react";
import '../index.css';
import { useTranslation } from "react-i18next";

import HeroKz from '../HeroKz';

import WhatsApp from "../assets/whatsapp.png";
import Telegram from "../assets/telegram.png";
import WArrow from "../assets/w-arrow-left.png";
import TArrow from "../assets/w-arrow-right.png";

function Share(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <HeroKz imageUrl={t('header.title')} />
      <div className="choose-block share-block share-kg" id="content">
        <div className="wrapper">
          <picture className="choose-block-img share-title">
            <source media="(max-width: 767px)" srcSet={t('kgshare.mobtitle')}/>
            <img src={t('kgshare.title')}/>
          </picture>
          <picture className="choose-block-img share-subtitle">
            <source media="(max-width: 767px)" srcSet={t('kgshare.mobsubtitle')}/>
            <img src={t('kgshare.subtitle')}/>
          </picture>
          <div className="socials">
            <a className="social-link whatsapp-link" href="#">
              <img className="whatsapp-img" src={WhatsApp} alt="" />
              <img className="social-arrow-left" src={WArrow} alt="" />
            </a>
            <a className="social-link telegram-link" href="#">
              <img className="telegram-img" src={Telegram} alt="" />
              <img className="social-arrow-right" src={TArrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share;
