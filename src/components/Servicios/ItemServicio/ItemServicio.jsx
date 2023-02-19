import MyImage from "./../../Atoms/Image/Image";
import "../css/Servicios.css";

import { myImage } from "../utils/utils";

export const ItemServicio = ({ title, desc, img }) => (
  <div className="card">
    <MyImage image={
      {
        ...myImage,
        src: img,
        alt: title,
      }
    } />
    <div className="card-img-overlay">
      <section className="card-contenido">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </section>
    </div>
  </div>
);
