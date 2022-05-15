import React, { useContext, useEffect } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { context } from '../context/CartContext';

const CartNotification = styled.div`
  display: flex;
  position: relative;
  font-size: 1rem;
  span {
    position: absolute;
    background-color:  ${({theme}) => theme.colors.lightRed};
    font-size: 15px;
    border-radius: 50%;
    top: -13px;
    z-index: 1;
    left: 10px;
    padding: 3px;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
  }
`

const CartWidget = () => {
  const {cartItems, cartItemsQuantity, getCartItemsQuantity} = useContext(context) 
  useEffect(() => { 
    getCartItemsQuantity()   
  }, [cartItems]) 

  return (
    <CartNotification>
        <ShoppingCartOutlinedIcon/>
        {cartItemsQuantity > 0 && (
          <span>{cartItemsQuantity}</span>
        )}
    </CartNotification>
  )
}

export default CartWidget
