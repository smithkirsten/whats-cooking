import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { getCall } from '../../api'

function Dashboard({ user, recipes, ingredients, setRecipes, setIngredients }) {

  return (
    <main>
      Dashboard
      {user ? <p>{user.name}</p> : <p>loading...</p>}
    </main>
  );
}

export default Dashboard;