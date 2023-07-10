import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import './Header.css';

function Header({ user, loggedIn }) {

  return (
    <header>
      <div className='log'>
        <p>welcome, {user.name}</p>
        <button className='log-button'>logout</button>
      </div>
      <div className='nav'>
      <Link to={'cook'}><button className='nav-button'>RECIPES TO COOK</button></Link>
      <Link to={'pantry'}><button className='nav-button'>GROCERY LIST</button></Link>
      <Link to={'browse'}><button className='nav-button'>BROWSE ALL RECIPES</button></Link>
      </div>
    </header>
  );
}

export default Header;