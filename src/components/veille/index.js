import React, { useEffect } from 'react'

import Preloader from '../preloader'

const Veille = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="pricing">
        <div className="section-bg container">
          <div className="row section-pricing">
            <h2 className="mb-3"> VEILLE TECHNOLOGIQUE </h2>
            <h3 className="mx-auto text-center"> L'importance de l'architecture dans le développement de Web APIs</h3>

            <p> ... </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Veille
