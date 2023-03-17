import React, { useEffect } from 'react'

import SectionWorks from './SectionWorks'
import Preloader from '../preloader'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="works">
        <div className="section-bg container">
          <SectionWorks/>
        </div>
      </div>
    </>
  )
}

export default Index