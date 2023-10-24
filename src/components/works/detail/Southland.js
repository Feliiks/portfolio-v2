import React, { useEffect } from "react";
import Preloader from "../../preloader";
import southland_login from "../../../assets/works/southland/sll1.png";
import southland_email_confirmation from "../../../assets/works/southland/sll2.png";
import southland_home from "../../../assets/works/southland/sll3.png";
import southland_user from "../../../assets/works/southland/sll4.png";
import { BiLinkExternal } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";

const SouthLand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : SOUTHLAND LAUNCHER </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel
                  autoPlay={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                  interval={2500}
                >
                  <div>
                    <img src={southland_login} />
                  </div>
                  <div>
                    <img src={southland_email_confirmation} />
                  </div>
                  <div>
                    <img src={southland_home} />
                  </div>
                  <div>
                    <img src={southland_user} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Contexte </h3>
              <p>
                Acceuillant plus de 200 joueurs simultanés chaque jours, il
                était temps pour le launcher SouthLand Roleplay de faire peau
                neuve. C'est la raison pour laquelle l'équipe administrative du
                serveur a fait appel à moi afin de développeur leur tout nouveau
                launcher. Plus fluide, plus puissant et plus ergonomique.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Portabilité desktop via Electron.
                <br />
                → Interfaces sous React.js.
                <br />
                → API Rest sous Node.js.
                <br />
                → Library de composants Material UI.
                <br />
                → Tests unitaires avec JEst.
                <br />
                → Gitlab, Gitlab CI & Docker.
                <br />
                → Base de données MySQL.
                <br />
                → Analyse du code avec ESLint.
                <br />
                → Préprocesseur CSS Sass.
                <br />→ Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a
                href="https://github.com/Feliiks/stefanos"
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

export default SouthLand;
