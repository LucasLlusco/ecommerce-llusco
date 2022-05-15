import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context; 

const CustomProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0)
  const [total, setTotal] = useState(0) 

  const addItem = (item, quantity) => {
    const newItem = {
      ...item,
      quantity
    };
    if(isInCart(item)) {
      const productFind = cartItems.find(item => item.id === newItem.id); 
      const indexProduct = cartItems.indexOf(productFind);
      const newCartItems = [...cartItems]; 
      newCartItems[indexProduct].quantity += quantity; 
      setCartItems(newCartItems); 
    } else {
      setCartItems([...cartItems, newItem]); 
    }
  } 
  const removeItem = (item) => {
    const productRemove = cartItems.filter(product => product.id !== item.id) 
    setCartItems(productRemove)   
  }
  const clear = () => {
    setCartItems([])
    setCartItemsQuantity(0)
    setTotal(0)
  } 
  const isInCart = (item) => { 
    if (cartItems.find(product => product.id === item.id)) {
      return true;
    } else {
      return false
    }
  } 

  const getCartItemsQuantity = () => {
    let qty = 0;
    if (cartItems.length === 0) {  
      setCartItemsQuantity(qty) 
    } else { 
      cartItems.forEach((product) => { 
        qty += product.quantity
        setCartItemsQuantity(qty)  
      })
    }
  }
  
  const getTotal = () => {
    let totalCounter = 0;  
    if (cartItems.length === 0) { 
      setTotal(totalCounter)
    } else {
      cartItems.forEach((product) => { 
        totalCounter += product.price * product.quantity; 
        setTotal(totalCounter.toFixed(3));
      })      
    }
  }

  return (
    <Provider 
    value={{cartItems, addItem, removeItem, clear, getCartItemsQuantity, cartItemsQuantity, getTotal, total, }}>{children}
    </Provider> 
  ) 
}

export default CustomProvider;
