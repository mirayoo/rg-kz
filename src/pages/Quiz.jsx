import React, {useState} from "react";
import '../index.css';
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
    axios.get("https://staging-gateway.vpluse.me/v2/smallpromo/terms/1")
      .then(function(response) {
        if (i18n.language == 'ru') {
          window.open(response.data.data[0].file.ru, '_blank');

        } else if (i18n.language == 'kz') {
          window.open(response.data.data[0].file.kz, '_blank');
        }
      });
  }
  const questions = [
    {
      heroImage: Food1,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle1',
      options: [
        { option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food2,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle2',
      options: [
        { option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food3,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle3',
      options: [
        { option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food4,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle4',
      options: [
        {
          option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')}
                                subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')}
                                imageUrl={Image1} />
        },
        {
          option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')}
                                subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')}
                                imageUrl={Image2} />
        },
        {
          option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')}
                                subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')}
                                imageUrl={Image3} />
        },
        {
          option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')}
                                subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')}
                                imageUrl={Image4} />
        },
        {
          option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')}
                                subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')}
                                imageUrl={Image5} />
        },
        {
          option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')}
                                subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')}
                                imageUrl={Image6} />
        },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food5,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle5',
      options: [
        { option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food6,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle6',
      options: [
        { option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food7,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle7',
      options: [
        { option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
      ],
    },
    {
      heroImage: Food8,
      heroTitle: 'quiz.title',
      heroSubtitle: 'quiz.subtitle8',
      options: [
        { option: <ListItem title={t('quizProd.title1')} titleMob={t('quizProd.mobtitle1')} subTitle={t('quizProd.subtitle1')} subTitleMob={t('quizProd.mobsubtitle1')} imageUrl={Image1} /> },
        { option: <ListItem title={t('quizProd.title2')} titleMob={t('quizProd.mobtitle2')} subTitle={t('quizProd.subtitle2')} subTitleMob={t('quizProd.mobsubtitle2')} imageUrl={Image2} /> },
        { option: <ListItem title={t('quizProd.title3')} titleMob={t('quizProd.mobtitle3')} subTitle={t('quizProd.subtitle3')} subTitleMob={t('quizProd.mobsubtitle3')} imageUrl={Image3} /> },
        { option: <ListItem title={t('quizProd.title4')} titleMob={t('quizProd.mobtitle4')} subTitle={t('quizProd.subtitle4')} subTitleMob={t('quizProd.mobsubtitle4')} imageUrl={Image4} /> },
        { option: <ListItem title={t('quizProd.title5')} titleMob={t('quizProd.mobtitle5')} subTitle={t('quizProd.subtitle5')} subTitleMob={t('quizProd.mobsubtitle5')} imageUrl={Image5} /> },
        { option: <ListItem title={t('quizProd.title6')} titleMob={t('quizProd.mobtitle6')} subTitle={t('quizProd.subtitle6')} subTitleMob={t('quizProd.mobsubtitle6')} imageUrl={Image6} /> },
        { option: <ListItem title={t('quizProd.title7')} titleMob={t('quizProd.mobtitle7')} /> },
        { option: <ListItem title={t('quizProd.title8')} titleMob={t('quizProd.mobtitle8')} /> }
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
            <img className="heading-secondary heading-secondary-quiz" src={t(`${questions[currentQuestion].heroTitle}`)}/>
            <img className="subheading-secondary subheading-secondary-quiz" src={t(`${questions[currentQuestion].heroSubtitle}`)}/>
            <button onClick={() => getRules()} className="button"><img src={t('header.rules')} alt="" /></button>
            <SwitcherKz imageUrl={RU}/>
          </div>
          <img className="image-quiz" src={questions[currentQuestion].heroImage} alt="" />
        </div>
      </div>

      <div className="list-block list-block-quiz" id="content">
        <div className="wrapper list-block-inner">

          {questions[currentQuestion].options.map((answerOption) => (
            <div className="list-item" onClick={() => handleAnswerOptionClick(answerOption)}><ScrollToButton duration="300" toId="header" >{answerOption.option}</ScrollToButton></div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default QuizKz;
