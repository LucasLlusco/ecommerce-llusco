import React from 'react'
import Item from '../Item/index';
import {ProductList} from './styled'

const ItemList = ({items}) => {
  return (
    <>
    <ProductList className='container'>
        {items.map((product) => (
            <Item key={product.id} item={product}/> 
        ))}                                         
    </ProductList>
    </>
  )
}





export default ItemList