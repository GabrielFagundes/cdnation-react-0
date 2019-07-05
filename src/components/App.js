import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import { results } from '../sample_data/recipes.json'

function App() {
  const [searchString, setSearchString] = useState('');
  const recipeList = searchString
    ? results.filter(
      ({ title, ingredients }) =>
        title.toLowerCase().includes(searchString.toLowerCase()) || ingredients.toLowerCase().includes(searchString.toLowerCase()))
    : results;

  return (
    <div className="App">
      <Navbar
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <div className="container mt-10">
        <div className="row">
          {recipeList.length > 0 ?
            recipeList.map(recipe =>
              <RecipeItem recipe={recipe} key={recipe.title} searchString={searchString} />
            ) : <div className="no-results">No results to show</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
