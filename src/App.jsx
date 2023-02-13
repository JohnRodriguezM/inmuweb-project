import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Container } from './components/Anuncios/Container'

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
      <Container/>
    </div>
  )
}

export default App
