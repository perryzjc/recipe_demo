import React from "react";
import { useParams } from "react-router-dom";
import { contents } from "./Contents.jsx";
import './Page.css';
import RecipeInstruction from "../components/RecipeInstruction/RecipeInstruction.jsx";


const recipes = contents


function Recipe() {
  const { id, image } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <RecipeInstruction
        recipeName={selectedRecipe.title}
        recipeImage={`../${selectedRecipe.imagePath}`}
        instructions={selectedRecipe.instructions}
    />
);
}

export default Recipe;
