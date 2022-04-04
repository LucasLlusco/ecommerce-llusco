import React from 'react'
import {ProductCard, ProductImg, ProductDescription} from './styled'



const Item = ({item}) => { 
  return (                 
    <ProductCard>
        <ProductImg>
          <img src={item.image} alt={item.title} />
        </ProductImg>
        <ProductDescription>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button>Ver mas</button>
        </ProductDescription>
    </ProductCard>
  )
}

export default Item