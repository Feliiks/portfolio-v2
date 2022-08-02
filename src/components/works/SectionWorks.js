import React from 'react'

import { Carousel } from "react-bootstrap"

import jsx from '../../assets/skills/jsx.png'
import reactjs from '../../assets/skills/reactjs.png'
import javascript from '../../assets/skills/js.png'
import firebase from '../../assets/skills/firebase.png'
import angular from '../../assets/skills/angular.png'
import git from '../../assets/skills/github.png'
import nodejs from '../../assets/skills/nodejs.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import prisma from '../../assets/skills/prisma.svg'
import redux from '../../assets/skills/redux.png'
import sass from '../../assets/skills/sass.png'
import webstorm from '../../assets/skills/webstorm.png'
import stripe from '../../assets/skills/stripe.png'
import mysql from '../../assets/skills/mysql.png'
import mongodb from "../../assets/skills/mongodb.png"

import stefanos1 from "../../assets/works/stefanos1.jpg"
import andrea1 from "../../assets/works/andrea1.jpg"
import lsvibes1 from "../../assets/works/lsvibes1.jpg"
import scgc1 from "../../assets/works/scgc.jpg"
import hts1 from "../../assets/works/hts1.jpg"
import ffcc1 from "../../assets/works/cartejeuneffcc.jpg"

import { BiLinkExternal } from 'react-icons/bi'

const SectionWorks = () => {
  return (
    <div className="row section-works">
      <h2> TRAVAUX </h2>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> STEFANOS PRONOSTICS </h3>
            <p>
              Suivis par plus de 15 000 abonnés sur Twitter, Stefanos a voulu se lancer
              dans la publication de pronostics par abonnement. Afin de répondre à ce besoin,
              j'ai développé pour eux une application web entièrement fonctionnelle.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap"/>
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={redux} alt="redux"/>
                <span> Redux </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs"/>
                <span> Node.js </span>
              </li>
              <li>
                <img src={mongodb} alt="firebase"/>
                <span> MongoDB </span>
              </li>
              <li>
                <img src={stripe} alt="stripe"/>
                <span> Stripe </span>
              </li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/Feliiks/stefanos" target="_blank" rel="noreferrer">
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <button id="mission-report"> Mission report </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center">
          <div className="work-carousel mx-auto">
            <Carousel className="carousel" activeIndex={0}>
              <Carousel.Item className="carousel-item">
                <img
                  src={stefanos1}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>


      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> ANDREA NATUROPATHIE </h3>
            <p>
              Afin d'accroitre son activité de naturopathe sur Marseille, Andrea a fait appel à
              moi afin de développer sa présence sur internet et lui permettre de vendre
              ses programmes via une boutique en ligne.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap"/>
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={redux} alt="redux"/>
                <span> Redux </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs"/>
                <span> Node.js </span>
              </li>
              <li>
                <img src={firebase} alt="firebase"/>
                <span> Firebase </span>
              </li>
              <li>
                <img src={stripe} alt="stripe"/>
                <span> Stripe </span>
              </li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/Feliiks/andrea-naturo-website" target="_blank" rel="noreferrer">
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <button id="mission-report"> Mission report </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center">
          <div className="work-carousel mx-auto">
            <Carousel className="carousel" activeIndex={0}>
              <Carousel.Item className="carousel-item">
                <img
                  src={andrea1}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>


      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> LOS SANTOS VIBES </h3>
            <p>
              Dans le cadre du développement du serveur de jeu Los Santos Vibes,
              j'ai développé une application web permettant aux joueurs de consulter
              leurs statistiques en jeu et aux administrateurs de réaliser diverses
              tâches.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap"/>
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={redux} alt="redux"/>
                <span> Redux </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs"/>
                <span> Node.js </span>
              </li>
              <li>
                <img src={prisma} alt="prisma"/>
                <span> Prisma </span>
              </li>
              <li>
                <img src={mysql} alt="mysql"/>
                <span> MySQL </span>
              </li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/Feliiks/lsvibes-client" target="_blank" rel="noreferrer">
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <button id="mission-report"> Mission report </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center">
          <div className="work-carousel mx-auto">
            <Carousel className="carousel" activeIndex={0}>
              <Carousel.Item className="carousel-item">
                <img
                  src={lsvibes1}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>


      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> CANNABIS GROWERS CLUB </h3>
            <p>
              Afin de faire connaître leur activité, le SCGC a fait appel à moi afin
              de développeur leur site vitrine, leur permettant ainsi de présenter
              convenablement leur entreprise.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap"/>
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={sass} alt="sass"/>
                <span> Sass </span>
              </li>
              <li>
                <img src={jsx} alt="jsx"/>
                <span> Jsx </span>
              </li>
              <li>
                <img src={git} alt="git"/>
                <span> Git </span>
              </li>
              <li>
                <img src={webstorm} alt="webstorm"/>
                <span> Webstorm </span>
              </li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/Feliiks/cannabis-growers" target="_blank" rel="noreferrer">
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <button id="mission-report"> Mission report </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center">
          <div className="work-carousel mx-auto">
            <Carousel className="carousel" activeIndex={0}>
              <Carousel.Item className="carousel-item">
                <img
                  src={scgc1}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>


      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> HACKING TIMES SQUARE </h3>
            <p>
              Je suis intervenu en tant que développeur web pour l'équipe de Brain
              in a Vat afin de réaliser un site web complètement animé et immersif.
              Ce projet a été réalisé accompagné d'un web designer.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={sass} alt="sass"/>
                <span> Sass </span>
              </li>
              <li>
                <img src={javascript} alt="javascript"/>
                <span> Javascript </span>
              </li>
              <li>
                <img src={jsx} alt="jsx"/>
                <span> Jsx </span>
              </li>
              <li>
                <img src={git} alt="git"/>
                <span> Git </span>
              </li>
              <li>
                <img src={webstorm} alt="webstorm"/>
                <span> Webstorm </span>
              </li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/Feliiks/hacking-times-square" target="_blank" rel="noreferrer">
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <button id="mission-report"> Mission report </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center">
          <div className="work-carousel mx-auto">
            <Carousel className="carousel" activeIndex={0}>
              <Carousel.Item className="carousel-item">
                <img
                  src={hts1}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>


      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> FF COURSE CAMARGAISE </h3>
            <p>
              Dans le cadre de mon stage de première année de BTS, j'ai pu travailler
              sur la nouvelle fonctionnalité du site web de la Fédération française de
              Course Camargaise centrée sur la carte jeune.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={angular} alt="angular"/>
                <span> Angular </span>
              </li>
              <li>
                <img src={sass} alt="sass"/>
                <span> Sass </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs"/>
                <span> Node.js </span>
              </li>
              <li>
                <img src={prisma} alt="prisma"/>
                <span> Prisma </span>
              </li>
              <li>
                <img src={mysql} alt="mysql"/>
                <span> MySQL </span>
              </li>
              <li>
                <img src={git} alt="git"/>
                <span> Git </span>
              </li>
            </ul>
            <div className="buttons">
              <a href="https://github.com/Feliiks/carte-jeune-ffcc" target="_blank" rel="noreferrer">
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <button id="mission-report"> Mission report </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center">
          <div className="work-carousel mx-auto">
            <Carousel className="carousel" activeIndex={0}>
              <Carousel.Item className="carousel-item">
                <img
                  src={ffcc1}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWorks