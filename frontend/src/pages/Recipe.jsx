import React from "react";
import { useParams } from "react-router-dom";
import './Page.css';
import RecipeInstruction from "../components/RecipeInstruction/RecipeInstruction.jsx";
import {resolveImagePath} from "../utils/resolveImagePath.js";


function Recipe(contents) {
  const { id, image } = useParams();
  console.log("test id");
  const selectedRecipe = contents.contents.find((recipe) => recipe.id === id);

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }
  console.log("test selectedRecipe");
  console.log(contents)
  return (
    <RecipeInstruction
        recipeName={selectedRecipe.title}
        recipeImage={resolveImagePath(selectedRecipe.imagePath)}
        instructions={selectedRecipe.instructions}
    />
);
}

export default Recipe;
