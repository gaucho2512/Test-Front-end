import useProducts from "../hooks/useProducts";



const Error = () => {

    const {error} = useProducts();

  return (
    <div className="mt-3 error">
        <p className="alert alert-danger p-2 m-auto">{error}</p>
    </div>
  )
}

export default Error