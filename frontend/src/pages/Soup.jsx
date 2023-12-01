import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

const category = "Soup";

function Soup(contents) {
    const soups = contents["contents"].filter(item => item.category === category);
    return (
        <RecipeListsDashBoardTemplate
            recipe_info_list={soups}
            category="Soup"
            backgroundImage="/assets/bg/bg_soup.jpg"
        />
    );
}

export default Soup;
