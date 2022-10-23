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
              <h3> Compétences acquises </h3>
              <p>
                A l'occasion du développement de ce projet, j'ai pu mettre en pratique
                les premières compétences acquises au cours de mon apprentissage
                (atomic design, passage de React sous Typescript..).
                <br /><br />
                Prenant conscience du niveau attendu en entreprise, j'ai décidé pour
                ce projet d'aller encore plus loin au niveau de la propreté du code mais
                aussi de tester mon application ou encore d'adopter une nouvelle architecture
                pour le projet.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="https://gitlab.com/crawind-web" target="_blank" rel="noreferrer"><BiLinkExternal /> Code source.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Crawind
