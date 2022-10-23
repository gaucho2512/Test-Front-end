import logoFooter from '../assets/logo-footer.svg'
import contactanos from '../assets/contactanos.svg'
import consultor from '../assets/consultor.svg'
import vtex from '../assets/vtex.svg'

const Footer = () => {
  return (
    <>
    <div className='container-footer'>
        <div className='textos-footer'>
          <h3 className='title-footer'>Ubicación</h3>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>

        <div className='btn-footer'>
            <button>
              <img src={contactanos} alt="" />CONTÁCTANOS
            </button>
            <button>
              <img src={consultor} alt="" />HABLA CON UN CONSULTOR
            </button>
        </div>

        <div className='icons-footer'>
            <div className='div-corebiz'>
              <p className='corebiz'>Desarrollado por</p>
              <img src={logoFooter} alt="" />
            </div>

            <div className='div-vtex'>
              <p className='vtex'>Desarrollado por</p>
              <img src={vtex} alt="" />
            </div>
        </div>
    </div>
    <div className='barrita'>

    </div>
    </>
  )
}

export default Footer