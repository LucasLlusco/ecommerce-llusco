import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import {ItemDetailContainer, DetailImages, DetailInfo} from './styled'
import { context } from '../../context/CartContext'



const ItemDetail = ({item}) => {

  const [addToCart, setAddToCart] = useState(true)
  const {addItem, removeItem, clear} = useContext(context)
  const onAdd = (quantityToAdd) => {
    console.log(`acabas de agregar ${quantityToAdd} productos!`)
    addItem(item, quantityToAdd)
    setAddToCart(false)
  }
  const deleteProduct = () => {
    removeItem(item)
  }
  const deleteAll = () => {
    clear()
  }
  return (
    <ItemDetailContainer className='container'>
      <DetailImages>
        <div>
          <img src={item.image} alt={item.title} />
        </div>

      </DetailImages>
      <DetailInfo>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <p>{item.description} </p>
        <p>category: {item.category}</p>
        <p>rating: {item.rating.rate}</p>
        {addToCart ? (
          <ItemCount stock={5} initial={1} onAdd={onAdd}/>           
        ) : (
          <>
          <button><Link to="/cart">Terminar compra</Link></button>
          <button onClick={deleteProduct}>Borrar este producto del carrito</button>
          <button onClick={deleteAll}>Vaciar el carrito entero.</button>
          </>
                                                                 
          
        )}
      </DetailInfo>
    </ItemDetailContainer>
  )
}

export default ItemDetail

