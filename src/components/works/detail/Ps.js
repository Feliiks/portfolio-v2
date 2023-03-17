import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import ps_login from '../../../assets/works/ps/ps_login.jpg'
import ps_bdd from '../../../assets/works/ps/ps_bdd.jpg'
import ps_figma from '../../../assets/works/ps/ps_figma.jpg'
import ps_jira from '../../../assets/works/ps/ps_jira.jpg'
import { BiLinkExternal } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'
import ps_test from '../../../assets/works/ps/test.txt'

const Ps = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : PROCEDES SPECIAUX </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel autoPlay={true} stopOnHover={true} infiniteLoop={true}
                          interval={2500}>
                  <div>
                    <img src={ps_login}/>
                  </div>
                  <div>
                    <img src={ps_bdd}/>
                  </div>
                  <div>
                    <img src={ps_figma}/>
                  </div>
                  <div>
                    <img src={ps_jira}/>
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Le Service Industriel de l'Aéronautique (SIAé) a fait appel à la
                société
                Key Performance Consulting (KPC) afin de développer une
                plateforme web sur
                laquelle ses membres pourront suivre l'état de leurs procédés
                spéciaux (certificat
                délivré à un lot de pièces testées jusqu'à échec pour la
                maintenance des aéronefs).
                <br/><br/>
                Alternant en deuxième année de BTS chez KPC, j'ai pu participer
                au développement
                de cette plateforme durant toute mon année scolaire. Je suis
                notamment intervenu
                sur la partie 'interfaces'.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Base de données PostgreSQL.
                <br/>
                → API Rest Spring Boot (Clean architecture).
                <br/>
                → Interfaces sous React.js avec surcouche Typescript.
                <br/>
                → Gestion de versions avec GitLab.
                <br/>
                → CI/CD avec Gitlab et Docker.
                <br/>
                → Styles avec Styled Components et le design system de l'état
                français.
                <br/>
                → Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences acquises </h3>
              <p>
                Ce projet est le plus gros projet sur lequel j'ai travaillé ces
                deux
                dernières années. 4 développeurs rythmant leur travail en 6
                sprints de
                3 semaines, le travail en mode projet était essentiel à
                l'avancement
                du développement.
                <br/><br/>
                Ayant travaillé principalement sur la partie front mais aussi
                sur la partie
                back et accompagné de personnes ayant une plus grande expérience
                que moi, ce
                projet m'a permis de développer de nouvelles compétences mais
                aussi de revoir
                certaines notions que je pensais déjà maitriser.
                <br/><br/>
                Travailler chez KPC m'a permis de comprendre la manière dont les
                projets sont
                menés au sein d'une entreprise (répartition des tâches sur Jira,
                gestion des versions
                du code plus poussée sur GitLab, notions de CI/CD, réunions
                hebdomadaires...).
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences du référentiel BTS validées </h3>
              <p>
                → Recenser et identifier les ressources numériques.
                <br/>
                → Exploiter des référentiels, normes et standards adoptés par le
                prestataire informatique
                <br/>
                → Mettre en place et vérifier les niveaux d’habilitation
                associés à un service.
                <br/>
                → Vérifier les conditions de la continuité d’un service
                informatique.
                <br/>
                → Participer à l’évolution d’un site Web exploitant les données
                de l’organisation.
                <br/>
                → Analyser les objectifs et les modalités d’organisation d’un
                projet.
                <br/>
                → Planifier les activités.
                <br/>
                → Évaluer les indicateurs de suivi d’un projet et analyser les
                écarts.
                <br/>
                → Déployer un service.
                <br/>
                → Accompagner les utilisateurs dans la mise en place d’un
                service.
                <br/>
                → Mettre en place son environnement d’apprentissage personnel.
                <br/>
                → Gérer son identité professionnelle.
                <br/>
                → Développer son projet professionnel.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="/"><BiLinkExternal/> Attestation d'apprentissage. </a>
              <a href="https://siae-ps-frontend-staging.34.78.209.95.nip.io/"
                 target="_blank" rel="noreferrer"><BiLinkExternal/> Lien de
                l'application. </a>
              <a href="https://siae-ps-backend-staging.34.78.209.95.nip.io/"
                 target="_blank" rel="noreferrer"><BiLinkExternal/> Lien de
                l'API. </a>
              <a href={ps_bdd} target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Diagramme de classe. </a>
              <a
                href="https://www.figma.com/file/Tfcc3aNb7FCPCfm4lzmqa1/%5BPS%5DWireframe%2BHD?node-id=0-1"
                target="_blank" rel="noreferrer"><BiLinkExternal/> Maquettes.
              </a>
              <a href={ps_test} target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Résultats des tests
                unitaires de l'API. </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ps
