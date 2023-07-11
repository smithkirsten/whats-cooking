import { useEffect, useState } from "react";
import Header from '../Header/Header'
import RecipeCard from "../RecipeCard/RecipeCard";


function Browse({user, setUser, recipes }) {

  const filterByTag = (tag) => {

  }
 
  return (
    <main>
      <Header user={user} setUser={setUser} />
      <nav className={'tag-nav'}>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('breakfast')}}>BREAKFAST</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('lunch')}}>LUNCH</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('dinner')}}>DINNER</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('dessert')}}>DESSERT</button>
      </nav>
      <section>
        {recipes.map(r => <RecipeCard recipe={r}/>)}
      </section>
    </main>
  );
}

export default Browse;