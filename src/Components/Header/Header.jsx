import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"
import './Header.css';

function Header({ user, setUser }) {
  const navigate = useNavigate()

  const logOut = () => {
    setUser({})
    navigate('/')

  }

  return (
    <header>
      <div className='log'>
        <p>welcome, {user.name}</p>
        <button className='log-button' onClick={logOut}>logout</button>
      </div>
      <div className='nav'>
      <NavLink to={'/cook'}><button className='nav-button'>RECIPES TO COOK</button></NavLink>
      <NavLink to={'/pantry'}><button className='nav-button'>GROCERY LIST</button></NavLink>
      <NavLink to={'/browse'}><button className='nav-button'>BROWSE ALL RECIPES</button></NavLink>
      </div>
    </header>
  );
}

export default Header;