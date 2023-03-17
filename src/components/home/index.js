import React, { useEffect } from 'react'

import Preloader from '../preloader'

import SectionWelcome from './SectionWelcome'
import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader/>
      <div className="home">
        <SectionWelcome/>
        <div className="section-bg container">
          <SectionAbout/>
          <SectionContact/>
        </div>
      </div>
    </>
  )
}

export default Index