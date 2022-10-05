import React from "react";
import './index.css';

import SwitcherKz from './components/SwitcherKz';

import PhoneCall from './assets/phone-call.png';
import PhoneNumber from './assets/3775.png';
import RU from './assets/ru.png';
import { useTranslation } from "react-i18next";
import { default as axios } from "axios";

function FirstBlockKz(props) {
  const { t, i18n } = useTranslation();
  function getRules() {
    axios.get("https://gateway.vpluse.me/v2/vkusnee/terms/1")
      .then(function(response) {
        if (i18n.language == 'ru') {
          window.location.href=response.data.data[0].file.ru;

        } else if (i18n.language == 'uz') {
          window.open(response.data.data[0].file.uz, '_blank');
        }
      });
  }
  return (
    <div className="hero-secondary" id="header">
      <div className="wrapper ">
        <div className="header-nav nav-secondary">
          <a className="button button-secondary button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
          <img className="heading-secondary" src={props.headingUrl}/>
          <img className="subheading-secondary" src={props.subheadingUrl}/>
          <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
          <SwitcherKz imageUrl={RU}/>
        </div>
      </div>
    </div>
  );
}

export default FirstBlockKz;
