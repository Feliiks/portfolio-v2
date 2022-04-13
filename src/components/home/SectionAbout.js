import React from 'react'

import Ludovic from "../../assets/245013369_580654286513012_3086812399234244729_n.jpg"

const SectionAbout = () => {
  return (
    <div className="row section-about">
      <div className="image col-4 d-flex align-items-center justify-content-center">
        <img src={Ludovic} alt="ludovic" />
      </div>
      <div className="content col-8">
        <h2> WHO I AM ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <button className="btn"> See more </button>
      </div>
    </div>
  )
}

export default SectionAbout