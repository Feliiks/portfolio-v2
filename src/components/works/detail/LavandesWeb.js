import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import lavandes_home from '../../../assets/works/lavandes-web/lavandes1.jpg'
import lavandes_login from '../../../assets/works/lavandes-web/lavandes2.jpg'
import lavandes_locations
  from '../../../assets/works/lavandes-web/lavandes3.jpg'
import lavandes_reservations
  from '../../../assets/works/lavandes-web/lavandes4.jpg'
import lavandes_cdc from '../../../assets/works/lavandes-web/cdc.docx'
import lavandes_class from '../../../assets/works/lavandes-web/lavandes5.jpg'
import lavandes_usecase from '../../../assets/works/lavandes-web/lavandes6.jpg'
import lavandes_sitemap from '../../../assets/works/lavandes-web/sitemap.png'
import lavandes_test from '../../../assets/works/lavandes-web/test.txt'
import { BiLinkExternal } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'

const LavandesWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : LAVANDES WEB APP </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel autoPlay={true} stopOnHover={true} infiniteLoop={true}
                          interval={2500}>
                  <div>
                    <img src={lavandes_home}/>
                  </div>
                  <div>
                    <img src={lavandes_login}/>
                  </div>
                  <div>
                    <img src={lavandes_locations}/>
                  </div>
                  <div>
                    <img src={lavandes_reservations}/>
                  </div>
                  <div>
                    <img src={lavandes_usecase}/>
                  </div>
                  <div>
                    <img src={lavandes_class}/>
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Idéalement situé en bord de rivière, le camping des Lavandes
                ***** est un camping proposant des locations de mobil homes.
                <br/>
                Equipé d'équipements haut de gamme et d'un service personnalisé
                : piscine couverte et chauffée, SPA, restaurant ou jeux pour
                enfants, il est aujourd'hui décoré de 5 étoiles.
                <br/>
                Après de nombreux travaux sur le site physique, le camping des
                Lavandes souhaite désormais moderniser son système de
                réservation.
                <br/><br/>
                Jusqu'à présent, la prise de réservation se fait par téléphone.
                <br/>
                Avec le développement de sa clientèle et afin d'éviter une
                grande perte de temps avec la gestion des appels, le camping a
                décidé de déplacer la prise de réservation sur internet.
                <br/>
                Pour cette raison, le camping des lavandes a fait appel à moi
                afin de répondre à ce besoin, en me missionnant pour le
                développement de leur tout nouveau site internet.
                <br/>
                L'organisation cliente souhaite, pour le moment, que
                l'application web soit uniquement dédiée à la prise de
                réservations par la clientèle.


              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Base de données MySQL et ORM Hibernate.
                <br/>
                → API Rest Spring Boot (Architecture MVC).
                <br/>
                → Interfaces sous React.js avec surcouche Typescript.
                <br/>
                → Gestion de versions avec GitLab.
                <br/>
                → CI/CD avec Gitlab et Docker.
                <br/>
                → Styles avec Styled Components et Material Design.
                <br/>
                → Redux Toolkit et RTK Query pour les appels API.
                <br/>
                → Serveur de production AWS EC2 sous Ubuntu 22.04.
                <br/>
                → Stockage des fichiers avec AWS S3.
                <br/>
                → Gestion des paiements via Stripe API.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences acquises </h3>
              <p>
                Ce projet a demandé environ 60 jours de développement, seul. Il
                m'a permis d'intervenir sur toutes les spécificités d'une
                application web, du développement de l'API, en passant par les
                interfaces jusqu'au déploiement et la mise en place de
                l'intégration continue.
                <br/><br/>
                Etant seul, j'ai du développé l'entièreté de la partie serveur
                et des interfaces. Cela m'a demandé une grande rigueur et de
                l'organisation, l'ordre de développement des fonctionnalités
                étant très important.
                <br/><br/>
                Les diverses problématiques auxquelles j'ai du faire fasse (bugs
                dans les formules de tri des locations par date, problèmes avec
                la mise en place de la CI/CD...) m'ont poussé à chercher
                l'information et à persévérer, atouts importants dans le monde
                du développement informatique.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences du référentiel BTS validées </h3>
              <p>
                → Recenser et identifier les ressources numériques.
                <br/>
                → Mettre en place et vérifier les niveaux d’habilitation
                associés à un service.
                <br/>
                → Vérifier les conditions de la continuité d’un service
                informatique.
                <br/>
                → Collecter, suivre et orienter des demandes.
                <br/>
                → Traiter des demandes concernant les applications.
                <br/>
                → Participer à la valorisation de l’image de l’organisation sur
                les médias numériques en tenant compte du cadre juridique et des
                enjeux économiques.
                <br/>
                → Référencer les services en ligne de l’organisation et mesurer
                leur visibilité..
                <br/>
                → Participer à l’évolution d’un site Web exploitant les données
                de l’organisation.
                <br/>
                → Réaliser les tests d’intégration et d’acceptation d’un
                service.
                <br/>
                → Déployer un service.
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
              <a href={lavandes_cdc} target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Cahier des charges. </a>
              <a href="https://github.com/ludovic-sbr/lavandes-web-app"
                 target="_blank" rel="noreferrer"><BiLinkExternal/> Lien vers le
                code source du front. </a>
              <a href="https://github.com/ludovic-sbr/lavandes-api"
                 target="_blank" rel="noreferrer"><BiLinkExternal/> Lien vers le
                code source de l'API. </a>
              <a href="https://camping-lavandes.com/LavandesWeb.js"
                 target="_blank" rel="noreferrer"><BiLinkExternal/> Lien de
                l'application. </a>
              <a
                href="https://api.camping-lavandes.com/api/swagger-ui/index.html#/"
                target="_blank" rel="noreferrer"><BiLinkExternal/> Lien de
                l'API. </a>
              <a href={lavandes_class} target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Diagramme de classe. </a>
              <a href={lavandes_usecase} target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Diagramme de cas
                d'utilisation </a>
              <a href={lavandes_sitemap} target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Arborescence de
                l'application. </a>
              <a href={lavandes_test} target="_blank"
                 rel="noreferrer"><BiLinkExternal/> Résultats des tests
                unitaires de l'API. </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LavandesWeb
