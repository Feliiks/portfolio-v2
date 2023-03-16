import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import ffcc_home from "../../../assets/works/ffcc/ffcc_home.jpg"
import ffcc_profile from "../../../assets/works/ffcc/ffcc_profile.jpg"
import ffcc_login from "../../../assets/works/ffcc/ffcc_login.jpg"
import ffcc_figma from "../../../assets/works/ffcc/ffcc_figma.jpg"
import attestation_stage from "../../../assets/works/ffcc/attestation_stage_ffcc.pdf"
import { BiLinkExternal } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'

const Ffcc = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : FF COURSE CAMARGUAISE </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel autoPlay={true} stopOnHover={true} infiniteLoop={true} interval={2500}>
                  <div>
                    <img src={ffcc_home} />
                  </div>
                  <div>
                    <img src={ffcc_profile} />
                  </div>
                  <div>
                    <img src={ffcc_login} />
                  </div>
                  <div>
                    <img src={ffcc_figma} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Dans le cadre de mon stage de première année de BTS, j'ai pu travailler
                sur la nouvelle fonctionnalité du site web de la Fédération française de
                Course Camargaise. Cette web app permet la demande et la gestion de sa carte jeune.
                Cette carte jeune est ensuite scannée à l'entrée des arênes afin de pouvoir
                bénéficier d'un tarif préférentiel.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces réalisées sous Angular.
                <br />
                → API Rest développée Node.js.
                <br />
                → Base de données MySQL & Prisma ORM.
                <br />
                → Gestion de versions avec Gitlab.
                <br />
                → Gestion de projet avec Slack.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences acquises </h3>
              <p>
                Ce projet m'a permis de développer mes compétences de travail en mode projet.
                3 développeurs sur cette application, nous avons dû mettre en place des outils
                afin de coordonner notre travail.
                <br /><br />
                En charge du développement de la partie "carte jeune" de manière totalement
                autonome (accompagné en cas de besoin), j'ai appris à présenter mon travail
                devant une équipe mais aussi à effectuer des recherches par moi-même en cas
                de difficultés.
                <br /><br />
                Ce projet m'a également permis d'utiliser pour la première fois Angular.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="https://github.com/Feliiks/carte-jeune-ffcc" target="_blank" rel="noreferrer"><BiLinkExternal /> Code source. </a>
              <br />
              <a href={attestation_stage} target="_blank" rel="noreferrer"><BiLinkExternal /> Attestation de stage. </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ffcc
