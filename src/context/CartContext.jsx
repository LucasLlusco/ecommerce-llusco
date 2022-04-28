import { createContext, useState } from "react";


export const context = createContext();
const { Provider } = context; 
console.log(context);

const CustomProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0)

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
    console.log(cartItems);
  } 
  const removeItem = (item) => {
    const productRemove = cartItems.filter(product => product.id !== item.id)
    setCartItems(productRemove)    
  }
  const clear = () => {
    setCartItems([])
    getCartItemsQuantity() 
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

  return (
    <Provider 
    value={{cartItems, addItem, removeItem, clear, getCartItemsQuantity, cartItemsQuantity }}>{children}
    </Provider> 
  ) 
}

export default CustomProvider;
