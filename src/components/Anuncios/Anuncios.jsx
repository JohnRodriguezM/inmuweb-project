import React, { useEffect, useState } from 'react'
import { Titulo } from '../Atoms/Title/Titulo'
import './css/Anuncios.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnuncioItem } from './Item/AnuncioItem';
import { anuncios } from './helper/anuncios';


export const Anuncios = () => {
    return (
        <>
            <section className='anuncios d-flex flex-column justify-content-center' id='anuncios'>
                <Titulo children={"Anuncios"} />
                {Array.isArray(anuncios.anuncios) && anuncios.anuncios.length > 0 ?
                    anuncios.anuncios.map((anuncio, index) => (
                        <AnuncioItem key={index} anuncio={anuncio} />
                    ))
                    : <h1>No hay anuncios</h1>
                }
            </section>

        </>
    )
}
