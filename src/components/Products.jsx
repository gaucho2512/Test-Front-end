import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import useProducts from '../hooks/useProducts';

const Products = ({producto}) => {

    const {contador} = useProducts();

    const {imageUrl, installments, listPrice, price, productName, stars} = producto

   const cuota = installments.map(cuote => (
      cuote.value
    ))

    const cuotaPrecio = installments.map(precio => (
      precio.quantity
    ))
    

  return (
        <div className='item'>
            <div className="caja">
                <div> 
                {listPrice == null ?
                    null   :
                    <div className='off'>
                        <p>off</p>
                    </div>
                } 
                     

                  <img src={imageUrl} alt=""  className="d-block w-100" />
                </div>

                <div className="contenido-card">
                  <p className="name">{productName}</p>
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating name="read-only" value={stars} readOnly />
                    </Box>

                  {listPrice == null ?
                    <p className='precio-falso'>es de $ 2630</p>   :
                    <p className="lista-precio">de $ {listPrice}</p>
                  }

                  <p className="precio">por $ {price}</p>

                  {cuota == '' || cuotaPrecio == '' ?
                    <p></p>   :
                    <p className="cuota">o en $ {cuota} x de R $ {cuotaPrecio}</p>
                  }

                  <button
                    onClick={contador}
                  >comprar</button>

                </div>
            </div>
        </div>
  )
}

export default Products