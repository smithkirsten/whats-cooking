
import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import Browse from './Browse/Browse'
import Pantry from './Pantry/Pantry'
import Cook from './Cook/Cook'

function App() {
  const [user, setUser] =  useState({})
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])



  return (
    <>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard setUser={setUser} user={user} setRecipes={setRecipes} recipes={recipes} setIngredients={setIngredients} ingredients={ingredients} />} />
        <Route path={"/browse"} element={<Browse user={user} recipes={recipes} setUser={setUser}/>} />
        <Route path={"/cook"} element={<Cook />} />
        <Route path={"/pantry"} element={<Pantry />} />
      </Routes>
    </>
  );
}

export default App;
