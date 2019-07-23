import React from 'react';
import './recipe.styles.css';

const Recipe = ({ title, calories, image, ingredients }) => (
  <div className="recipe">
    <h1 className="recipe_title">{title}</h1>
    <div className="image_div">
      <img className="image" src={image} alt="" />
    </div>
    <p className="calories">Calories: {parseInt(calories)} Kcal</p>
    <ul className="ingredients">
      {ingredients.map(ingredient => (
        <li className="ingredient">
          <i class="fas fa-caret-right" /> {ingredient.text}
        </li>
      ))}
    </ul>
  </div>
);

export default Recipe;
