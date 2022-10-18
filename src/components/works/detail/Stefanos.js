import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import stefanos1 from '../../../assets/works/stefanos/stefanos1.jpg'
import stefanos_login from '../../../assets/works/stefanos/stefanos_login.jpg'
import stefanos_admin from '../../../assets/works/stefanos/stefanos_admin.jpg'
import stefanos_pronostics from '../../../assets/works/stefanos/stefanos_pronostics.jpg'
import { BiLinkExternal } from 'react-icons/bi'

const Stefanos = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : STEFANOS PRONOSTICS </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={stefanos1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={stefanos_login}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={stefanos_admin}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={stefanos_pronostics}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Suivis par plus de 15 000 abonnés sur Twitter, Stefanos a voulu se lancer
                dans la publication de pronostics par abonnement. Afin de répondre à ce besoin,
                j'ai développé pour eux une application web entièrement fonctionnelle.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js.
                <br />
                → API Rest sous Node.js.
                <br />
                → Library de composants Material UI.
                <br/>
                → Tests unitaires avec JEst.
                <br />
                → Gitlab, Gitlab CI & Docker.
                <br />
                → Base de données MongoDB, ODM Mongoose.
                <br />
                → Notion en tant que CMS (pronostics).
                <br />
                → Analyse du code avec ESLint.
                <br />
                → Préprocesseur CSS Sass.
                <br />
                → Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Fonctionnalités </h3>
              <p>
                → Se connecter et s'inscrire (manuel ou Google).
                <br />
                → Acheter un mois d'abonnement V.I.P ou Grand Chelem.
                <br />
                → Voir les pronostics publiés.
                <br/>
                → Consulter ses informations de compte et les modifier.
                <br />
                → Admin : créer et supprimer un événement.
                <br />
                → Admin : Gérer les utilisateurs et les abonnements.
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
              <a href="https://github.com/Feliiks/stefanos" target="_blank"><BiLinkExternal /> Code source.</a>
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

export default Stefanos
