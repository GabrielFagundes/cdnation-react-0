import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import { results } from '../sample_data/recipes.json'

function App() {
  const [searchString, setSearchString] = useState('');
  const recipeList = searchString
    ? results.filter(({ title, ingredients }) => title.includes(searchString) || ingredients.includes(searchString))
    : results;

  // const highlightedList = recipeList.map(recipe => {
  //   recipe.title = highlightedString(searchString, recipe.title)
  //   return recipe
  // })


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
              <RecipeItem recipe={recipe} key={recipe.title} />
            ) : <div>No results to show</div>
          }
        </div>
      </div>
    </div>
  );
}

// const highlightedString = (word, string) => {
//   const testeStr = string && word.length > 2 ? string.replace(new RegExp(word, 'gi'), str => `<mark>${str}</mark>`) : string
//   console.log(testeStr)
//   return testeStr
// }

export default App;
