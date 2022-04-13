import React from 'react'

import Preloader from "../preloader"

import SectionWelcome from './SectionWelcome'
import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="home">
        <SectionWelcome />
        <div className="section-bg container p-5">
          <SectionAbout />
          <SectionContact />
        </div>
      </div>
    </>
  )
}

export default Index