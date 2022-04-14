import './App.css';
import { GlobalStyle } from './components/globalStyle';
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CustomProvider from './context/CartContext'; 


function App() {
  return (
    <>
    <BrowserRouter>
      <CustomProvider>    
        <GlobalStyle/>
        <NavBar/>
        <Routes> 
          <Route path="/" element={<ItemListContainer greeting="todos los productos" />}/>
          <Route path="/category/:id" element={<ItemListContainer greeting="estas viendo category/"/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </CustomProvider>
    </BrowserRouter>
    </>

    
  );
}

export default App;
