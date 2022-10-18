import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import solana from '../../../assets/works/solana/solana1.jpg'
import solana_about from '../../../assets/works/solana/solana_about.jpg'
import solana_team from '../../../assets/works/solana/solana_team.jpg'
import { BiLinkExternal } from 'react-icons/bi'

const Cgc = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : SOLANA </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto"
                     style={{ background: 'none' }}>
                  <img
                    src={solana}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto"
                     style={{ background: 'none' }}>
                  <img
                    src={solana_about}
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <div className="work-carousel mx-auto"
                     style={{ background: 'none' }}>
                  <img
                    src={solana_team}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Afin de faire connaître leur activité, le SCGC a fait appel à
                moi afin de développeur leur site vitrine, leur permettant ainsi
                de présenter convenablement leur entreprise.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js.
                <br/>
                → Maquettes réalisées avec Canva Pro.
                <br/>
                → Préprocesseur CSS Sass.
                <br/>
                → Framework CSS Bootstrap.
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
              <a href="https://github.com/Feliiks/cannabis-growers"
                 target="_blank" rel="noreferrer"><BiLinkExternal/> Code source.</a>
              <br/>
              <a href="#"><BiLinkExternal/> Cahier des charges.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cgc
