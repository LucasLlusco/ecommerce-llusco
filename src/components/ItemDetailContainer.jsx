import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { ErrorMsg } from './ItemListContainer' 
import { db } from '../firebase/firebase';
import { doc, getDoc, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
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
      const item = { 
        id,             
        ...result.data()
      };
      setProduct(item);
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
        <ErrorMsg>Lo sentimos hubo un error al cargar. Intente de nuevo</ErrorMsg>
      ) : (
        <ItemDetail item={product} />
      )
    )}
    </>
  )
}

export default ItemDetailContainer


