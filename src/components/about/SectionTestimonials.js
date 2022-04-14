import React from 'react'

import img
  from '../../assets/245013369_580654286513012_3086812399234244729_n.jpg'

import { AiFillStar } from 'react-icons/ai'

const SectionTestimonials = () => {
  return (
    <div className="row section-testimonials">
      <h2> TESTIMONIALS </h2>
      <div className="row testimonials mt-4">
        <div className="col-xl-4 col-lg-6 mx-auto mb-5 mb-xl-0">
          <div className="testimonials-item">
            <img src={img} alt="johnson"/>
            <div className="bg"/>
            <p>
              Le prestataire est très professionnel et disponible ! Je
              recommande à 1000% ce profil.
            </p>
            <div className="desc">
              <h4> ANDREA </h4>
              <span>
                Naturopathe
              </span>
            </div>
          </div>
          <div className="stars mt-2">
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 mx-auto mb-5 mb-xl-0">
          <div className="testimonials-item">
            <img src={img} alt="johnson"/>
            <div className="bg"/>
            <p>
              Très professionnel, communication parfaite et très à l'écoute du
              client.
            </p>
            <div className="desc">
              <h4> JOHNSON </h4>
              <span>
                SCGC Founder
              </span>
            </div>
          </div>
          <div className="stars mt-2">
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 mx-auto">
          <div className="testimonials-item">
            <img src={img} alt="johnson"/>
            <div className="bg"/>
            <p>
              J'ai été impréssionnée par la façon de travailler de
              Ludovic qui a achevé le travail plus vite que prévu.
            </p>
            <div className="desc">
              <h4> Anissa </h4>
              <span>
                Developer
              </span>
            </div>
          </div>
          <div className="stars mt-2">
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
            <AiFillStar size={25} color="#40E0D0"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTestimonials