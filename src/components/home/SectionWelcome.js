import React from 'react'
import { HashLink } from 'react-router-hash-link'

const SectionWelcome = () => {
  return (
    <div className="section-welcome container">
      <div className="content">
        <h1> LUDOVIC SOBRERO </h1>
        <span> Etudiant en informatique. </span>
        <HashLink smooth to="/#section-contact">
          <button className="btn"> Me contacter</button>
        </HashLink>
      </div>
    </div>
  )
}

export default SectionWelcome