import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

 const getRandomRecipies = () => {
 fetch("https://www.themealdb.com/api/json/v1/1/random.php") 
    .then((res) => res.json())
    .then ((res) => {
    setRecipe(res.meals[0].strMeal)
    setInstructions(res.meals[0].strInstructions)
  })
}
  useEffect(() => getRandomRecipies,[])

  const [recipe, setRecipe] = useState('')
  

  const [instructions, setInstructions] = useState('')


  return (
    <div>
      <header>Random Food Recipes</header>
      <div class="slide-show"></div>
      <div className="meal">{recipe}</div>
    <div class="recipe">{instructions}</div>
   
    <button onClick={getRandomRecipies} class="next">Next</button>
    </div>
  );
}

export default App;
