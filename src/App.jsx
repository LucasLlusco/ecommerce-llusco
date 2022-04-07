import './App.css';
import { GlobalStyle } from './components/globalStyle';
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<ItemListContainer greeting="todos los productos" />}/>
        <Route path="/category/:id" element={<ItemListContainer greeting="estas viendo category/" />}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart"/>
      </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;
