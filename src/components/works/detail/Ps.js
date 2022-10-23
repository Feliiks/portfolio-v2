import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import ps_login from '../../../assets/works/ps/ps_login.jpg'
import ps_bdd from '../../../assets/works/ps/ps_bdd.jpg'
import ps_figma from '../../../assets/works/ps/ps_figma.jpg'
import ps_jira from '../../../assets/works/ps/ps_jira.jpg'
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
                    src={ps_bdd}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ps_figma}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={ps_jira}
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
                laquelle ses membres pourront suivre l'état de leurs procédés spéciaux (certificat
                délivré à un lot de pièces testées jusqu'à échec pour la maintenance des aéronefs).
                <br /><br />
                Alternant en deuxième année de BTS chez KPC, j'ai pu participer au développement
                de cette plateforme durant toute mon année scolaire.
                <br /><br />
                Projet à l'initiative de l'état français, le code, les schémas de base de données,
                le cahier des charges et toutes ressources associées au projet sont confidentielles.
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
              <h3> Compétences acquises </h3>
              <p>
                Ce projet est le plus gros projet sur lequel j'ai travaillé ces deux
                dernières années. 4 développeurs rythmant leur travail en 6 sprints de
                3 semaines, le travail en mode projet était essentiel à l'avancement
                du développement.
                <br /><br />
                Ayant travaillé principalement sur la partie front mais aussi sur la partie
                back et accompagné de personnes ayant beaucoup plus d'expérience que moi, ce
                projet m'a permis de développer de nouvelles compétences mais aussi de revoir
                certaines notions que je pensais déjà maitriser.
                <br /><br />
                Travailler chez KPC m'a permis de comprendre la manière dont les projets sont
                menés au sein d'une entreprise (répartition des tâches sur Jira, gestion des versions
                du code plus poussée sur GitLab, notions de CI/CD, réunions hebdomadaires...).
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="/"><BiLinkExternal /> Attestation d'apprentissage. </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ps
