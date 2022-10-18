import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import ffcc1 from "../../../assets/works/cartejeuneffcc.jpg"
import { BiLinkExternal } from 'react-icons/bi'

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
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ffcc1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ffcc1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ffcc1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ffcc1}
                    alt="First slide"
                  />
                </div>
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
              <h3> Fonctionnalités </h3>
              <p>
                → Se connecter et s'inscrire.
                <br />
                → Demander une nouvelle carte jeune.
                <br />
                → Consulter sa carte jeune.
                <br/>
                → Télécharger sa carte jeune.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences associées </h3>
              <p>
                → ...
                <br />
                → ...
                <br />
                → ...
                <br/>
                → ...
                <br />
                → ...
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="#"><BiLinkExternal /> Fiche de présentation de projet.</a>
              <br />
              <a href="https://github.com/Feliiks/carte-jeune-ffcc" target="_blank"><BiLinkExternal /> Code source.</a>
              <br />
              <a href="#"><BiLinkExternal /> Cahier des charges.</a>
              <br />
              <a href="#"><BiLinkExternal /> Schéma de base de données.</a>
              <br />
              <a href="#"><BiLinkExternal /> Rapports de test.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ffcc
