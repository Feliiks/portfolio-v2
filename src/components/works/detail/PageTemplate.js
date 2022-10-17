import React from 'react'
import Preloader from '../../preloader'

const PageTemplate = ({ children }) => {
  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          { children }
        </div>
      </div>
    </>
  )
}

export default PageTemplate
