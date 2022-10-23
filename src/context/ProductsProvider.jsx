import axios from "axios"
import { createContext, useEffect, useState } from "react"

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [productos, setProductos] = useState([]);
    const [sumarCarrito, setSumarCarrito] = useState(
        Number(localStorage.getItem('carrito')) 
    )
    const [mostrarBtn, setMostrarBtn] = useState(false)
    const [mostrarContador, setMostrarContador] = useState(false)
    const [error, setError] = useState('')
    const [message , setMessage] = useState('')
    const [mostrarMensaje, setMostrarMensaje] = useState('')
    const [validarForm, setValidarForm] = useState({
        name: '',
        email: ''
      });
    
      const {name , email} = validarForm;
    
      const handleChange = e =>{
        setValidarForm({
          ...validarForm,
          [e.target.name] : e.target.value
        })
      }

  

    useEffect(()=>{

       

        const obtenerProducts = async () =>{
            try {
                const url = 'https://corebiz-test.herokuapp.com/api/v1/products';
                const {data} = await axios(url)
                setProductos(data);

            } catch (error) {
                console.log(error);
            }
        }
        obtenerProducts()

    }, [sumarCarrito])

    useEffect(()=>{
        localStorage.setItem('carrito', sumarCarrito )
    }, [sumarCarrito])

    
    const contador = () =>{ 
      setSumarCarrito(sumarCarrito + 1 )
      setMostrarContador(true)
    }


    const handleSubmit = async e =>{
        e.preventDefault()
    
        if(Object.values(validarForm).includes('')) {
          setError('Todos los campos son obligatorios')
        
      }
      setTimeout(()=>{
        setError('')
      },3000)
    
        try {
          const config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(validarForm)
          }
    
          const url = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'
          const respuesta = await fetch(url, config)
          const resultado = await respuesta.json()
          setMessage(resultado.message);
          console.log(resultado.message);
        
          if(name === 'test' && email === 'heroku@test.co'){
            setMostrarMensaje(message)
            setTimeout(()=>{
                setMostrarMensaje('')
            },3000)
          }
          
        setValidarForm({
          name: '',
          email: ''
        })

        } catch (error) {
          console.log(error);
        }
      }
    

    


    return(
        <ProductsContext.Provider
            value={{
                productos,
                sumarCarrito,
                contador,
                mostrarBtn,
                setMostrarBtn,
                mostrarContador,
                setMostrarContador,
                error,
                setError,
                handleSubmit,
                handleChange,
                message,
                validarForm,
                mostrarMensaje,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export{
    ProductsProvider
}

export default ProductsContext