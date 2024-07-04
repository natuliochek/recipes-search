import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "20cc3de7";
  const MY_KEY = "9fbc2c2666333f3eaac19e695311f6e1";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSublmitted] = useState("water");


  useEffect(()=>{
    const getRecipe = async ()=> {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e)=> {
    setMySearch(e.target.value)
  }

  const finalSearch = (e)=> {
    e.preventDefault()
    setWordSublmitted(mySearch)
  }

  return (
    <div>

      <div className='container'>
        <h1>Let's search a recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={ finalSearch }>
          <input placeholder='What do we have?...' onChange = { myRecipeSearch } value = { mySearch } />
        </form>
      </div>

      <div className='container'>
        <button onClick={ finalSearch }>Search</button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index} 
        label = { element.recipe.label } 
        image = { element.recipe.image } 
        ingredients = { element.recipe.ingredientLines }
        calories = { element.recipe.calories } 
        // url = { element.recipe.url }
         />
      ))}

    </div>
  );
}

export default App;
