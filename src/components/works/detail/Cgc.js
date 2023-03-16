import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import solana from '../../../assets/works/solana/solana1.jpg'
import solana_about from '../../../assets/works/solana/solana_about.jpg'
import solana_team from '../../../assets/works/solana/solana_team.jpg'
import solana_fiverr from '../../../assets/works/solana/solana_fiverr.jpg'
import { BiLinkExternal } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'

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
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel>
                  <div>
                    <img src={solana} />
                  </div>
                  <div>
                    <img src={solana_about} />
                  </div>
                  <div>
                    <img src={solana_team} />
                  </div>
                  <div>
                    <img src={solana_fiverr} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Compétences acquises </h3>
              <p>
                Lors de ce projet et pour la première fois, j'ai du créer, à la demande
                du client, différentes maquettes des interfaces. J'ai donc appris à
                utiliser Canva Pro mais aussi à adapter mes créations à la demande du client.
                <br /><br />
                Ce projet a impliqué beaucoup de communication et notamment avec des
                personnes anglophones.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="https://github.com/Feliiks/cannabis-growers"
                 target="_blank" rel="noreferrer"><BiLinkExternal/> Code source.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cgc
