import React, { useEffect } from "react";
import Preloader from "../../preloader";
import lavandes2 from "../../../assets/works/lavandes-web/lavandes2.jpg";
import lavandes3 from "../../../assets/works/lavandes-web/lavandes3.jpg";
import lavandes4 from "../../../assets/works/lavandes-web/lavandes4.jpg";
import cdc from "../../../assets/works/lavandes-web/cdc.docx";
import lavandes5 from "../../../assets/works/lavandes-web/lavandes5.jpg";
import lavandes6 from "../../../assets/works/lavandes-web/lavandes6.jpg";
import lavandes8 from "../../../assets/works/lavandes-web/lavandes8.jpg";
import lavandes9 from "../../../assets/works/lavandes-web/lavandes9.png";
import lavandes10 from "../../../assets/works/lavandes-web/lavandes10.png";
import lavandes_test from "../../../assets/works/lavandes-web/test.txt";
import { BiLinkExternal } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";

const LavandesWeb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : LAVANDES WEB APP </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel
                  autoPlay={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                  interval={2500}
                >
                  <div>
                    <img src={lavandes2} />
                  </div>
                  <div>
                    <img src={lavandes3} />
                  </div>
                  <div>
                    <img src={lavandes4} />
                  </div>
                  <div>
                    <img src={lavandes5} />
                  </div>
                  <div>
                    <img src={lavandes6} />
                  </div>
                  <div>
                    <img src={lavandes8} />
                  </div>
                  <div>
                    <img src={lavandes9} />
                  </div>
                  <div>
                    <img src={lavandes10} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Contexte </h3>
              <p>
                Idéalement situé en bord de rivière, le camping des Lavandes
                ***** est un camping proposant des locations de mobil homes.
                <br />
                Equipé d'équipements haut de gamme et d'un service personnalisé
                : piscine couverte et chauffée, SPA, restaurant ou jeux pour
                enfants, il est aujourd'hui décoré de 5 étoiles.
                <br />
                Après de nombreux travaux sur le site physique, le camping des
                Lavandes souhaite désormais moderniser son système de
                réservation.
                <br />
                <br />
                Jusqu'à présent, la prise de réservation se fait par téléphone.
                <br />
                Avec le développement de sa clientèle et afin d'éviter une
                grande perte de temps avec la gestion des appels, le camping a
                décidé de déplacer la prise de réservation sur internet.
                <br />
                Pour cette raison, le camping des lavandes a fait appel à moi
                afin de répondre à ce besoin, en me missionnant pour le
                développement de leur tout nouveau site internet.
                <br />
                L'organisation cliente souhaite, pour le moment, que
                l'application web soit uniquement dédiée à la prise de
                réservations par la clientèle.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Base de données MySQL et ORM Hibernate.
                <br />
                → API Rest Spring Boot (Architecture MVC).
                <br />
                → Interfaces sous React.js avec surcouche Typescript.
                <br />
                → Gestion de versions avec GitLab.
                <br />
                → CI/CD avec Gitlab et Docker.
                <br />
                → Styles avec Styled Components et Material Design.
                <br />
                → Redux Toolkit et RTK Query pour les appels API.
                <br />
                → Serveur de production AWS EC2 sous Ubuntu 22.04.
                <br />
                → Stockage des fichiers avec AWS S3.
                <br />→ Gestion des paiements via Stripe API.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href={cdc} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Cahier des charges.{" "}
              </a>
              <a
                href="https://github.com/ludovic-sbr/lavandes-web-app"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Lien vers le code source du front.{" "}
              </a>
              <a
                href="https://github.com/ludovic-sbr/lavandes-api"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Lien vers le code source de l'API.{" "}
              </a>
              <a
                href="https://camping-lavandes.com/LavandesWeb.js"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Lien de l'application.{" "}
              </a>
              <a
                href="https://api.camping-lavandes.com/api/swagger-ui/index.html#/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Lien de l'API.{" "}
              </a>
              <a href={lavandes5} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Diagramme de classe.{" "}
              </a>
              <a href={lavandes6} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Diagramme de cas d'utilisation{" "}
              </a>
              <a href={lavandes10} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Arborescence de l'application.{" "}
              </a>
              <a href={lavandes_test} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Résultats des tests unitaires de l'API.{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LavandesWeb;
