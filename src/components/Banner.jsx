import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'

const Banner = () => {
  return (
    <div className='carrousel-desktop'>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <h1>Crear o migrar tu comercio electrónico?</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <h1>Crear o migrar tu comercio electrónico?</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <h1>Crear o migrar tu comercio electrónico?</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>¡Hola! ¿Qué es lo que buscas?</h3>
          <h1>Crear o migrar tu comercio electrónico?</h1>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  )
}

export default Banner