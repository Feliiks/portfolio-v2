import React from 'react'
import { Link } from 'react-router-dom'

import Ludovic
  from '../../assets/245013369_580654286513012_3086812399234244729_n.jpg'

const SectionAbout = () => {
  return (
    <div className="row section-about">
      <div
        className="image col-4 d-lg-flex d-none align-items-center">
        <img src={Ludovic} alt="ludovic"/>
      </div>
      <div className="content col-12 col-lg-8">
        <h2> WHO I AM ?</h2>
        <p>
          I started web development in early 2019 alongside my studies and I
          have participated in many projects from-scratch. They allowed me to
          acquire many skills in order to be versatile and respond to all types
          of needs.
          <br/><br/>
          I work with clients all over the globe and I am responsive,
          professional and communicate with my clients to their best
          satisfaction.
          <br/><br/>
          Leave me a message to ask any question.
        </p>
        <Link to="/about">
          <button className="btn"> See more </button>
        </Link>
      </div>
    </div>
  )
}

export default SectionAbout