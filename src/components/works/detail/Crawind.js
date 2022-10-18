import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import orders from "../../../assets/works/crawind/orders.jpg"
import view_order from "../../../assets/works/crawind/view_order.jpg"
import { BiLinkExternal } from 'react-icons/bi'

const Crawind = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : CRAWFORD INDUSTRIES </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={orders}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={view_order}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={orders}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={view_order}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Crawford Industries est une entreprise fictive de fabrication et de
                vente de matériel de défense aux Etats-Unis. Ce projet consiste à développer un SaaS
                afin d'en faciliter la gestion des commandes, des produits ou encore
                de la comptabilité.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces réalisées sous React.js.
                <br />
                → API Rest développée sous Spring Boot.
                <br />
                → Base de données MySQL.
                <br />
                → Gitlab, Gitlab CI & Docker.
                <br />
                → Préprocesseur CSS Sass.
                <br />
                → Redux pour la centralisation de l'état.
                <br />
                → Tests unitaires avec JEst.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Fonctionnalités </h3>
              <p>
                → Voir le détail, créer, modifier et supprimer une commande.
                <br />
                → Voir le détail, créer, modifier et supprimer un produit des stocks.
                <br />
                → Créer, modifier et supprimer un client.
                <br />
                → Voir les statistiques sur la comptabilité.
                <br/>
                → Consulter la liste des produits.
                <br />
                → Se connecter, s'inscrire et se déconnecter.
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
              <a href="https://gitlab.com/crawind-web" target="_blank"><BiLinkExternal /> Code source.</a>
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

export default Crawind
