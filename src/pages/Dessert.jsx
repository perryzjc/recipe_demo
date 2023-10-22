import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

const desserts = [
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
]

const Dessert = () => {
    return (
        <RecipeListsDashBoardTemplate
            recipe_info_list={desserts}
            category="Dessert"
            backgroundImage="https://thumbs.dreamstime.com/z/autumn-food-frame-table-scene-selection-pies-appetizers-desserts-top-view-over-rustic-wood-background-copy-space-159176820.jpg"
        />
    );
}

export default Dessert;
