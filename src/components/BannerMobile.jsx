import Carousel from 'react-bootstrap/Carousel';
import bannerMobile1 from '../assets/bannerMobile1.jpg'
import bannerMobile2 from '../assets/bannerMobile2.jpg'
import bannerMobile3 from '../assets/bannerMobile3.jpg'
import bannerMobile4 from '../assets/bannerMobile4.jpg'

const Banner = () => {
  return (
    <div className='carrousel-mobile'>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerMobile1}
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
          src={bannerMobile2}
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
          src={bannerMobile3}
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
          src={bannerMobile4}
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