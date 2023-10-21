import React from "react";

import { Link } from "react-router-dom";

const appetizers = [
  {
    id: 11,
    title: "A2",
    image: "../img/food.jpg",
  },
  {
    id: 12,
    title: "A 2",
    image: "../img/food.jpg",
  },
];

function Appetizer() {
  return (
    <div>
    <h2>A</h2>
    <p>This is the a content.</p>

    {appetizers.map((appetizer) => (
      <div key={appetizer.id}>
        <Link to={`/recipe_demo/recipe/${appetizer.id}`}>
          <img src={appetizer.image} alt={"appetizer.title"} />
          <h3>{appetizer.title}</h3>
        </Link>
      </div>
    ))}
  </div>
  );
}

export default Appetizer;
