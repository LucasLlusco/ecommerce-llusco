import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import {ItemDetailContainer, DetailImages, DetailInfo} from './styled'
import { context } from '../../context/CartContext'



const ItemDetail = ({item}) => {

  const [addToCart, setAddToCart] = useState(true)
  const {addItem} = useContext(context)
  const onAdd = (quantityToAdd) => {
    console.log(`acabas de agregar ${quantityToAdd} productos!`)
    addItem(item, quantityToAdd)
    setAddToCart(false)
  }

  return (
    <ItemDetailContainer className='container'>
      <DetailImages>
        <div>
          <img src={item.image} alt={item.title} />
        </div>

      </DetailImages>
      <DetailInfo>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        {/* <p>{item.description} </p> */}
        <p>brand: {item.brand}</p>
        {/* <p>rating: {item.rating.rate}</p> */}
        {addToCart ? (
          <ItemCount stock={5} initial={1} onAdd={onAdd}/>           
        ) : (
          <>
          <button><Link to="/cart">Terminar compra</Link></button>
          </>
          
        )}
      </DetailInfo>
    </ItemDetailContainer>
  )
}

export default ItemDetail

