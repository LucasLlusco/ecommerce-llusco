import React from 'react'
import ItemCount from './ItemCount/index'

const ItemListContainer = ({greeting}) => {

  const onAdd = (contador) => {
    console.log(`acabas de comprar ${contador} productos!`)
  }
  return (
    <>
    <h1>{greeting}</h1>
    <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
    </>
  )
}

export default ItemListContainer