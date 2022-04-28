import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

import { db } from '../firebase/firebase';
import { doc, getDoc, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const productId = params.id; 

  useEffect(() => {
    const productsCollection = collection(db, "Productos"); 
    const refDoc = doc(productsCollection, productId) 
    getDoc(refDoc) 
    .then((result)=>{ 
      const id = result.id; 
      const product = { 
        id,             
        ...result.data()
      };
      setProducto(product);
      console.log(id)
      console.log(result.data())
    })
    .catch (error => {
      console.log(error)
      setError(true)         
    }) 
    .finally(() => {
      setLoading(false)       
    })
  }, [productId]);
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


/*
const URL = productId? `https://fakestoreapi.com/products/${productId}`
    : "https://fakestoreapi.com/products/1";
    console.log(URL)
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducto(data)
      })
      .catch ((err) => {
        console.error(err);
        setError(true)
      })            
      .finally(() => {
        setLoading(false)
      })          */

