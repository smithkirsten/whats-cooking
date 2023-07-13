import { useEffect, useState } from "react";
import Header from '../Header/Header'
import RecipeCard from "../RecipeCard/RecipeCard";


function Browse({user, setUser, recipes }) {
  const [filter, setFilter] = useState('')

  const filterByTag = (tag) => {
    setFilter(tag)
  }
  const renderFilters = () => {
    if(filter !== 'breakfast' && filter !== 'lunch' && filter !== 'dinner' && filter !== '') {
      //once active class is applied to nav buttons, can simplify this conditional into checking whether any of the buttons are active
      return filter
    }
  }
 
  return (
    <main>
      <Header user={user} setUser={setUser} />
      <nav className={'tag-nav'}>
        <button 
          className={'tag-nav-button'} 
          onClick={() => {filterByTag('breakfast')}}
          style={{ color: filter === 'breakfast' ? 'white' : '#292929' }}
        >BREAKFAST</button>
        <button 
          className={'tag-nav-button'} 
          onClick={() => {filterByTag('lunch')}}
          style={{ color: filter === 'lunch' ? 'white' : '#292929' }}
        >LUNCH</button>
        <button 
          className={'tag-nav-button'} 
          onClick={() => {filterByTag('dinner')}}
          style={{ color: filter === 'dinner' ? 'white' : '#292929' }}
        >DINNER</button>
        <button 
          className={'tag-nav-button'} 
          onClick={() => {filterByTag('')}}
          style={{ color: filter === '' ? 'white' : '#292929' }}
        >ALL</button>
        {filter && <button className={'remove-filter'} onClick={() => {filterByTag('')}}>{renderFilters()}</button>}
      </nav>
      <section>
        {filter ? recipes.filter(r => r.tags.includes(filter)).map(r => <RecipeCard key={r.id} recipe={r} setFilter={setFilter}/>) : recipes.map(r => <RecipeCard key={r.id} recipe={r} setFilter={setFilter}/>)}
      </section>
    </main>
  );
}

export default Browse;