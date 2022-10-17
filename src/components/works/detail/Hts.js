import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import hts1 from "../../../assets/works/hts1.jpg"
import { BiLinkExternal } from 'react-icons/bi'

const Hts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : HACKING TIMES SQUARE </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={hts1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={hts1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={hts1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={hts1}
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
              <a href="https://gitlab.com/crawind-web" target="_blank"><BiLinkExternal /> Code source.</a>
              <br />
              <a href="#"><BiLinkExternal /> Cahier des charges.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hts
