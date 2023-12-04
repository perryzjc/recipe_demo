import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

const category = "Appetizer";

function Appetizer(contents) {
  //console.log("i am appetizer 12345678901011121314151617181920")
  //console.log(contents)
  const appetizers = contents["contents"].filter(item => item.category === category);
  return (
    <RecipeListsDashBoardTemplate
      recipe_info_list={appetizers}
      category="Appetizer"
      backgroundImage="https://c8.alamy.com/comp/JNXA82/sauces-appetizers-and-cooking-ingredients-food-frame-background-on-JNXA82.jpg"
    />
  );
}

export default Appetizer;
