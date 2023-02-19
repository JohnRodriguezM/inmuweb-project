import React from 'react'
import { Titulo } from '../Atoms/Title/Titulo'
import './css/Servicios.css'


import { ItemServicio } from './ItemServicio/ItemServicio'

import { servicios } from './utils/utils'

export const Servicios = () => {
    return (
        <section className='servicios' id='servicios'>
            <Titulo children={"Servicios inmobiliarios"} />
            <section className='contenedor-cards'>
                {servicios.map((servicio, i) => <ItemServicio key={i} {...servicio} />)}
            </section>
            <a href="#contacto" className='servicio-btn'>¡Consúltanos ya!</a>
        </section>
    )
}
