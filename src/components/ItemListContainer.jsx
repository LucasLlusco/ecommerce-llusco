import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/index';
import Loader from './Loader';


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false) 
  
  const params = useParams();
  const categoryName = params.id;

  useEffect(() => {
  
    const URL = categoryName? `https://fakestoreapi.com/products/category/${categoryName}`
    : "https://fakestoreapi.com/products?limit=5";

    const getProducts = async () => {
      setLoading(true) 
      try {
        const res = await fetch(URL);
        const data = await res.json(); 
        setProductos(data) 
      } catch (error) {  
        setError(true)   
      } finally {
        setLoading(false) 
      }                   

  }
    getProducts() 

  }, [categoryName]);
  
  

  return (
    <>
    {loading ? (  
      <Loader />  
    ) : (
      error ? (  
        <p>Lo sentimos hubo un error</p> 
      ) : ( 
        <>
         <h1>{greeting}{categoryName}</h1>
        <ItemList items={productos}/>
        </> 
      )
    )}
    </>
  )
}

export default ItemListContainer

