import React from 'react'

import html from '../../assets/skills/html.png'
import jsx from '../../assets/skills/jsx.png'
import css from '../../assets/skills/css-3.png'
import mongodb from '../../assets/skills/mongodb.png'
import reactjs from '../../assets/skills/reactjs.png'
import javascript from '../../assets/skills/js.png'
import firebase from '../../assets/skills/firebase.png'
import sql from '../../assets/skills/sql.png'

import angular from '../../assets/skills/angular.png'
import git from '../../assets/skills/github.png'
import nodejs from '../../assets/skills/nodejs.png'
import datagrip from '../../assets/skills/datagrip.png'
import nosql from '../../assets/skills/nosql.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import typescript from '../../assets/skills/typescript.png'
import trello from '../../assets/skills/trello.png'

import prisma from '../../assets/skills/prisma.svg'
import redux from '../../assets/skills/redux.png'
import sass from '../../assets/skills/sass.png'
import mongoose from '../../assets/skills/mongoose.png'
import webstorm from '../../assets/skills/webstorm.png'
import axios from '../../assets/skills/axios.png'
import stripe from '../../assets/skills/stripe.png'
import mysql from '../../assets/skills/mysql.png'

const SectionToolbox = () => {
  return (
    <div className="row section-toolbox">
      <h2> BOITE A OUTILS </h2>
      <div className="toolbox">
        <ul className="skills-list col-12 mt-4">
          <li>
            <img src={html} alt="html"/>
            <span> Html </span>
          </li>
          <li>
            <img src={jsx} alt="jsx"/>
            <span> Jsx </span>
          </li>
          <li>
            <img src={css} alt="css"/>
            <span> Css </span>
          </li>
          <li>
            <img src={mongodb} alt="mongodb"/>
            <span> MongoDB </span>
          </li>
          <li>
            <img src={reactjs} alt="reactjs"/>
            <span> React.js </span>
          </li>
          <li>
            <img src={javascript} alt="javascript"/>
            <span> Javascript </span>
          </li>
          <li>
            <img src={firebase} alt="firebase"/>
            <span> Firebase </span>
          </li>
          <li>
            <img src={sql} alt="sql"/>
            <span> SQL </span>
          </li>
        </ul>
        <ul className="skills-list col-12">
          <li>
            <img src={angular} alt="angular"/>
            <span> Angular </span>
          </li>
          <li>
            <img src={git} alt="git"/>
            <span> Git </span>
          </li>
          <li>
            <img src={nodejs} alt="nodejs"/>
            <span> Node.js </span>
          </li>
          <li>
            <img src={datagrip} alt="datagrip"/>
            <span> DataGrip </span>
          </li>
          <li>
            <img src={nosql} alt="nosql"/>
            <span> NoSQL </span>
          </li>
          <li>
            <img src={bootstrap} alt="bootstrap"/>
            <span> Bootstrap </span>
          </li>
          <li>
            <img src={typescript} alt="typescript"/>
            <span> Typescript </span>
          </li>
          <li>
            <img src={trello} alt="trello"/>
            <span> Trello </span>
          </li>
        </ul>
        <ul className="skills-list col-12">
          <li>
            <img src={prisma} alt="prisma"/>
            <span> Prisma </span>
          </li>
          <li>
            <img src={redux} alt="redux"/>
            <span> Redux </span>
          </li>
          <li>
            <img src={sass} alt="sass"/>
            <span> Sass </span>
          </li>
          <li>
            <img src={mongoose} alt="mongoose"/>
            <span> Mongoose </span>
          </li>
          <li>
            <img src={webstorm} alt="webstorm"/>
            <span> WebStorm </span>
          </li>
          <li>
            <img src={axios} alt="axios"/>
            <span> Axios </span>
          </li>
          <li>
            <img src={stripe} alt="stripe"/>
            <span> Stripe </span>
          </li>
          <li>
            <img src={mysql} alt="mysql"/>
            <span> MySQL </span>
          </li>
        </ul>
      </div>
      <p className="mt-4">
        Je suis spécialisé dans les technologies basées sur Javascript (Angular, React, Node)
        et peu développer des applications web rapides, puissantes et scalables.
      </p>
    </div>
  )
}

export default SectionToolbox