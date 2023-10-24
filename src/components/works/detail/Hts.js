import React, { useEffect } from "react";
import Preloader from "../../preloader";
import hts1 from "../../../assets/works/hts/hts1.jpg";
import hts_1 from "../../../assets/works/hts/hts_1.jpg";
import hts_fiverr from "../../../assets/works/hts/hts_fiverr.jpg";
import hts_3 from "../../../assets/works/hts/hts_3.jpg";
import { BiLinkExternal } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";

const Hts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : HACKING TIMES SQUARE </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel
                  autoPlay={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                  interval={2500}
                >
                  <div>
                    <img src={hts1} />
                  </div>
                  <div>
                    <img src={hts_1} />
                  </div>
                  <div>
                    <img src={hts_fiverr} />
                  </div>
                  <div>
                    <img src={hts_3} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Contexte </h3>
              <p>
                Dans le cadre du développement de leur nouvelle activité,
                l'équipe d'Hacking Time Square, hackers éthiques, ont décidé de
                créer une landing page avec vidéo et son intégrés, qui met en
                scène un ordinateur qui vient d'être introduit.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js.
                <br />
                → Maquettes réalisées par le client avec Sketch.
                <br />→ Préprocesseur CSS Sass.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a
                href="https://github.com/Feliiks/hacking-times-square"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Code source.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hts;
