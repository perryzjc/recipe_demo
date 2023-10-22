import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

const appetizers = [
  {
    id: 11,
    title: "A2",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 12,
    title: "A 2",
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
    description: "Tasty appetizer A2"  // Example description
  },
  {
    id: 12,
    title: "A 2",
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
    description: "Tasty appetizer A2"  // Example description
  },
  {
    id: 12,
    title: "A 2",
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
    description: "Tasty appetizer A2"  // Example description
  },
  {
    id: 12,
    title: "A 2",
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
    description: "Tasty appetizer A2"  // Example description
  },
  {
    id: 12,
    title: "A 2",
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
    description: "Tasty appetizer A2"  // Example description
  },
];

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
