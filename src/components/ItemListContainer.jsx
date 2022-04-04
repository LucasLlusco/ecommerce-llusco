import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/index';
import Loader from './Loader';


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false) 


  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await res.json();
      setProductos(data)  
    } catch (error) {   
      setError(true)    
    } finally {
      setLoading(false) 
    }                   
  }

  useEffect(() => {
    getProducts()

  }, []);
  
  

  return (
    <>
    <h1>{greeting}</h1>
    {loading ? (  
      <Loader />  
    ) : (
      error ? (   
        <p>Lo sentimos hubo un error</p>
      ) : (  
        <>
        <ItemList items={productos}/>
        </> 
      )
    )}
    </>
  )
}

export default ItemListContainer