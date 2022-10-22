import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import andrea1 from "../../../assets/works/andrea/andrea1.jpg"
import andrea_cart from "../../../assets/works/andrea/andrea_cart.jpg"
import andrea_consult from "../../../assets/works/andrea/andrea_consult.jpg"
import andrea_program from "../../../assets/works/andrea/andrea_program.jpg"
import { BiLinkExternal } from 'react-icons/bi'

const Andrea = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : ANDREA NATUROPATHIE </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={andrea1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={andrea_program}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={andrea_cart}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={andrea_consult}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Afin d'accroitre son activité de naturopathe sur Marseille, Andrea a fait appel à
                moi afin de développer sa présence sur internet et lui permettre de vendre
                ses programmes via une boutique en ligne.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js
                <br />
                → API Rest sous Node.js
                <br />
                → Realtime database sous Firebase pour les programmes.
                <br/>
                → Stripe pour les paiements.
                <br/>
                → Préprocesseur CSS Sass.
                <br/>
                → Framework CSS Bootstrap.
                <br />
                → Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences acquises </h3>
              <p>
                ...
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="https://github.com/Feliiks/andrea-naturo-website" target="_blank" rel="noreferrer"><BiLinkExternal /> Code source.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Andrea
