import React from 'react'
import tableau_de_synthese from '../../assets/tableau_de_synthese.pdf'

const SectionBts = () => {
  return (
    <div className="row section-pricing">
      <h2> TABLEAU DE SYNTHESE </h2>

      <embed src={tableau_de_synthese} width="800" height="500" type="application/pdf"/>
    </div>
  )
}

export default SectionBts
