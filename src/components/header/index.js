import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Logo from "../../assets/logo_allongé.png"


const Index = () => {
  const [navStatut, setNavStatut] = useState(false);
  const navbarRef = useRef()

  useEffect(() => {
    if (navStatut) {
      navbarRef.current.style.visibility = "visible";
      navbarRef.current.style.opacity = "1";
    } else {
      navbarRef.current.style.visibility = "hidden";
      navbarRef.current.style.opacity = "0";
    }
  })

  useEffect(() => {
    if (document.body.offsetWidth >= 768) {
      setNavStatut(true)
    }
  }, [setNavStatut])

  useEffect(() => {
    navbarRef.current.onclick = () => {
      if (document.body.offsetWidth <= 768) {
        setNavStatut(false)
      }
    }
  })

  return (
    <>
      <div className="header container-fluid" ref={navbarRef}>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="ls_logo" />
            </Link>
          </div>
          <ul className="navbar-nav d-flex flex-md-row flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/about"> A propos </Link>
            </li>
            <li className="nav-item me-md-5 ms-md-5 mt-3 mb-3 mt-md-0 mb-md-0">
              <Link className="nav-link" to="/works"> Travaux </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/veille"> Veille </Link>
            </li>
          </ul>
          <HashLink smooth to="/#section-contact">
            <button className="contact-btn btn btn-primary">
              Me contacter
            </button>
          </HashLink>
        </div>
      </div>
      <div className="burger" onClick={() => setNavStatut(!navStatut)}>
        <div className="line-1" />
        <div className="line-2" />
        <div className="line-3" />
      </div>
    </>
  )
}

export default Index