import React from 'react'
import MyImage from '../Atoms/Image/Image'
import { Titulo } from '../Atoms/Title/Titulo'
import './css/Servicios.css'
import imgServicio1 from '/src/assets/img/img-servicios/servicio-1.png'
import imgServicio2 from '/src/assets/img/img-servicios/servicio-2.png'
import imgServicio3 from '/src/assets/img/img-servicios/servicio-3.png'


const Servicio = ({ title, desc, img }) => (
    <div className="card">
    <MyImage
        image={{
            src: img,
            alt: title,
            height: '100%',
            width: '100%'
        }}
    />
        <div className="card-img-overlay">
            <section className='card-contenido'>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
            </section>
        </div>
    </div>
)



export const Servicios = () => {
    const servicios = [
        {
            title: '01 Compra de casas',
            desc: '¿Estás buscando casa? Podemos ayudarte a encontrarla.',
            img: imgServicio1
        },
        {
            title: '02 ventas casas',
            desc: '¿Estás pensando en vender tu casa? ¡Queremos ayudarte!',
            img: imgServicio2
        },
        {
            title: '03 Reubicación',
            desc: '¿Tienes un nuevo trabajo y te mudas a un nuevo lugar? Podemos ayudar.',
            img: imgServicio3
        },
    ]





    return (
        <section className='servicios' id='servicios'>
            <Titulo children={"Servicios inmobiliarios"} />
            <section className='contenedor-cards'>
                {servicios.map((servicio, i) => <Servicio key={i} {...servicio} />)}
            </section>
            <a href="#contacto" className='servicio-btn'>¡Consúltanos ya!</a>
        </section>
    )
}
