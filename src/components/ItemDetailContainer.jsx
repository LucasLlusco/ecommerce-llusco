import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader';




const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const productName = params.id;  

  useEffect(() => {
    const URL = productName? `https://fakestoreapi.com/products/${productName}`
    : "https://fakestoreapi.com/products/1";
    console.log(URL)
    const getProduct = async () => {
      setLoading(true)
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducto(data) 
      } catch (error) {                        
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getProduct() 
  }, [productName]); 
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


