import React from 'react';
import {Link} from "react-router-dom";
import '../stylesheets/layout/Header.scss';
import logo from '../images/logo-rick-n-morty.png'

export default function Header () {
  return (
    <header className="header">
      <Link to='/'>
        
        <img
          className="header__img"
          src={logo}
          title="Go to home"
          alt="Rick and Morty logo"
        />
     </Link>
    
    </header>
  );
}
