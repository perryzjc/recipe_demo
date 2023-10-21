import React from 'react';
import './styles.css';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecipeDashboard({}) {
  return (
    <div className="container">
        <div className="card-layout">
            {/* RecipeCard components go here */}
            <RecipeCard title="Recipe 1" description="This is a recipe description." />
            <RecipeCard title="Recipe 2" description="This is a recipe description." />
            <div className="search-box-wrapper">
                <input type="text" placeholder="Search for a recipe..." className="search-box" />
            </div>
            <RecipeCard title="Recipe 3" description="This is a recipe description." />
            <RecipeCard title="Recipe 4" description="This is a recipe description." />
        </div>
    </div>
  );
}

export default RecipeDashboard;
