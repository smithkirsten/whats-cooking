import { useEffect, useState } from "react";
import Header from '../Header/Header'


function RecipeCard({ recipe, setFilter }) {
 
  return (
    <article className={'recipe-card'}>
      <img src={recipe.image} alt={recipe.name} className={'recipe-image'}/>

      <section className={'recipe-deets'}>
        <h2>{recipe.name}</h2>
        {recipe.ingredients.length < 11 && <p className={'easy-meal'}>less than 10 ingredients!</p>}
        <div className={'tags-section'}>
          {recipe.tags.map(tag => <button className={'tag'} onClick={() => {setFilter(tag)}}>#{tag}</button>)}
        </div>
      </section>

    </article>
  );
}

export default RecipeCard;