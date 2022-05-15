import React from 'react'
import { Link } from 'react-router-dom'
import {ProductCard, ProductImg, ProductDescription, ProductBtn} from './styled'


const Item = ({item}) => {
  const URL = `/product/${item.id}`; 
  return (              
    <ProductCard>
      <Link to={URL}>
        <ProductImg>
          <img src={item.img} alt={item.name} />
        </ProductImg>
        <ProductDescription>
          <p>{item.name}</p>
          <span>${item.price}</span>
          <ProductBtn>Ver mas</ProductBtn>
        </ProductDescription>
      </Link>
    </ProductCard>
  )
}

export default Item