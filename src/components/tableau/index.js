import React, { useEffect } from 'react'

import Preloader from '../preloader'
import tableau_de_synthese from '../../assets/tableau_de_synthese.pdf'

const Tableau = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="pricing">
        <div className="section-bg container">
          <div className="row section-pricing">
            <h2 className="mb-3"> TABLEAU DE SYNTHESE </h2>
            <embed src={tableau_de_synthese} width="800" height="500" type="application/pdf"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tableau
