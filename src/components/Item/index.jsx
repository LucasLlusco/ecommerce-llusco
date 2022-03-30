import React from 'react'
import {ProductCard} from './styled'



const Item = ({item}) => { 
  return (                 
    <ProductCard>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button>Ver mas</button>
    </ProductCard>
  )
}

export default Item