import Image from '../../Atoms/Image/Image'

export const AnuncioItem = ({ anuncio }) => {
    return (
        <div className="anuncio-item">
            <div className='contenedor-img'>
            <Image
                image={{
                    src: anuncio.img,
                    alt: anuncio.titulo,
                    height: '100%',
                    width: '100%'
                }}

            />
               {/* <img src={anuncio.img} alt={anuncio.titulo} className="anuncio-img" />*/}
            </div>
            <div className="anuncio-info">
                <h4 className="anuncio-title">{anuncio.titulo}</h4>
                <p className="anuncio-description">{anuncio.descripcion}</p>
                <a href="#contacto" className='anuncio-btn'>¡Consúltanos ya!</a>
            </div>
        </div>
    )
}