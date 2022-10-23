import logo1 from '../assets/logo1.jpg'
import useProducts from '../hooks/useProducts'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {

    const {sumarCarrito, mostrarContador} = useProducts();

  return (
    <div className='container-header'>
        <div>
            <img src={logo1} alt="" />
        </div>

        <div className='container-input'>
            <input
                type="text"
                placeholder='¿Qué estás buscando?'
            />
            <SearchIcon fontSize='large' sx={{ position: 'absolute', right: 0, bottom: 3 }}/>
        </div>

        <div className='container-cuenta'>
            <div className='cuenta'>
                <PersonOutlineOutlinedIcon fontSize='large' />
                <p>Mi Cuenta</p>
            </div>

            <div className='buy'>
                <ShoppingCartOutlinedIcon  fontSize='large'/>
                <div>
                {sumarCarrito == '0' ?
                    <p></p>   :
                    <div className='numero'>
                        <p>{sumarCarrito}</p>
                    </div> 
                } 
                    
                   
                
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header