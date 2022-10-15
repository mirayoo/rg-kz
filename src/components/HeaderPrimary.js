import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../index.css';

import SwitcherKz from '../components/SwitcherKz';

import PhoneCall from '../assets/phone-call.png';
import PhoneNumber from '../assets/3775.png';
import RU from '../assets/ru.png';
import { default as axios } from "axios";

function HeaderSecondary(props) {

  const { t, i18n } = useTranslation();
  const [link,setLink]=useState("")
  useEffect(()=>{
    getUrl()
  },[])
  async function getUrl(){

    await axios.get("https://gateway.vpluse.me/v2/vkusnee/terms/1")
      .then(response=> {
        if (i18n.language == 'ru') {

          setLink( response.data.data[0].file.ru)

        } else if (i18n.language == 'kz') {
          setLink(  response.data.data[0].file.ru)
        }
      });
  }
  async function getRules() {
    let windowReference = window.open();
    windowReference.location=link;
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

    <div className="header-nav">
      <a className="button button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
      <button className="button-transparent" onClick={()=>{ytLink()}}></button>
      <picture className="heading" >
        <source media="(max-width: 767px)" srcSet={t('header.mobTitle')}/>
        <img src={t('header.title')}/>
      </picture>
      <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
      <SwitcherKz imageUrl={RU}/>
    </div>
  );

}

export default HeaderSecondary;
