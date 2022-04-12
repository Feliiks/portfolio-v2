import React from 'react'
import Logo from '../../assets/logo_allongé.png'
import { HashLink } from 'react-router-hash-link'

import fiverrLogo from "../../assets/fiverr_logo.png"

const Index = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container">
        <div className="row footer-top">
          <div className="lst-logo col-md-4">
            <img src={Logo} alt="logo" />
          </div>
          <div className="lst-menu d-none col-md-6 d-md-block">
            <h4> MENU </h4>
            <ul>
              <li> <HashLink className="footer-link" to="/about"> About </HashLink> </li>
              <li> <HashLink className="footer-link" to="/works"> Works </HashLink> </li>
              <li> <HashLink className="footer-link" to="/works#pricing"> Pricing </HashLink> </li>
            </ul>
          </div>
          <div className="lst-medias col-md-2">
            <a href="https://fiverr.com/ludovic_sbr" target="_blank" rel="noreferrer">
              <button className="footer-btn">
                <img src={fiverrLogo} alt="fiverr_logo" style={{height: '14px'}} />
              </button>
            </a>
          </div>
        </div>
        <div className="row footer-copyright">
          <p> © 2022 LStudio. All rights reserved. </p>
        </div>
      </div>
    </footer>
  )
}

export default Index