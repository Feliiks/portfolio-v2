import React from 'react'

import SectionWorks from './SectionWorks'
import Preloader from '../preloader'

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <SectionWorks />
        </div>
      </div>
    </>
  )
}

export default Index