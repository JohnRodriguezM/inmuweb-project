import React, { useState } from "react";
import MyImage from "../Atoms/Image/Image";
import "./css/Menu.css";

import logo from "/src/assets/icons/logo.png";
import { MenuItem } from "./MenuItem";

const Links = [
  {
    link: "#inicio",
    nombreItem: "Inicio",
  },
  {
    link: "#nosotros",
    nombreItem: "Nosotros",
  },
  {
    link: "#anuncios",
    nombreItem: "Anuncios",
  },
  {
    link: "#servicios",
    nombreItem: "Servicios",
  },
  {
    link: "#contacto",
    nombreItem: "Contacto",
  },
];

const myImage= {
    src: logo,
    alt: "logo",
    height: "50px",
    width: "85px",
}


const Menu = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top nav-scrolled"
      id="navbar"
    >
      <section className="container-fluid ">
        <a className="navbar-brand" href="#">
          <MyImage
            image={myImage}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            {Links.map((link, index) => {
              return (
                <MenuItem
                  key={index}
                  link={link.link}
                  nombreItem={link.nombreItem}
                  dropdown={false}
                />
              );
            })}
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Menu;
