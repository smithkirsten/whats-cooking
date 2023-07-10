
import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'

function App() {
  const [user, setUser] =  useState({})
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])



  return (
    <>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} setRecipes={setRecipes} recipes={recipes} setIngredients={setIngredients} ingredients={ingredients} />} />
      </Routes>
    </>
  );
}

export default App;
