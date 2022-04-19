import React from 'react'

import { AiFillCheckCircle } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

const SectionPricing = () => {
  return (
    <div className="row section-pricing">
      <h2> PRICING </h2>
      <div className="row pricing-container mx-auto mt-5">
        <div className="col-xl-4 d-flex mb-5 align-items-center justify-content-center">
          <div className="pricing-card">
            <h3>Basic</h3>
            <div className="price">
              <span> $159 </span>
            </div>
            <div className="card-desc">
              <span> <AiFillCheckCircle /> Include source code </span>
              <span> <AiFillCheckCircle /> Responsive Design </span>
              <span> <AiFillCheckCircle /> 1 page </span>
            </div>
            <div className="card-btn">
              <a href="https://www.fiverr.com/ludovic_sbr/a-passionate-developer-who-will-build-you-a-tailored-website" target="_blank" rel="noreferrer">
                <button> See more <BiLinkExternal /> </button>
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
              <span> <AiFillCheckCircle /> Basic offer features </span>
              <span> <AiFillCheckCircle /> Third-party API use </span>
              <span> <AiFillCheckCircle /> 4 pages </span>
            </div>
            <div className="card-btn">
              <a href="https://www.fiverr.com/ludovic_sbr/a-passionate-developer-who-will-build-you-a-tailored-website" target="_blank" rel="noreferrer">
                <button> See more <BiLinkExternal /> </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 d-flex mb-5 align-items-center justify-content-center">
          <div className="pricing-card">
            <h3>Premium</h3>
            <div className="price">
              <span> $2049 </span>
            </div>
            <div className="card-desc">
              <span> <AiFillCheckCircle /> Standard offer features </span>
              <span> <AiFillCheckCircle /> Database, payments... </span>
              <span> <AiFillCheckCircle /> 10 pages </span>
            </div>
            <div className="card-btn">
              <a href="https://www.fiverr.com/ludovic_sbr/a-passionate-developer-who-will-build-you-a-tailored-website" target="_blank" rel="noreferrer">
                <button> See more <BiLinkExternal /> </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionPricing