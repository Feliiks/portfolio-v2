import React from 'react'
import { Link } from 'react-router-dom'

import Ludovic
  from '../../assets/245013369_580654286513012_3086812399234244729_n.jpg'

const SectionAbout = () => {
  return (
    <div className="row section-about">
      <div
        className="image col-4 d-lg-flex d-none align-items-center">
        <img src={Ludovic} alt="ludovic"/>
      </div>
      <div className="content col-12 col-lg-8">
        <h2> QUI SUIS-JE ? </h2>
        <p>
          Je m'appelle Ludovic, j'ai 21 ans, et je suis actuellement en deuxième
          année
          de BTS SIO option SLAM, en alternance dans l'entreprise Key
          Performance Consulting.
          <br/><br/>
          Passioné d'informatique, le développement est devenu une véritable
          passion pour moi. Cela
          m'a poussé à prendre la décision d'en faire mon métier et justifie mon
          choix pour cette formation.
          <br/><br/>
          Durant ma première année, que j'ai effectué en formation initiale,
          j'ai effectué quelques missions
          en tant que développeur indépendant, ce qui m'a permis d'engranger
          beaucoup de connaissances et de
          me rendre un peu plus autonome.
        </p>
        <Link to="/a-propos">
          <button className="btn"> Voir plus</button>
        </Link>
      </div>
    </div>
  )
}

export default SectionAbout
