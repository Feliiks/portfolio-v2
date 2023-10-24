import React, { useEffect } from "react";
import Preloader from "../../preloader";
import ps1 from "../../../assets/works/ps/ps1.png";
import ps2 from "../../../assets/works/ps/ps2.png";
import ps3 from "../../../assets/works/ps/ps3.png";
import ps4 from "../../../assets/works/ps/ps4.png";
import ps5 from "../../../assets/works/ps/ps5.jpg";
import ps6 from "../../../assets/works/ps/ps6.jpg";
import ps7 from "../../../assets/works/ps/ps7.jpg";
import ps8 from "../../../assets/works/ps/ps8.png";
import { BiLinkExternal } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import ps_test from "../../../assets/works/ps/test.txt";
import attestation_alternance from "../../../assets/works/ps/attestation_alternance.pdf";

const Ps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : PROCEDES SPECIAUX </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel
                  autoPlay={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                  interval={2500}
                >
                  <div>
                    <img src={ps1} />
                  </div>
                  <div>
                    <img src={ps2} />
                  </div>
                  <div>
                    <img src={ps3} />
                  </div>
                  <div>
                    <img src={ps4} />
                  </div>
                  <div>
                    <img src={ps5} />
                  </div>
                  <div>
                    <img src={ps6} />
                  </div>
                  <div>
                    <img src={ps7} />
                  </div>
                  <div>
                    <img src={ps8} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Contexte </h3>
              <p>
                Le Service Industriel de l'Aéronautique (SIAé) a fait appel à la
                société Key Performance Consulting (KPC) afin de développer une
                plateforme web sur laquelle ses membres pourront suivre l'état
                de leurs procédés spéciaux (certificat délivré à un lot de
                pièces testées jusqu'à échec pour la maintenance des aéronefs).
                <br />
                <br />
                Alternant en deuxième année de BTS chez KPC, j'ai pu participer
                au développement de cette plateforme durant toute mon année
                scolaire. Je suis notamment intervenu sur la partie
                'interfaces'.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Base de données PostgreSQL.
                <br />
                → API Rest Spring Boot (Clean architecture).
                <br />
                → Interfaces sous React.js avec surcouche Typescript.
                <br />
                → Gestion de versions avec GitLab.
                <br />
                → CI/CD avec Gitlab et Docker.
                <br />
                → Styles avec Styled Components et le design system de l'état
                français.
                <br />→ Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href={attestation_alternance} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Attestation d'apprentissage.{" "}
              </a>
              <a
                href="https://siae-ps-frontend-staging.34.78.209.95.nip.io/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Lien de l'application.{" "}
              </a>
              <a
                href="https://siae-ps-backend-staging.34.78.209.95.nip.io/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Lien de l'API.{" "}
              </a>
              <a href={ps5} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Diagramme de classe.{" "}
              </a>
              <a
                href="https://www.figma.com/file/Tfcc3aNb7FCPCfm4lzmqa1/%5BPS%5DWireframe%2BHD?node-id=0-1"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Maquettes.
              </a>
              <a href={ps_test} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Résultats des tests unitaires de l'API.{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ps;
