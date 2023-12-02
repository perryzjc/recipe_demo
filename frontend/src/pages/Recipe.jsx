import React from "react";
import { useParams } from "react-router-dom";
import './Page.css';
import RecipeInstruction from "../components/RecipeInstruction/RecipeInstruction.jsx";


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
        recipeImage={`../${selectedRecipe.imagePath}`}
        instructions={selectedRecipe.instructions}
    />
);
}

export default Recipe;
