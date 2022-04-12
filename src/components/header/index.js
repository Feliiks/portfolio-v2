import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../assets/logo_allongé.png"


const Index = () => {
  return (
    <div className="header container-fluid">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="ls_logo" />
          </Link>
        </div>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <Link className="nav-link" to="/about"> About </Link>
          </li>
          <li className="nav-item me-5 ms-5">
            <Link className="nav-link" to="/works"> Works </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/works#pricing"> Pricing </Link>
          </li>
        </ul>
        <button className="contact-btn btn btn-primary">
          Contact me
        </button>
      </div>
    </div>
  )
}

export default Index