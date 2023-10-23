import React from "react";
import "./RecipeInstruction.css";

const RecipeInstruction = ({ recipeName, recipeImage, instructions }) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${recipeImage})`,
  };

  return (
    <div className="recipe-instruction-page" style={backgroundStyle}>
      <h2 className="recipe-name">{recipeName}</h2>
      <div className="recipe-instruction-container">
        {/* <img src=url(${recipeImage}) alt="" className='dishimg'/> */}
        {instructions.map((instruction, index) => (
          <div className="instruction-row" key={index}>
            <div className="step-content">Step {index + 1}</div>
            <div className="instruction-content">{instruction}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeInstruction;
