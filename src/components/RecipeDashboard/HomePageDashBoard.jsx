import React from "react";
import "./HomePageDashBoard.css";
import RecipeCard from "../RecipeCard/RecipeCard";

import soupIcon from "../../assets/soup.jpg";
import mainCourseIcon from "../../assets/maincourse.jpg";
import dessertIcon from "../../assets/dessert.png";
import appetizerIcon from "../../assets/appe.jpg";

function HomePageDashboard({}) {
  return (
    // <div className="container">
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
    // </div>
  );
}

export default HomePageDashboard;