import React from 'react'
import useProducts from '../hooks/useProducts';

const Messege = () => {

    const {mostrarMensaje} = useProducts();

  return (
    <div className="mt-3 error">
    <p className="alert alert-success p-2 m-auto">{mostrarMensaje}</p>
</div>
  )
}

export default Messege