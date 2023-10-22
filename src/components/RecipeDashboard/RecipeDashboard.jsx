import React from "react";
import "./styles.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import SearchBox from "../SearchBox/SearchBox";

import soupIcon from "../../assets/soup.jpg";
import mainCourseIcon from "../../assets/maincourse.jpg";
import dessertIcon from "../../assets/dessert.png";
import appetizerIcon from "../../assets/appe.jpg";

function RecipeDashboard({}) {
  return (
    // <div className="container">
      <div className="card-layout">

      <div className="search-box-wrapper">
          <SearchBox
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
    // </div>
  );
}

export default RecipeDashboard;
