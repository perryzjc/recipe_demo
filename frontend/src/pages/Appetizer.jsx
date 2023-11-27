import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

// import { contents } from "./Contents";
import { getData } from "../pages/Contents"

const category = "Appetizer";
 
const appetizers = getData().filter(item => item.category === category);

function Appetizer() {
  return (
    <RecipeListsDashBoardTemplate
      recipe_info_list={appetizers}
      category="Appetizer"
      backgroundImage="https://c8.alamy.com/comp/JNXA82/sauces-appetizers-and-cooking-ingredients-food-frame-background-on-JNXA82.jpg"
    />
  );
}

export default Appetizer;
