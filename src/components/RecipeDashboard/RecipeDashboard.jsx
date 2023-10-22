import React from "react";
import "./styles.css";
import RecipeCard from "../RecipeCard/RecipeCard";

import soupIcon from "../../assets/soupIcon.png";
import mainCourseIcon from "../../assets/mainCourseIcon.png";
import dessertIcon from "../../assets/dessertIcon.png";
import appetizerIcon from "../../assets/appetizerIcon.png";

function RecipeDashboard({}) {
  return (
    <div className="container">
      <div className="card-layout">

      <div className="search-box-wrapper">
          <input
            type="text"
            placeholder="Search for a recipe..."
            className="search-box"
          />
        </div>
        
        <RecipeCard
          title="Appetizer"
          description="I love Appetizer"
          img_path={appetizerIcon}
        />
        <RecipeCard
          title="Main Course"
          description="I love Main Course"
          img_path={mainCourseIcon}
        />
        
        <RecipeCard
          title="Soup"
          description="I love Soup"
          img_path={soupIcon}
        />
        <RecipeCard
          title="Dessert"
          description="I love Dessert"
          img_path={dessertIcon}
        />
      </div>
    </div>
  );
}

export default RecipeDashboard;
