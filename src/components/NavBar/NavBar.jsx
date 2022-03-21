import React from 'react';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const NavBar = () => {
  return (
      <>
        <header>
            <nav className="container">
                <div className="logo"><a href="#"><h1>Logo</h1></a></div>
                <div className="container-search">
                  <input type="text" placeholder='Buscar...' />    
                  <span className="icon-search">
                    <SearchIcon/>  
                  </span>   
                </div>
                <div className="session-carrito">
                  <li><a href="#"><ShoppingCartIcon/><span>Mi carrito</span></a></li>     
                  <li><a href="#"><AccountCircleIcon/><span>Mi cuenta</span></a></li>  
                </div>                         
            </nav>
        </header>
      </>
  )
}

export default NavBar;