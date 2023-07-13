import { useEffect, useState } from "react";
import Header from '../Header/Header'


function RecipeCard({ recipe, setFilter }) {
 
  return (
    <article className={'recipe-card'}>
      <img />

      <section className={'recipe-deets'}>
        <h2>{recipe.name}</h2>
        {recipe.ingredients.length < 11 && <p className={'easy-meal'}>less than 10 ingredients!</p>}
        <div className={'tags-section'}>
          {recipe.tags.map(tag => <p className={'tag'}>#{tag}</p>)}
        </div>
      </section>

    </article>
  );
}

export default RecipeCard;