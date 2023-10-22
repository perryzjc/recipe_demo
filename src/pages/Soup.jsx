import React from "react";

import { Link } from "react-router-dom";
import { contents } from "./contents.jsx";

const category = "Soup";

const soups = contents.filter(item => item.category === category);

const Soup = () => {
    return (
      <div>
        <h2>Soup</h2>
        <p>This is the soup content.</p>
  
        {soups.map((soup) => (
          <div key={soup.id}>
            <Link to={`/recipe_demo/recipe/${soup.id}`}>
              <img src={soup.image} alt={"soup.title"}  className="contentImg"/>
              <h3>{soup.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Soup;