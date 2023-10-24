import React, { useEffect } from "react";
import Preloader from "../../preloader";
import lsvibes_home from "../../../assets/works/lsvibes/lsvibes_home.jpg";
import lsvibes_profile from "../../../assets/works/lsvibes/lsvibes_profile.jpg";
import lsvibes_trello from "../../../assets/works/lsvibes/lsvibes_trello.jpg";
import lsvibes_figma from "../../../assets/works/lsvibes/lsvibes_figma.jpg";

import { BiLinkExternal } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";

const Lsvibes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : LS VIBES </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel
                  autoPlay={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                  interval={2500}
                >
                  <div>
                    <img src={lsvibes_home} />
                  </div>
                  <div>
                    <img src={lsvibes_profile} />
                  </div>
                  <div>
                    <img src={lsvibes_trello} />
                  </div>
                  <div>
                    <img src={lsvibes_figma} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Contexte </h3>
              <p>
                Dans le cadre du développement du serveur de jeu Los Santos
                Vibes, j'ai développé une application web permettant aux joueurs
                de consulter leurs statistiques en jeu et aux administrateurs de
                réaliser diverses tâches. Le serveur de jeu et le site web sont
                connectés à la même base de données.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js.
                <br />
                → API Rest sous Node.js.
                <br />
                → Base de données MariaDB et Prisma ORM.
                <br />
                → Requêtes à des API tierces (FiveM).
                <br />
                → Redux pour la centralisation de l'état.
                <br />→ Trello pour la gestion du projet.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a
                href="https://github.com/ludovic-sbr/lsvibes"
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

export default Lsvibes;
