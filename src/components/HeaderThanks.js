import PhoneCall from "../assets/phone-call.png";
import PhoneNumber from "../assets/3775.png";
import SwitcherKz from "./SwitcherKz";
import RU from "../assets/ru.png";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { default as axios } from "axios";
import Comma1 from "../assets/light-comma-1.png";
import Comma2 from "../assets/light-comma-2.png";
import Comma3 from "../assets/light-comma-3.png";
import Comma4 from "../assets/light-comma-4.png";
import Comma5 from "../assets/light-comma-5.png";

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
    <div className="header-nav nav-secondary">
      <a className="button button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
      <button className="button-transparent" onClick={()=>{ytLink()}}></button>
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
  );
}

export default HeaderSecondary;
