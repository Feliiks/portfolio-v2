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

import andrea1 from "../../assets/works/andrea1.jpg"
import lsvibes1 from "../../assets/works/lsvibes1.jpg"
import scgc1 from "../../assets/works/scgc.jpg"
import hts1 from "../../assets/works/hts1.jpg"
import ffcc1 from "../../assets/works/cartejeuneffcc.jpg"

import { BiLinkExternal } from 'react-icons/bi'

const SectionWorks = () => {
  return (
    <div className="row section-works">
      <h2> MY WORKS </h2>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> ANDREA NATUROPATHIE </h3>
            <p>
              La fermentation est un processus métabolique qui convertit le sucre
              en acides et en gaz. Il survient dans les levures et les bactéries,
              ainsi que dans les cellules présentant un manque d'oxygène dans les
              muscles.
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
                  View GitHub repository <BiLinkExternal />
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
              La fermentation est un processus métabolique qui convertit le sucre
              en acides et en gaz. Il survient dans les levures et les bactéries,
              ainsi que dans les cellules présentant un manque d'oxygène dans les
              muscles.
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
                  View GitHub repository <BiLinkExternal />
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
              La fermentation est un processus métabolique qui convertit le sucre
              en acides et en gaz. Il survient dans les levures et les bactéries,
              ainsi que dans les cellules présentant un manque d'oxygène dans les
              muscles.
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
                  View GitHub repository <BiLinkExternal />
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
              La fermentation est un processus métabolique qui convertit le sucre
              en acides et en gaz. Il survient dans les levures et les bactéries,
              ainsi que dans les cellules présentant un manque d'oxygène dans les
              muscles.
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
                  View GitHub repository <BiLinkExternal />
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
            <h3> CARTE JEUNE FFCC </h3>
            <p>
              La fermentation est un processus métabolique qui convertit le sucre
              en acides et en gaz. Il survient dans les levures et les bactéries,
              ainsi que dans les cellules présentant un manque d'oxygène dans les
              muscles.
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
                  View GitHub repository <BiLinkExternal />
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