import React from "react";

import { Link } from "react-router-dom";
import { contents } from "./Contents.jsx";
import './Page.css';

const category = "Appetizer";

const appetizers = contents.filter(item => item.category === category);

function Appetizer() {
  return (
  <div className="categoryPage">
    <h2>Appetizer</h2>
    <p>This is the a Appetizer content.</p>

    {appetizers.map((appetizer) => (
      <div key={appetizer.id}>
        <Link to={`/recipe_demo/recipe/${appetizer.id}`}>
          <img src={appetizer.image} alt={"appetizer.title"} className="contentImg"/>
          <h3>{appetizer.title}</h3>
        </Link>
      </div>
    ))}
  </div>
  );
}

export default Appetizer;
