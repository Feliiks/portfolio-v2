import React, { useEffect } from 'react'

import Preloader from '../preloader'
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
          <SectionVeille />
        </div>
      </div>
    </>
  )
}

export default Veille