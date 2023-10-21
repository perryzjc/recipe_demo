import React from 'react';
import './styles.css';
import AppetizerCard from '../RecipeCard/AppetizerCard';
import DessertCard from '../RecipeCard/DessertCard';
import MainCourseCard from '../RecipeCard/MainCourseCard';
import SoupCard from '../RecipeCard/SoupCard';

function RecipeDashboard({}) {
  return (
    <div className="container">
        <div className="card-layout">
            {/* RecipeCard components go here */}
            <AppetizerCard />
            <MainCourseCard />
            <div className="search-box-wrapper">
                <input type="text" placeholder="Search for a recipe..." className="search-box" />
            </div>
            <SoupCard />
            <DessertCard />
        </div>
    </div>
  );
}

export default RecipeDashboard;
