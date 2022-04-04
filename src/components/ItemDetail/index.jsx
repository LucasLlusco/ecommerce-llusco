import React from 'react'
import ItemCount from '../ItemCount'
import {ItemDetailContainer, DetailImages, DetailInfo} from './styled'




const ItemDetail = ({item}) => {


  const onAdd = (contador) => {
    console.log(`acabas de comprar ${contador} productos!`)
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
        <p>{item.description} </p>
        <p>category: {item.category}</p>
        <p>rating: {item.rating.rate}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
      </DetailInfo>
    </ItemDetailContainer>
  )
}

export default ItemDetail