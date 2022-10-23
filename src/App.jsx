import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import BannerMobile from "./components/BannerMobile";
import SliderProducts from "./components/SliderProducts";
import { ProductsProvider } from "./context/ProductsProvider";



function App() {

  


  return (
    <ProductsProvider>
      <div className="container-padre">
        <Header />
        <HeaderMobile />

        <Banner />
        <BannerMobile />
        <SliderProducts />

        <Formulario />

        <Footer />
        
      </div>
    </ProductsProvider>
  );
}

export default App;
