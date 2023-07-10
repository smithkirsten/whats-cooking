import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Header from '../Header/Header'
import { getCall } from '../../api'

function Dashboard({ user, recipes, ingredients, setUser, setRecipes, setIngredients }) {
  useEffect(() => {

   (async () => {
    const allRecipes = await getCall('recipes')
    const allIngredients = await getCall('ingredients')
    setRecipes(allRecipes.recipes)
    setIngredients(allIngredients.ingredients)
   })()
   return () => {

   }
  }, [])

  return (
    <main>
      <Header user={user} setUser={setUser} />
      {user ? <p>{user.name}</p> : <p>loading...</p>}
      recipes:
      {recipes.length ? recipes.map(r => <p>{r.name}</p>) : <p>loading...</p>}
      ingredients:
      {ingredients.length ? ingredients.map(i => <p>{i.name}</p>) : <p>loading...</p>}
    </main>
  );
}

export default Dashboard;