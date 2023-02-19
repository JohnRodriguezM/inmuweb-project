import React from 'react'
import { Footer } from '../Footer/Footer'
import Inicio from '../Inicio/Inicio'
import Menu from '../Menu/Menu'
import Nosotros from '../Nosotros/Nosotros'
import { Servicios } from '../Servicios/Servicios'
import { Anuncios } from '../Anuncios/Anuncios'
import { ContactLoad } from './../Contacto/ContactLoad';

export const Container = () => {
  return (
    <>
       <Menu />
      <Inicio />
      <Nosotros />
      <Anuncios />
      <Servicios />
      <ContactLoad />
      <Footer />
    </>
  )
}
