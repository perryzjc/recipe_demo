import React from "react";
import { useParams } from "react-router-dom";

const recipes = [
  {
    id: 11,
    title: "Appetizer 2",
    image: "image1.jpg",
    recipe: "Recipe for Appetizer 1",
  },  {
    id: 12,
    title: "Appetizer 2",
    image: "image1.jpg",
    recipe: "Recipe for Appetizer 2",
  },
  {
    id: 3,
    title: "main course 1",
    image: "image2.jpg",
    recipe: "Recipe for main course 1",
  },  {
    id: 4,
    title: "main course 2",
    image: "image2.jpg",
    recipe: "Recipe for main course 2",
  },

  {
    id: 5,
    title: "soup 1",
    image: "image1.jpg",
    recipe: "Recipe for soup 1",
  },
  {
    id: 6,
    title: "soup 2",
    image: "image1.jpg",
    recipe: "Recipe for soup 2",
  },
  {
    id: 7,
    title: "Dessert 1",
    image: "image2.jpg",
    recipe: "Recipe for dessert 1",
  },
  {
    id: 8,
    title: "Dessert 2",
    image: "image2.jpg",
    recipe: "Recipe for dessert 2",
  },
];

function Recipe() {
    const { id, image } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{selectedRecipe.title} Recipe</h2>
      <img src={image} alt={`Recipe for dessert ${id}`} />
      <p>{selectedRecipe.recipe}</p>
    </div>
  );
}

export default Recipe;
