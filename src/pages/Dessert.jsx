import React from "react";

import { Link } from "react-router-dom";
import { contents } from "./contents.jsx";

const category = "Dessert";

const desserts = contents.filter(item => item.category === category);

const Dessert = () => {
    return (
      <div className="categoryPage">
        <h2>Dessert</h2>
        <p>This is the dessert content.</p>
  
        {desserts.map((dessert) => (
          <div key={dessert.id}>
            <Link to={`/recipe_demo/recipe/${dessert.id}`}>
              <img src={dessert.image} alt={"dessert.title"} className="contentImg"/>
              <h3>{dessert.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Dessert;