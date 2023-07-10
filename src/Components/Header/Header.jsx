import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import './Header.css';

function Header({ user, loggedIn }) {

  return (
    <header>
      <div className='log'>
        <p>welcome, {user.name}</p>
        <button>logout</button>
      </div>
      <div className='nav'>
        <button>RECIPES TO COOK</button>
        <button>GROCERY LIST</button>
        <button>BROWSE ALL RECIPES</button>
      </div>
    </header>
  );
}

export default Header;