import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import hts1 from "../../../assets/works/hts/hts1.jpg"
import hts_1 from "../../../assets/works/hts/hts_1.jpg"
import hts_2 from "../../../assets/works/hts/hts_2.jpg"
import hts_3 from "../../../assets/works/hts/hts_3.jpg"
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
                    src={hts_1}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={hts_2}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto" style={{ background: 'none' }}>
                  <img
                    src={hts_3}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Dans le cadre du développement de leur nouvelle activité, l'équipe
                d'Hacking Time Square, hackers éthiques, ont décidé de créer une
                landing page avec vidéo et son intégrés, qui met en scène un ordinateur
                qui vient d'être introduit.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js.
                <br />
                → Maquettes réalisées avec Sketch.
                <br />
                → Préprocesseur CSS Sass.
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
              <a href="https://github.com/Feliiks/hacking-times-square" target="_blank" rel="noreferrer"><BiLinkExternal /> Code source.</a>
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
