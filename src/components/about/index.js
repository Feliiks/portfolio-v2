import React, { useEffect } from 'react'

import SectionToolbox from './SectionToolbox'
import SectionTestimonials from './SectionTestimonials'
import Preloader from '../preloader'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="about">
        <div className="section-bg container">
          <SectionToolbox />
          <SectionTestimonials />
        </div>
      </div>
    </>
  )
}

export default Index