import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import Loader from './Loader';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const getProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/1");
        const data = await res.json();
        setProducto(data) 
      } catch (error) {                        
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    useEffect(() => {
        getProduct() 
    }, []); 
    return (
      <>
      {loading ? (
        <Loader />
      ) : (
        error ? (
          <p>Lo sentimos hubo un error</p>
        ) : (
          <>
          <ItemDetail item={producto} />
          </>  
        )
      )}
      </>
    )
}

export default ItemDetailContainer