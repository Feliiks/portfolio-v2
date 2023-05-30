import React, { useEffect } from 'react'

import Preloader from '../preloader'
import veille_techno from '../../assets/veille_technologique.pdf'

const Veille = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="pricing">
        <div className="section-bg container">
          <div className="row section-pricing">
            <h2 className="mb-3"> VEILLE TECHNOLOGIQUE </h2>
            <h3 className="mx-auto mb-4 text-center"> Le web décentralisé </h3>
            <embed src={veille_techno} width="800" height="600"
                   type="application/pdf"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Veille
