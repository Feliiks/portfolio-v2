import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import ps_login from '../../../assets/works/ps/ps_login.jpg'
import { BiLinkExternal } from 'react-icons/bi'

const Ps = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : PROCEDES SPECIAUX </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ps_login}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ps_login}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ps_login}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ps_login}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Le Service Industriel de l'Aéronautique (SIAé) a fait appel à la société
                Key Performance Consulting (KPC) afin de développer une plateforme web sur
                laquelle ses membres pourront suivre l'état de leurs procédés spéciaux.
                Alternant en deuxième année de BTS chez KPC, j'ai pu participer au développement
                de cette plateforme durant toute mon année scolaire.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Base de données PostgreSQL.
                <br />
                → API Rest Spring Boot (Clean architecture).
                <br />
                → Interfaces sous React.js avec surcouche Typescript.
                <br/>
                → Gestion de versions avec GitLab.
                <br />
                → CI/CD avec Gitlab et Docker.
                <br />
                → Styles avec Styled Components.
                <br />
                → Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Fonctionnalités </h3>
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
              <h3> Compétences associées </h3>
              <p>
                → Gérer le patrimoine informatique.
                <br />
                → Répondre aux incidents et aux demandes d'assistance et d'évolution.
                <br />
                → Travailler en mode projet.
                <br/>
                → Mettre à disposition des utilisateurs un service informatique.
                <br />
                → Organiser son développement professionnel.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="#"><BiLinkExternal /> Fiche de présentation de projet.</a>
              <br />
              <a href="#"><BiLinkExternal /> Code source.</a>
              <br />
              <a href="#"><BiLinkExternal /> Cahier des charges.</a>
              <br />
              <a href="#"><BiLinkExternal /> Schéma de base de données.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ps
