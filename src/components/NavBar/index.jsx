import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget';
import {Header, HeaderTop, CartIcon, HeaderBottom, Menu, MenuItem, MenuMobile} from './styled'
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { getDocs, collection } from 'firebase/firestore'; 
import { db } from '../../firebase/firebase';


const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    const brandsCollection = collection(db, "Marcas"); 
    getDocs(brandsCollection) 
    .then((result => {  
      const docs = result.docs
      const list = docs.map((element) => {
        const id = element.id; 
        const brand = { 
          id,
          ...element.data()
        }
        return brand
      })
      setBrandList(list)
    }))
    .catch (error => {
      console.log(error)
    }) 
  }, [])

  return (
    <Header>
      <HeaderTop> 
          <div><Link to="/"><h1>React Ecommerce</h1></Link></div>
          <CartIcon>
            <Link to={"/cart"}><CartWidget/><span>Mi carrito</span></Link> 
          </CartIcon>                         
      </HeaderTop>
      <HeaderBottom>
        <MenuMobile>
          <MenuIcon onClick={() => setShowMobileMenu(!showMobileMenu)} />
          <span>Búsqueda por marca</span>
        </MenuMobile>
        <Menu open={showMobileMenu}>
        {brandList.map((element) => {
          return (
            <MenuItem key={element.id}>
              <NavLink to={element.route}>
                {element.name}
              </NavLink>
            </MenuItem>
          )
        })}
        </Menu>
      </HeaderBottom>
    </Header>
  )
}

export default NavBar;
