import React from 'react'
import SectionWelcome from './SectionWelcome'

import Preloader from "../preloader"

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="home">
        <SectionWelcome />
      </div>
    </>
  )
}

export default Index