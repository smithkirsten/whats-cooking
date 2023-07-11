import { useEffect, useState } from "react";
import Header from '../Header/Header'
import RecipeCard from "../RecipeCard/RecipeCard";


function Browse({user, setUser, recipes }) {
 
  return (
    <main>
      <Header user={user} setUser={setUser} />
      <nav>
        
      </nav>
      <section>
        {recipes.map(r => <RecipeCard recipe={r}/>)}
      </section>
    </main>
  );
}

export default Browse;