import React, { useEffect, useState } from 'react';
import { Recipe } from './components/recipe/recipe.component';
import { SearchBox } from './components/search-box/search-box.component';
/* import { SearchFilter } from './components/search-filter/search-filter.component'; */
import './App.css';

const App = () => {
  const APP_ID = 'c2b98cb7';
  const APP_KEY = 'f0869bf01680a8472affea83a20507fa';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  const activateSearchFilter = e => {
    e.target.classList.toggle('active-filter');
    const li = e.target;
    if (li.classList.contains('active-filter')) {
      setQuery(li.innerText);
    } else {
      setQuery('');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Strange Recipes Finder</h1>
        <form onSubmit={getSearch} className="search-form">
          <SearchBox updateSearch={updateSearch} placeholder="Search recipe" />
        </form>
        <div className="search-filter">
          <ul className="filters">
            <li className="filter" onClick={activateSearchFilter}>
              Chicken
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Sushi
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Bread
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Risotto
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Pasta
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Soup
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Dessert
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Salad
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Eggs
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Pizza
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Fish
            </li>
            <li className="filter" onClick={activateSearchFilter}>
              Grill
            </li>
          </ul>
        </div>
      </header>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
