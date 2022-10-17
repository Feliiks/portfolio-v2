import React, { useEffect } from 'react'

import Preloader from '../preloader'
import SectionBts from './SectionBts'
import SectionVeille from './SectionVeille'

const Veille = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="pricing">
        <div className="section-bg container">
          <SectionBts />
          <SectionVeille />
        </div>
      </div>
    </>
  )
}

export default Veille
