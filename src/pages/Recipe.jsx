import React from "react";
import { useParams } from "react-router-dom";
import { contents } from "./Contents.jsx";
import './Page.css';

const recipes = contents

function Recipe() {
  const { id, image } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{selectedRecipe.title} Recipe</h2>
      <img src={"../" + selectedRecipe.image} alt={`Recipe for id: ${id}`} className="contentImg"/>
      <p>{selectedRecipe.recipe}</p>
    </div>
  );
}

export default Recipe;
