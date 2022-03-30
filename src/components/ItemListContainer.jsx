import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount/index';
import ItemList from './ItemList/index';


const productosIniciales = [
  {name: "Manzana", price: 10, stock: 5, id:1},
  {name: "Pera", price: 20, stock: 10, id:2},
  {name: "Naranja", price: 30, stock: 15, id:3},
  {name: "Sandia", price: 40, stock: 20, id:4},
]

const promesa = new Promise((res, rej) => {
  setTimeout(() => { 
    res(productosIniciales); 
  }, 2000)
});

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    promesa.then((productos) => {
      setProductos(productos);
      console.log(productos); 
    })                          
    .catch(() => {             
      console.log("algo salio mal");   
    })                                 
  }, []);
  
  
  
  const onAdd = (contador) => {
    console.log(`acabas de comprar ${contador} productos!`)
  }
  return (
    <>
    <h1>{greeting}</h1>
    <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
    <ItemList items={productos}/>
    </>
  )
}

export default ItemListContainer