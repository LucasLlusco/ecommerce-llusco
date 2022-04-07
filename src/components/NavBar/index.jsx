import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from '../CartWidget';
import {Header, HeaderTop, ContainerSearch, SessionCarrito, HeaderBottom} from './styled'
import { Link, NavLink } from 'react-router-dom';





const NavBar = () => {
  const categories = [
    { name: "Electronics", route: "category/electronics", id: "electronics" },
    { name: "Jewelery", route: "category/jewelery", id: "jewelery" },
    { name: "Men's clothing", route: "category/men's clothing", id: "men's clothing" },
    { name: "Women's clothing", route: "category/women's clothing", id: "women's clothing" }
  ];
  return (
      <>
        <Header>
            <HeaderTop className="container"> 
                <div><Link to="/"><h1>Logo</h1></Link></div>
                <ContainerSearch>
                  <input type="text" placeholder='Buscar...' />    
                  <span>
                    <SearchIcon/>  
                  </span>   
                </ContainerSearch>
                <SessionCarrito>
                  <li><a href="#"><CartWidget/><span>Mi carrito</span></a></li>     
                  <li><a href="#"><AccountCircleIcon/><span>Mi cuenta</span></a></li>  
                </SessionCarrito>                         
            </HeaderTop>
            <HeaderBottom className="container">
              <h4>Buscar por categoria:</h4>
              <div>
                {categories.map((element) => {
                  return (
                    <NavLink key={element.id} to={element.route}>
                      {element.name}
                    </NavLink>
                  )
                })}
              </div>
            </HeaderBottom>
        </Header>
      </>
  )
}

export default NavBar;




