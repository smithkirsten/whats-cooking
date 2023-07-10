import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function Header({ user }) {

  return (
    <header>
      <div className='intro'>
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