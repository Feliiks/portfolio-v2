import React, { useEffect } from 'react'

import SectionPricing from './SectionPricing'
import Preloader from '../preloader'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="pricing">
        <div className="section-bg container">
          <SectionPricing />
        </div>
      </div>
    </>
  )
}

export default Index