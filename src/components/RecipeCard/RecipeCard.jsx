import React from 'react';
import './styles.css';
import recipeImage from '../../assets/appetizerIcon.png';

function RecipeCard({ title, description }) {
  return (
    <div className="card">
      <div className="front">
          Open Recipe
      </div>
      <div className="back">
          <img src={recipeImage} alt="Recipe" />
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
