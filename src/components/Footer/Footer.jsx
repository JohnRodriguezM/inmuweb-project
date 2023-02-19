import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import "./css/Footer.css";
import logo from "/src/assets/icons/logo.png";

const icons = [
  {
    href: "https://www.facebook.com/",
    Icon: FaFacebookSquare,
  },
  {
    href: "https://twitter.com/",

    Icon: FaTwitterSquare,
  },
  {
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
];


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Inmo Web Logo" />
        </div>

        <div className="footer-location">
          <h4>Ubicación</h4>
          <p className="text-muted">Cra 26 A #4b - 67 Villavicencio</p>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p className="text-muted">Teléfono: +57 3165348955 - 3178333896</p>
        </div>
        <div className="footer-social">
          <h4>Redes sociales</h4>
          <div className="footer-social-icons">
            {icons.length > 0
              ? icons.map(({ href, Icon }) => (
                  <a href={href} key={href}>
                    <Icon className="footer-social-icon" />
                  </a>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="footer-copyright text-muted">
        <p>Copyright © Inmo Web Todos los derechos reservados</p>
        <p>
          Relizada por Inmoweb:{" "}
          <a
            href="https://www.linkedin.com/in/john-rodriguez-dev/"
            target="_blank"
          >
            CEO
          </a>
        </p>
      </div>
    </footer>
  );
};
