import useProducts from '../hooks/useProducts';
import Error from './Error';
import Messege from './Messege';

const Formulario = () => {

  const {error, mostrarMensaje, handleSubmit, handleChange, validarForm} = useProducts();

  const {name , email} = validarForm;

  return (
    <div className='container-formulario'>
        <p className='title-form'>¡Únete a nuestras novedades y promociones!</p>
        <form
          className='formulario'
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder='Ingresa tu nombre'
            className='input-text'
            name='name'
            value={name}
            onChange={handleChange}
            
          />

          <input
          type="email"
          placeholder='Ingresa tu mail'
          className='input-email'
          name='email'
          value={email}
          onChange={handleChange}
          />

          <input
            type="submit"
            value='Suscribirme'
            className='input-submit'
            />
        </form>
        {error && <Error />}
        {mostrarMensaje && <Messege />}
    </div>
  )
}

export default Formulario