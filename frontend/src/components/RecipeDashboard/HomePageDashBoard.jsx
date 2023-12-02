import React from "react";
import "./HomePageDashBoard.css";
import { Link } from "react-router-dom";

import RecipeCard from "../RecipeCard/RecipeCard";

import soupIcon from "/assets/soup.jpg";
import mainCourseIcon from "/assets/maincourse.jpg";
import dessertIcon from "/assets/dessert.png";
import appetizerIcon from "/assets/appe.jpg";

function HomePageDashboard() {
  return (
    <div className="card-layout">
      <Link to="/appetizer" className="card-link">
        <RecipeCard
          title="Appetizer"
          description="I love Appetizer"
          img_path={appetizerIcon}
        />
      </Link>

      <div className="space"></div>
      <Link to="/maincourse" className="card-link">
        <RecipeCard
          title="Main Course"
          description="I love Main Course"
          img_path={mainCourseIcon}
        />
      </Link>

      <Link to="/soup" className="card-link">
        <RecipeCard
          title="Soup"
          description="I love Soup"
          img_path={soupIcon}
        />
      </Link>

      <div className="space"></div>

      <Link to="/dessert" className="card-link">
        <RecipeCard
          title="Dessert"
          description="I love Dessert"
          img_path={dessertIcon}
        />
      </Link>
    </div>
  );
}

export default HomePageDashboard;
