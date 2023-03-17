import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import stefanos1 from '../../../assets/works/stefanos/stefanos1.jpg'
import stefanos_bdd from '../../../assets/works/stefanos/stefanos_bdd.jpg'
import stefanos_admin from '../../../assets/works/stefanos/stefanos_admin.jpg'
import stefanos_pronostics
  from '../../../assets/works/stefanos/stefanos_pronostics.jpg'
import stefanos_fiverr from '../../../assets/works/stefanos/stefanos_fiverr.jpg'
import stefanos_figma from '../../../assets/works/stefanos/stefanos_figma.jpg'
import { BiLinkExternal } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'

const Stefanos = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : STEFANOS PRONOSTICS </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel autoPlay={true} stopOnHover={true} infiniteLoop={true}
                          interval={2500}>
                  <div>
                    <img src={stefanos1}/>
                  </div>
                  <div>
                    <img src={stefanos_bdd}/>
                  </div>
                  <div>
                    <img src={stefanos_admin}/>
                  </div>
                  <div>
                    <img src={stefanos_pronostics}/>
                  </div>
                  <div>
                    <img src={stefanos_fiverr}/>
                  </div>
                  <div>
                    <img src={stefanos_figma}/>
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Suivis par plus de 15 000 abonnés sur Twitter, Stefanos a voulu
                se lancer
                dans la publication de pronostics par abonnement. Afin de
                répondre à ce besoin,
                j'ai développé pour eux une application web entièrement
                fonctionnelle.
                <br/><br/>
                Grâce à celle-ci, Stefanos Pronostics a réalisé plus de 1000
                euros de vente
                la première journée ainsi qu'enregistré plus de 100
                inscriptions.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js.
                <br/>
                → API Rest sous Node.js.
                <br/>
                → Library de composants Material UI.
                <br/>
                → Tests unitaires avec JEst.
                <br/>
                → Gitlab, Gitlab CI & Docker.
                <br/>
                → Base de données MongoDB, ODM Mongoose.
                <br/>
                → Notion en tant que CMS (pronostics).
                <br/>
                → Analyse du code avec ESLint.
                <br/>
                → Préprocesseur CSS Sass.
                <br/>
                → Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences acquises </h3>
              <p>
                Travailler pour Stefanos Pronostics m'a permis pour la première
                fois
                de développer un projet attendu par une communauté et donc avec
                des
                contraintes de temps. Le projet a été developpé en trois
                semaines
                comme convenu et des réunions hebdomadaires ont été réalisées.
                <br/><br/>
                Voulant publier du contenu eux-même sur l'application, j'ai du
                réfléchir
                pour la première fois à l'intégration d'un CMS dans une
                application React
                et donc apprendre à intégrer une base de données Notion dans une
                application
                React.
                <br/><br/>
                Projet necessitant de croiser les données, un délais de
                réflexion m'a mené
                à choisir une base de données NoSQL et donc MongoDB accompagné
                de Mongoose
                en tant qu'ODM.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences du référentiel BTS validées </h3>
              <p>
                → Recenser et identifier les ressources numériques.
                <br/>
                → Exploiter des référentiels, normes et standards adoptés par le
                prestataire informatique.
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
                → Participer à la valorisation de l’image de l’organisation sur
                les médias numériques en tenant compte du cadre juridique et des
                enjeux économiques.
                <br/>
                → Référencer les services en ligne de l’organisation et mesurer
                leur visibilité.
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
              <a href="https://github.com/Feliiks/stefanos" target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Code source.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stefanos
