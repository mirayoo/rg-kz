import React from "react";
import './index.css';

import { useTranslation } from "react-i18next";
import { default as axios } from "axios";
import HeaderSecondary from "./components/HeaderSecondary";

function FirstBlockKz(props) {
  const { t, i18n } = useTranslation();
  function getRules() {
    axios.get("https://gateway.vpluse.me/v2/vkusnee/terms/1")
      .then(function(response) {
        if (i18n.language == 'ru') {
          let a= document.createElement('a');
a.target= '_blank';
a.href= response.data.data[0].file.ru;
a.click();

        } else if (i18n.language == 'uz') {
          window.open(response.data.data[0].file.uz, '_blank');
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
    <div className="hero-secondary" id="header">
      <div className="wrapper ">
        <HeaderSecondary></HeaderSecondary>
      </div>
    </div>
  );
}

export default FirstBlockKz;
