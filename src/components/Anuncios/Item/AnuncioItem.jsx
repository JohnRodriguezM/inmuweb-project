import Image from "../../Atoms/Image/Image";

import Slider from "react-slick";
import { anuncios } from "../helper/anuncios";

import "./item.css";
import { clippingParents } from "@popperjs/core";

export const AnuncioItem = ({ anuncio }) => {
  console.log(anuncio.img.map((el) => el));
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="anuncio-item">
      <div className="contenedor-img">
        <Slider {...settings}>
          {anuncio.img.map((el, index) => {
            return (
              <Image
                image={{
                  src: el.img,
                  alt: el.titulo,
                  height: "100%",
                  width: "100%",
                }}
              />
            );
          })}
        </Slider>{" "}
        <br />
        {/* <img src={anuncio.img} alt={anuncio.titulo} className="anuncio-img" />*/}
      </div>
      <div className="anuncio-info">
        <h4 className="anuncio-title">{anuncio.titulo}</h4>
        <p className="anuncio-description">{anuncio.descripcion}</p>
        <a href="#contacto" className="anuncio-btn">
          ¡Consúltanos ya!
        </a>
      </div>
    </div>
  );
};
