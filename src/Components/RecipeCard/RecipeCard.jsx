import './RecipeCard.css'


function RecipeCard({ recipe, setFilter }) {
 
  return (
    <article className={'recipe-card'}>
      <div className={'image-container'}>
        <img src={recipe.image} alt={recipe.name} className={'recipe-image'}/>
      </div>
      <section className={'recipe-deets'}>
        <h2 className={'recipe-name'}>{recipe.name}</h2>
        {recipe.ingredients.length < 11 && <p className={'easy-meal'}>less than 10 ingredients!</p>}
        <div className={'tags-section'}>
          {recipe.tags.map(tag => <button className={'tag'} onClick={() => {setFilter(tag)}}>#{tag}</button>)}
        </div>
        <button className={'add-button'}>Add to my Cookbook</button>
      </section>
    </article>
  );
}

export default RecipeCard;