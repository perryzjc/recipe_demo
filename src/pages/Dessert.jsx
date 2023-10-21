import React from "react";

import { Link } from "react-router-dom";
import food1 from "../img/food.jpg";

const desserts = [
  {
    id: 7,
    title: "Dessert 1",
    image: food1,
  },
  {
    id: 8,
    title: "Dessert 2",
    image: "../img/food.jpg",
  },
];

const Dessert = () => {
    return (
      <div>
        <h2>Dessert</h2>
        <p>This is the dessert content.</p>
  
        {desserts.map((dessert) => (
          <div key={dessert.id}>
            <Link to={`/recipe_demo/recipe/${dessert.id}`}>
              <img src={dessert.image} alt={"dessert.title"} />
              <h3>{dessert.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Dessert;