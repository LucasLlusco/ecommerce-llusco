import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;
console.log(context);

const CustomProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

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
      console.log(cartItems)
    } 
    const isInCart = (item) => { 
      if (cartItems.find(product => product.id === item.id)) {
        return true;
      } else {
        return false
      }
    } 



  return (
    <Provider value={{cartItems, addItem, removeItem, clear }}>{children}</Provider>
  ) 
}

export default CustomProvider;

