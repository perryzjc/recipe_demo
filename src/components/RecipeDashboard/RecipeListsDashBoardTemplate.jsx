import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./RecipeListsDashBoardTemplate.css";

function RecipeListsDashBoardTemplate({ recipe_info_list, category, backgroundImage }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${backgroundImage})`
  };

  console.log(recipe_info_list);

  return (
    <div className="categoryPage" style={backgroundStyle}>
      <h2>{category}</h2>
      <div className="panel">
        <div className="grid-container">
          {recipe_info_list.map((recipe_info) => (
            <Link key={recipe_info.id} to={`/recipe_demo/recipe/${recipe_info.id}`} className="grid-item">
              <RecipeCard
                title={recipe_info.title}
                description={recipe_info.description}
                img_path={`${recipe_info.imagePath}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeListsDashBoardTemplate;
