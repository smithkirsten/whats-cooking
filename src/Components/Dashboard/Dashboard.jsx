function Dashboard({ user, recipes, ingredients, setRecipes, setIngredients }) {

  return (
    <main>
      Dashboard
      {user ? <p>{user.name}</p> : <p>loading...</p>}
    </main>
  );
}

export default Dashboard;