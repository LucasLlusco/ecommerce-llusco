import React from 'react'
import { Link } from 'react-router-dom'
import {ProductCard, ProductImg, ProductDescription} from './styled'


const Item = ({item}) => { 
  const URL = `/product/${item.id}`; 
  return (             
    <ProductCard>
      <Link to={URL}>
        <ProductImg>
          <img src={item.image} alt={item.title} />
        </ProductImg>
        <ProductDescription>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button>Ver mas</button>
        </ProductDescription>
      </Link>
    </ProductCard>
  )
}

export default Item