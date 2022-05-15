import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../../context/CartContext'
import { CartContainer, 
  ProductList, 
  Product, 
  ProductImg, 
  ProductName, 
  ProductQuantity, 
  ProductPrice, 
  SummaryItems,
  SummaryItem,
  SummaryTitle,
  CheckoutBtn,
  ClearBtn,
  ProductDetails,
  Details,
  EmptyCartContainer
} from './styled'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Cart = () => {
  const {
    cartItems, 
    clear, 
    removeItem, 
    getCartItemsQuantity, 
    cartItemsQuantity, 
    getTotal, 
    total
  } = useContext(context)

  const deleteAll = () => {
    clear()
  }
  
  useEffect(() => { 
    getTotal()  
    getCartItemsQuantity() 
  }, [cartItems])
  

  
  return (
    <>
      {cartItems.length === 0? (
        <EmptyCartContainer>
          <ShoppingCartOutlinedIcon/>
          <h2>Aún no hay items en el carrito!</h2>
          <p>Agrega primero un producto para poder visualizar el carrito.</p>
          <p>Volver al <Link to={"/"}>ir al <b>inicio</b></Link></p>
        </EmptyCartContainer>
      ) : ( 
        <CartContainer>
          <ProductList>
          {cartItems.map((product) => {
            return <Product key={product.id}>
              <ProductImg>
                <Link to={`/product/${product.id}`}>
                  <img src={product.img} alt={product.name} />
                </Link>
              </ProductImg>
              <ProductDetails>
                <Details>
                  <ProductName><b>Producto:</b> {product.name}</ProductName>
                  <ProductQuantity><b>Cantidad:</b> {product.quantity}</ProductQuantity>
                  <ProductPrice><b>P.unit</b> ${product.price}</ProductPrice>                
                </Details>
                <DeleteOutlineIcon onClick={() => {removeItem(product)}}/>
              </ProductDetails>
            </Product>
          })}
          <ClearBtn onClick={deleteAll}><DeleteOutlineIcon/><span>Vaciar Carrito</span></ClearBtn>
          </ProductList>
            <SummaryItems>
              <SummaryTitle>Resumen de pedido</SummaryTitle>
              <SummaryItem><span>Productos</span><span>{cartItemsQuantity}</span></SummaryItem>
              <SummaryItem><span>Total</span><span>${total}</span></SummaryItem>
              <Link to={"/checkout"}><CheckoutBtn>Finalizar Compra</CheckoutBtn></Link>
            </SummaryItems>
        </CartContainer>
      )}       
    </>
  )
}

export default Cart