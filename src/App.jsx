import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/css/globalStyle';
import { Theme } from './components/css/Theme'; 
import NavBar from './components/NavBar/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import CustomProvider from './context/CartContext';
import Checkout from './components/Checkout';
function App() {
  return (
    <BrowserRouter>
      <CustomProvider>    
        <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <NavBar/>
        <Routes> 
          <Route path="/" element={<ItemListContainer greeting="Todos los productos" />}/>
          <Route path="/brand/:id" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </ThemeProvider>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;

