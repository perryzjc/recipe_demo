import React from "react";
import { useParams } from "react-router-dom";
import { contents } from "./Contents.jsx";
import './Page.css';
import RecipeInstruction from "../components/RecipeInstruction/RecipeInstruction.jsx";

const recipes = contents

const instructions = [
    "Welcome to my Site! We are passionate about...",
    "Our journey started with a simple idea...Our journey started with a simple idea...Our jourth a simple idea...Our journth a simple idea...Our journth a simple idea...Our journney started with a simple idea...Our journey started with a simple idea...Our journey started with a simple idea...",
    "Welcome to my Site! We are passionate about...",
    "Welcome to my Site! We are passionate about...",
    "Welcome to my Site! We are passionate about...",
    "Welcome to my Site! We are passionate about...",
    "Welcome to my Site! We are passionate about...",
    "Welcome to my Site! We are passionate about...",
    "Welcome to my Site! We are passionate about...",
    "Welcome to my Site! We are passionate about...",
    // Add as many instructions as you need
];



function Recipe() {
  const { id, image } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <RecipeInstruction
        recipeName={selectedRecipe.title}
        recipeImage={selectedRecipe.image}
        instructions={instructions}
    />
);
}

export default Recipe;
