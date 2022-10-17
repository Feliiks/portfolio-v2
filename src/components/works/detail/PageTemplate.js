import React, { useEffect } from 'react'
import Preloader from '../../preloader'

const PageTemplate = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
