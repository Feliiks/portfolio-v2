import React from 'react'

import { AiFillCheckCircle } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

const SectionVeille = () => {
  return (
    <div className="row section-pricing">
      <h2> VEILLE </h2>
      <div className="row pricing-container mx-auto mt-5">
        <div className="col-xl-4 d-flex mb-5 align-items-center justify-content-center">
          <div className="pricing-card">
            <h3>Basic</h3>
            <div className="price">
              <span> $159 </span>
            </div>
            <div className="card-desc">
              <span> <AiFillCheckCircle /> Code source </span>
              <span> <AiFillCheckCircle /> Responsive Design </span>
              <span> <AiFillCheckCircle /> 1 page </span>
            </div>
            <div className="card-btn">
              <a href="https://www.fiverr.com/ludovic_sbr/a-passionate-developer-who-will-build-you-a-tailored-website" target="_blank" rel="noreferrer">
                <button> Plus d'infos <BiLinkExternal /> </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 d-flex mb-5 align-items-center justify-content-center">
          <div className="pricing-card">
            <h3>Standard</h3>
            <div className="price">
              <span> $449 </span>
            </div>
            <div className="card-desc">
              <span> <AiFillCheckCircle /> Offre "Basic" </span>
              <span> <AiFillCheckCircle /> Utilisation d'API tierces </span>
              <span> <AiFillCheckCircle /> 4 pages </span>
            </div>
            <div className="card-btn">
              <a href="https://www.fiverr.com/ludovic_sbr/a-passionate-developer-who-will-build-you-a-tailored-website" target="_blank" rel="noreferrer">
                <button> Plus d'infos <BiLinkExternal /> </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 d-flex mb-5 align-items-center justify-content-center">
          <div className="pricing-card">
            <h3>Premium</h3>
            <div className="price">
              <span> $1375 </span>
            </div>
            <div className="card-desc">
              <span> <AiFillCheckCircle /> Offre "Standard" </span>
              <span> <AiFillCheckCircle /> Database, paiements... </span>
              <span> <AiFillCheckCircle /> 10 pages </span>
            </div>
            <div className="card-btn">
              <a href="https://www.fiverr.com/ludovic_sbr/a-passionate-developer-who-will-build-you-a-tailored-website" target="_blank" rel="noreferrer">
                <button> Plus d'infos <BiLinkExternal /> </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">
        Les prix peuvent varier en fonction du besoin des clients.
        <br />
        N'hésitez pas à me contacter et demander un devis pour une offre adaptée à vos besoins.
      </p>
    </div>
  )
}

export default SectionVeille