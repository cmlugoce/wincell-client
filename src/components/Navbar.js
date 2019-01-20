import React from 'react';
import { NavLink } from "react-router-dom";
import './components.css';

const Navbar = ()=> {
  

   
    return (

    <div>
        <div id = 'logo'>

        Winecell
        </div>
   <div id='navbar'>
            <NavLink  to="/" exact > Home </NavLink>
            <NavLink  to="/wines" exact > All wines </NavLink>
            <NavLink  to="/wine/new" exact > Add wine </NavLink>
            <NavLink  to="/winebasics" exact > Wine 101 </NavLink>
            
         </div>

         </div>
    )
}



export default Navbar;