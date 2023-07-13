import { useEffect, useState } from "react";
import Header from '../Header/Header'
import RecipeCard from "../RecipeCard/RecipeCard";


function Browse({user, setUser, recipes }) {
  const [filter, setFilter] = useState('')

  const filterByTag = (tag) => {
    setFilter(tag)
  }
  const renderFilters = () => {
    console.log('rendering the filters!')
    console.log(filter)
    if(filter !== 'breakfast' && filter !== 'lunch' && filter !== 'dinner' && filter !== '') {
      //once active class is applied to nav buttons, can simplify this conditional into checking whether any of the buttons are active
      return filter
    }
  }
 
  return (
    <main>
      <Header user={user} setUser={setUser} />
      <nav className={'tag-nav'}>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('breakfast')}}>BREAKFAST</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('lunch')}}>LUNCH</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('dinner')}}>DINNER</button>
        <button className={'tag-nav-button'} onClick={() => {filterByTag('')}}>ALL</button>
        {filter && <button className={'remove-filter'} onClick={() => {filterByTag('')}}>{renderFilters()}</button>}
      </nav>
      <section>
        {filter ? recipes.filter(r => r.tags.includes(filter)).map(r => <RecipeCard key={r.id} recipe={r} setFilter={setFilter}/>) : recipes.map(r => <RecipeCard key={r.id} recipe={r} setFilter={setFilter}/>)}
      </section>
    </main>
  );
}

export default Browse;