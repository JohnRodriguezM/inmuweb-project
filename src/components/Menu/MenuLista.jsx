import { MenuItem } from "./MenuItem";

export const MenuLista = () => {
    return (
      <ul className="navbar-nav">
        <MenuItem link="#inicio" nombreItem="Inicio" active />
        <MenuItem link="#nosotros" nombreItem="Nosotros" />
        <MenuItem link="#anuncios" nombreItem="Anuncios" />
        <MenuItem link="#servicios" nombreItem="Servicios" />
        <MenuItem link="#contacto" nombreItem="Contacto" />
      </ul>
    );
  };