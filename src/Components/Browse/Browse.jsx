import { useEffect, useState } from "react";
import Header from '../Header/Header'
import RecipeCard from "../RecipeCard/RecipeCard";


function Browse({user, setUser, recipes }) {
  const [filter, setFilter] = useState('')

  const filterByTag = (tag) => {
    setFilter(tag)
  }
 
  return (
    <main>
      <Header user={user} setUser={setUser} />
      <nav className={'tag-nav'}>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('breakfast')}}>BREAKFAST</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('lunch')}}>LUNCH</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('dinner')}}>DINNER</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('')}}>ALL</button>
      </nav>
      <section>
        {filter ? recipes.filter(r => r.tags.includes(filter)).map(r => <RecipeCard key={r.id} recipe={r}/>) : recipes.map(r => <RecipeCard key={r.id} recipe={r}/>)}
      </section>
    </main>
  );
}

export default Browse;