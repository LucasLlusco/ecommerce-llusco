import './App.css';
import { GlobalStyle } from './components/globalStyle';
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <ItemListContainer greeting="todos los productos" />
      <ItemDetailContainer />
    </>
    
    
  );
}

export default App;
