import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/index';
import Loader from './Loader';
import { db } from '../firebase/firebase'; 
import { getDocs, collection, query, where  } from 'firebase/firestore'; 

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false) 
  
  const params = useParams();
  const brandName = params.id;
  console.log(brandName)

  useEffect(() => {
    setLoading(true) 

    const productsCollection = collection(db, "Productos"); 
    const URL = brandName? query(productsCollection, where("brand", "==", brandName))
    : collection(db, "Productos");
    console.log(URL)

    getDocs(URL) 
    .then((result => {
      const docs = result.docs  
      const list = docs.map((producto) => { 
        const id = producto.id 
        const product = {
          id,
          ...producto.data()
        }
        return product; 
      })
      console.log(list)
      setProductos(list)
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
        <p>Lo sentimos hubo un error</p> 
      ) : ( 
        <>
         <h1>{greeting}{brandName}</h1>
        <ItemList items={productos}/>
        </> 
      )
    )}
    </>
  )
}

export default ItemListContainer




