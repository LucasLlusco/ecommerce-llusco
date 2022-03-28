import './App.css';
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer';
import { GlobalStyle } from './components/globalStyle';


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <ItemListContainer greeting="todos los productos" />
    </>
    
    
  );
}

export default App;
