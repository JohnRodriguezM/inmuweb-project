import { useEffect, useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './components/Inicio/Inicio'
import Nosotros from './components/Nosotros/Nosotros'
import { Anuncios } from './components/Anuncios/Anuncios'
import { Servicios } from './components/Servicios/Servicios'
import { Contacto } from './components/Contacto/Contacto'
import { Footer } from './components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export const App = () => {
 const [showBtn, setShowBtn] = useState(false);

 const handleScroll = () => window.scrollY > 100 ? setShowBtn(true) : setShowBtn(false);

 //* fixed code
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="App">
      {showBtn ? (
        <button className='btn'
         onClick={() => window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '20px' }} />
        </button>
      ): null }
      <Menu />
      <Inicio />
      <Nosotros />
      <Anuncios />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
