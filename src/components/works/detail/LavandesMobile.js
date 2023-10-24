import React, { useEffect } from "react";
import Preloader from "../../preloader";
import { Carousel } from "react-responsive-carousel";
import mobilapp_login_form from "../../../assets/works/lavandes-mobile/mobilapp_login_form.png";
import mobilapp_location_list from "../../../assets/works/lavandes-mobile/mobilapp_location_list.png";
import mobilapp_location_create from "../../../assets/works/lavandes-mobile/mobilapp_location_create.png";
import mobilapp_location_detail from "../../../assets/works/lavandes-mobile/mobilapp_location_detail.png";
import mobilapp_reservation_edit from "../../../assets/works/lavandes-mobile/mobilapp_reservation_edit.png";
import mobilapp_profile from "../../../assets/works/lavandes-mobile/mobilapp_profile.png";
import mobilapp_cdc from "../../../assets/works/lavandes-mobile/mobilapp_cdc.docx";
import mobilapp_usecase from "../../../assets/works/lavandes-mobile/mobilapp_usecase.jpg";
import mobilapp_sitemap from "../../../assets/works/lavandes-mobile/mobilapp_sitemap.jpg";
import mobilapp_bottom_modal from "../../../assets/works/lavandes-mobile/mobilapp_bottom_modal.png";
import mobilapp_architecture from "../../../assets/works/lavandes-mobile/mobilapp_architecture.png";
import { BiLinkExternal } from "react-icons/bi";

const LavandesMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : LAVANDES MOBILE APP </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-6 p-0 d-flex align-items-center mx-auto">
                <Carousel
                  autoPlay={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                  interval={2500}
                  thumbWidth={50}
                  dynamicHeight
                >
                  <div>
                    <img src={mobilapp_login_form} />
                  </div>
                  <div>
                    <img src={mobilapp_location_list} />
                  </div>
                  <div>
                    <img src={mobilapp_location_create} />
                  </div>
                  <div>
                    <img src={mobilapp_location_detail} />
                  </div>
                  <div>
                    <img src={mobilapp_reservation_edit} />
                  </div>
                  <div>
                    <img src={mobilapp_profile} />
                  </div>
                  <div>
                    <img src={mobilapp_bottom_modal} />
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
                Lavandes a modernisé son système de réservation.
                <br />
                <br />
                Il est désormais possible de réserver via le site internet.
                <br />
                Afin de faciliter la gestion du camping aux employés, le Camping
                a souhaité mettre en place une application mobile sur laquelle
                les salariés peuvent gérer les locations, les réservations ainsi
                que les utilisateurs.
                <br />
                Pour cette raison, le camping des lavandes a fait appel à moi
                afin de répondre à ce besoin, en me missionnant pour le
                développement de leur toute nouvelle application mobile.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Base de données MySQL et ORM Hibernate.
                <br />
                → API Rest Spring Boot (Architecture MVC).
                <br />
                → Interfaces sous Flutter.
                <br />
                → Gestion de versions avec GitLab.
                <br />→ Styles avec Styled Components et Material Design.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href={mobilapp_cdc} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Cahier des charges.{" "}
              </a>
              <a
                href="https://github.com/ludovic-sbr/lavandes-mobil-app"
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
                href="https://api.camping-lavandes.com/api/swagger-ui/index.html#/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal /> Lien de l'API.{" "}
              </a>
              <a href={mobilapp_usecase} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Diagramme de cas d'utilisation{" "}
              </a>
              <a href={mobilapp_sitemap} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Arborescence de l'application.{" "}
              </a>
              <a href={mobilapp_architecture} target="_blank" rel="noreferrer">
                <BiLinkExternal /> Architecture de l'application.{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LavandesMobile;
