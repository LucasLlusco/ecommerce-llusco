import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import {ItemDetailContainer, 
  DetailImage, 
  DetailInfo, 
  ProductName, 
  ProductPrice, 
  ProductDescription, 
  CheckoutBtn,
  ProductStockTrue,
  ProductStockFalse
} from './styled'
import { context } from '../../context/CartContext'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';



const ItemDetail = ({item}) => {
  const [prodInCart, setProdInCart] = useState(false)
  const {addItem} = useContext(context)
  const onAdd = (quantityToAdd) => {
    addItem(item, quantityToAdd)
    setProdInCart(true);
  }
  return (
    <ItemDetailContainer>
      <DetailImage>
        <div>
          <img src={item.img} alt={item.name} />
        </div>
      </DetailImage>
      <DetailInfo>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>${item.price}</ProductPrice>
        <p>Memoria interna: <b>{item.capacity}</b></p>
        <p>Marca: <b>{item.brand}</b></p>
        {item.stock > 0 ? (
          <ProductStockTrue><CheckCircleIcon/>Stock disponible</ProductStockTrue>
        ) : (
          <ProductStockFalse><CancelIcon/>Sin stock</ProductStockFalse>
        )}
        <p>Caracteristicas del producto:</p>
        <ProductDescription>
          {item.description.map((element) => { 
            return ( 
              <li key={element}>{element}</li>
            )
          })}
        </ProductDescription>
        {!prodInCart ? (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>           
        ) : ( 
          <Link to="/cart"><CheckoutBtn>Terminar compra</CheckoutBtn></Link>          
        )}

      </DetailInfo>
    </ItemDetailContainer>
  )
}

export default ItemDetail
