import React,{ useState, useEffect } from "react";
import '../index.css';
import { useTranslation } from "react-i18next";
import HeroKz from "../HeroKz";
import ContentKz from "../ContentKz";
import FooterKz from "../FooterKz";

function Main(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <HeroKz imageUrl={t('header.title')} />
      <ContentKz pictureUrl={t('secondBlock.textBlockMob')} imageUrl={t('secondBlock.textBlock')}/>
      <FooterKz imageUrl={t('thirdBlock.dodo')}/>
    </div>
  )
}

export default Main;
