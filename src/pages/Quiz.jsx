import React, {useState, useEffect} from "react";
import "../index.css";
import {useNavigate} from "react-router-dom";

import ListItem from "../components/ListItem";
import ScrollToButton from "../components/ScrollToButton3";

import Image1 from "../assets/kg-bottle-1.png";
import Image2 from "../assets/kg-bottle-2.png";
import Image3 from "../assets/kg-bottle-3.png";
import Image4 from "../assets/kg-bottle-4.png";
import Image5 from "../assets/kg-bottle-5.png";
import Image6 from "../assets/kg-bottle-6.png";
import { useTranslation } from "react-i18next";

import Food1 from "../assets/plov.png";
import Food2 from "../assets/besh.png";
import Food3 from "../assets/burger.png";
import Food4 from "../assets/pizza.png";
import Food5 from "../assets/sushi.png";
import Food6 from "../assets/chicken.png";
import Food7 from "../assets/pasta.png";
import Food8 from "../assets/cesar.png";
import PhoneCall from "../assets/phone-call.png";
import PhoneNumber from "../assets/3775.png";
import SwitcherKz from "../components/SwitcherKz";
import RU from "../assets/ru.png";
import { default as axios } from "axios";

function QuizKz(props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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

  const questions = [
    {
      heroImage: Food1,
      heroTitle: 'quiz.title1',
      heroSubtitle: 'quiz.subtitle1',
      options: [
        { option: <ListItem qkey={1} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={1} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={1} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={1} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={1} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={1} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={1} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={1} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food2,
      heroTitle: 'quiz.title2',
      heroSubtitle: 'quiz.subtitle2',
      options: [
        { option: <ListItem qkey={2} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={2} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={2} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={2} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={2} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={2} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={2} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={2} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food3,
      heroTitle: 'quiz.title3',
      heroSubtitle: 'quiz.subtitle3',
      options: [
        { option: <ListItem qkey={3} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={3} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={3} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={3} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={3} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={3} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={3} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={3} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food4,
      heroTitle: 'quiz.title4',
      heroSubtitle: 'quiz.subtitle4',
      options: [
        { option: <ListItem qkey={4} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={4} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={4} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={4} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={4} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={4} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={4} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={4} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food5,
      heroTitle: 'quiz.title5',
      heroSubtitle: 'quiz.subtitle5',
      options: [
        { option: <ListItem qkey={5} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={5} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={5} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={5} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={5} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={5} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={5} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={5} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food6,
      heroTitle: 'quiz.title6',
      heroSubtitle: 'quiz.subtitle6',
      options: [
        { option: <ListItem qkey={6} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={6} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={6} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={6} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={6} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={6} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={6} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={6} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food7,
      heroTitle: 'quiz.title7',
      heroSubtitle: 'quiz.subtitle7',
      options: [
        { option: <ListItem qkey={7} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={7} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={7} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={7} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={7} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={7} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={7} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={7} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food8,
      heroTitle: 'quiz.title8',
      heroSubtitle: 'quiz.subtitle8',
      options: [
        { option: <ListItem qkey={8} akey={1} title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem qkey={8} akey={3} title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem qkey={8} akey={4} title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem qkey={8} akey={5} title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem qkey={8} akey={6} title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem qkey={8} akey={2} title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem qkey={8} akey={7} title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem qkey={8} akey={8} title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/form');
    }
  };


  return (
    <div>
      <div className="hero-secondary hero-secondary-kg" id="header">
        <div className="wrapper ">
          <div className="header-nav nav-secondary">
            <a className="button button-secondary button-phone" href="tel:3775"><img className="phone-icon" src={PhoneCall} alt="" /><img className="phone-number" src={PhoneNumber} alt="" /></a>
            <button className="button-transparent" onClick={()=>{ytLink()}}></button>
            <img className="heading-secondary heading-secondary-quiz" src={t(`${questions[currentQuestion].heroTitle}`)}/>
            <img className="subheading-secondary subheading-secondary-quiz" src={t(`${questions[currentQuestion].heroSubtitle}`)}/>
            <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
            <SwitcherKz imageUrl={RU}/>
          </div>
          <img className="image-quiz" src={questions[currentQuestion].heroImage} alt="" />
        </div>
      </div>

      <div className="list-block list-block-quiz" id="content">
        <div className="wrapper list-block-inner" id="listItems">

          {questions[currentQuestion].options.map((answerOption) => (
            <div className="list-item" onClick={() => handleAnswerOptionClick(answerOption)}><ScrollToButton duration="300" toId="header">{answerOption.option}</ScrollToButton></div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default QuizKz;
