import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import './Header.css';

function Header({ user, setUser }) {
  const navigate = useNavigate()

  const logOut = () => {
    setUser({})
    navigate('login')

  }

  return (
    <header>
      <div className='log'>
        <p>welcome, {user.name}</p>
        <button className='log-button' onClick={logOut}>logout</button>
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