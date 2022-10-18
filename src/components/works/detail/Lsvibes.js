import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import lsvibes1 from '../../../assets/works/lsvibes1.jpg'
import { BiLinkExternal } from 'react-icons/bi'

const Lsvibes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : LS VIBES </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto"
                     style={{ background: 'none' }}>
                  <img
                    src={lsvibes1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto"
                     style={{ background: 'none' }}>
                  <img
                    src={lsvibes1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto"
                     style={{ background: 'none' }}>
                  <img
                    src={lsvibes1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto"
                     style={{ background: 'none' }}>
                  <img
                    src={lsvibes1}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Dans le cadre du développement du serveur de jeu Los Santos
                Vibes,
                j'ai développé une application web permettant aux joueurs de
                consulter
                leurs statistiques en jeu et aux administrateurs de réaliser
                diverses
                tâches. Le serveur de jeu et le site web sont connectés à la
                même base de
                données.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js.
                <br/>
                → API Rest sous Node.js.
                <br/>
                → Base de données MariaDB et Prisma ORM.
                <br/>
                → Requêtes à des API tierces (FiveM).
                <br/>
                → Redux pour la centralisation de l'état.
                <br/>
                → Trello pour la gestion du projet.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Fonctionnalités </h3>
              <p>
                → Se connecter et s'inscrire.
                <br/>
                → Consulter ses informations de compte et les modifier.
                <br/>
                → Réaliser diverses demandes via formulaires.
                <br/>
                → Consulter le nombre de joueurs en ligne sur le serveur de jeu.
                <br/>
                → Demander un accès au serveur de jeu via formulaire.
                <br/>
                → Admin: Gérer les diverses demandes (CRUD).
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences associées </h3>
              <p>
                → ...
                <br/>
                → ...
                <br/>
                → ...
                <br/>
                → ...
                <br/>
                → ...
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="#"><BiLinkExternal/> Fiche de présentation de projet.</a>
              <br/>
              <a href="https://github.com/Feliiks/lsvibes-client"
                 target="_blank"><BiLinkExternal/> Code source.</a>
              <br/>
              <a href="#"><BiLinkExternal/> Cahier des charges.</a>
              <br/>
              <a href="#"><BiLinkExternal/> Schéma de base de données.</a>
              <br/>
              <a href="#"><BiLinkExternal/> Rapports de test.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lsvibes
