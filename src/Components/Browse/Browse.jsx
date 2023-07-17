import { useEffect, useState } from "react";
import './Browse.css'
import Header from '../Header/Header'
import FilterNav from '../FilterNav/FilterNav'
import RecipeCard from "../RecipeCard/RecipeCard";


function Browse({user, setUser, recipes }) {
  const [filter, setFilter] = useState('')

  const filterByTag = (tag) => {
    setFilter(tag)
  }

 
  return (
    <main>
      <Header user={user} setUser={setUser} />
      <FilterNav filterByTag={filterByTag} filter={filter}/>
      <section className={'cards-section'}>
        {filter ? recipes.filter(r => r.tags.includes(filter)).map(r => <RecipeCard key={r.id} recipe={r} setFilter={setFilter}/>) : recipes.map(r => <RecipeCard key={r.id} recipe={r} setFilter={setFilter}/>)}
      </section>
    </main>
  );
}

export default Browse;