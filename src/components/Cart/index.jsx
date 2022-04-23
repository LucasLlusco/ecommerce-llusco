import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../../context/CartContext'
import { CartContainer, 
  CartList, 
  CartTotal, 
  CartProduct, 
  CartImg, 
  CartName, 
  CartQuantity, 
  CartPrice 
} from './styled'


const Cart = () => {
  const {cartItems, clear, removeItem} = useContext(context)
  const [total, setTotal] = useState(0) 
  const deleteAll = () => {
    console.log("se acaba de vaciar todo el cart");
    clear()
  }

  const calculateTotal = () => {
    let totalCounter = 0;  
    cartItems.forEach((product) => {  
      totalCounter += product.price * product.quantity; 
    })
    setTotal(totalCounter)
  }

  useEffect(() => { 
    calculateTotal()  
  }, [cartItems])
  

  
  return (
    <CartContainer className='container'>
    {cartItems.length == 0? (
      <p>el carrito esta vacio, <Link to={"/"}>ir al inicio</Link></p>
    ) : (
      <>
      <CartList>
        {cartItems.map((product) => {
          return <CartProduct key={product.id}>
            <CartImg>
              <img src={product.image} alt={product.title} />
            </CartImg>
            <CartName>
              <p>{product.title}</p>
              <button onClick={ () => {removeItem(product)}}>eliminar producto</button>
            </CartName>
            <CartQuantity>{product.quantity}</CartQuantity>
            <CartPrice>p.unit ${product.price}</CartPrice>
          </CartProduct>
        })}
      </CartList>
      <CartTotal>
        <h2>Resumen de pedido</h2>
        <p>Total: <span>${total}</span></p>
        <button>continuar</button>
        <button onClick={deleteAll}>Vaciar carrito</button>
      </CartTotal>
      </>
    )}
    </CartContainer>
  )
}

export default Cart