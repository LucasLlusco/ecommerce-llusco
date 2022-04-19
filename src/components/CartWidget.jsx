import React, { useContext, useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "styled-components";
import { context } from '../context/CartContext';


const CartNotification = styled.div`
  display: flex;
  position: relative;
  font-size: 1rem;
  span {
    position: absolute;
    background-color: #ff4754;
    font-size: 15px;
    border-radius: 50%;
    top: -13px;
    z-index: 1;
    left: 10px;
    padding: 3px;
    text-align: center;
    color: white;
  }
`

const CartWidget = () => {
  const {cartItems, cartItemsQuantity, getCartItemsQuantity} = useContext(context)
  useEffect(() => {
    getCartItemsQuantity()

  }, [cartItems])
  

  console.log(`productos quantity en el carrito ${cartItemsQuantity}`)

  return (
    <CartNotification>
        <ShoppingCartIcon/>
        {cartItemsQuantity == 0? (<></>) : (<span>{cartItemsQuantity}</span>)}
    </CartNotification>
  )
}

export default CartWidget
