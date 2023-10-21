import React from 'react';
import './styles.css';

function RecipeCard({ title, description, img_path}) {
  return (
    <div className="card">
      <div className="front">
          <img src={img_path} alt="Recipe" width={280} height={200} />
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
      <div className="back">
          Open Recipe
      </div>
    </div>
  );
}

export default RecipeCard;
