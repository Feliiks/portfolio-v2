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
          J'ai commencé le développement web en 2019 en parallèle de mes études
          et j'ai participé à plusieurs projets from-scratch. Ceux-ci m'ont permis
          d'acquérir beaucoup de compétences afin d'être polyvalent et de répondre
          à tout type de besoin.
          <br/><br/>
          Je travail avec des clients français ou non et je m'adapte rapidement,
          je suis professionnel et communique avec mes clients afin de les satisfaire
          au mieux.
          <br/><br/>
          N'hésitez pas à me contacter pour poser vos questions.
        </p>
        <Link to="/about">
          <button className="btn"> Voir plus </button>
        </Link>
      </div>
    </div>
  )
}

export default SectionAbout