import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/index';
import Loader from './Loader';
import { db } from '../firebase/firebase'; 
import { getDocs, collection, query, where  } from 'firebase/firestore'; 

import styled from "styled-components";
const ItemsFound = styled.h2`
  width: 90%;
  margin: auto;
  padding: 10px 0px;
`
export const ErrorMsg = styled.h2`
  width: 90%;
  margin: auto;
  padding: 10px 0px;
  text-align: center;
`
const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false) 
  
  const params = useParams();
  const brandName = params.id;

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "Productos"); 
    const consult = brandName ? 
    query(productsCollection, where("brand", "==", brandName)) 
    : productsCollection;

    getDocs(consult) 
    .then((result => {
      const docs = result.docs  
      const list = docs.map((element) => { 
        const id = element.id;
        const product = {
          id,
          ...element.data()
        }
        return product; 
      })
      setProducts(list)
    }))
    .catch (error => {
      console.log(error)
      setError(true)         
    }) 
    .finally(() => {
      setLoading(false)       
    })
  }, [brandName]);
  
  

  return (
    <>
    {loading ? (  
      <Loader />  
    ) : (
      error ? (  
        <ErrorMsg>Lo sentimos hubo un error al cargar. Intente de nuevo</ErrorMsg> 
      ) : ( 
        <>
        {greeting ? ( 
          <ItemsFound>{greeting} ({products.length})</ItemsFound>
        ) : (
          <ItemsFound>Productos {brandName} encontrados ({products.length})</ItemsFound>          
        )}
        <ItemList items={products}/>
        </>
      )
    )}
    </>
  )
}

export default ItemListContainer
