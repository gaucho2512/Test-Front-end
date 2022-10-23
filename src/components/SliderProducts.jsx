import useProducts from "../hooks/useProducts"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Products from "./Products";



const SliderProducts = () => {

    const {productos} = useProducts();
    

    const options = {
        items:'4',
        margin: 10,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
          0: {
            items: 2,
            dots: true,
            nav: false,
        },
        414: {
            items: 2,
            dots: true,
            nav: false,
        },
        576: {
            items: 2,
            dots: true,
            nav: false,
        },
        768: {
            items: 3,
            dots: false,
            nav: true,
        },
        992: {
          items: 4,
          dots: false,
          nav: true,
      },
      },
  };

  return (
    <div className='container-slider'>
      
      <p className='title'>Más Vendidos</p>
     
        <OwlCarousel
          className='owl-theme'
          {...options}
        >

          {productos.map(producto =>(
            <Products
              key={producto.productId}
              producto={producto}
            />
          ))}
        </OwlCarousel>
    </div>
  )
}

export default SliderProducts