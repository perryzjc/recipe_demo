import React from "react";

import { Link } from "react-router-dom";
import food1 from "../img/food.jpg";

const soups = [
  {
    id: 5,
    title: "Soup 1",
    image: "food1",
  },
  {
    id: 6,
    title: "Soup 2",
    image: "../img/food.jpg",
  },
];

const Soup = () => {
    return (
      <div>
        <h2>Soup</h2>
        <p>This is the soup content.</p>
  
        {soups.map((soup) => (
          <div key={soup.id}>
            <Link to={`/recipe_demo/recipe/${soup.id}`}>
              <img src={soup.image} alt={"soup.title"} />
              <h3>{soup.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Soup;