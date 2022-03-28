import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from '../CartWidget';
import {Header, Nav, ContainerSearch, SessionCarrito} from './styled'


const NavBar = () => {
  return (
      <>
        <Header>
            <Nav className="container">
                <div><a href="#"><h1>Logo</h1></a></div>
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
            </Nav>
        </Header>
      </>
  )
}

export default NavBar;
