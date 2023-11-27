import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

// import { contents } from "./Contents";
import { getData } from "../pages/Contents"

// import soup image
import SoupPageBackground from "/assets/bg/bg_soup.jpg";

const category = "Soup";

const soups = getData().filter(item => item.category === category);


const Soup = () => {
    return (
        <RecipeListsDashBoardTemplate
            recipe_info_list={soups}
            category="Soup"
            backgroundImage={SoupPageBackground}
        />
    );
}

export default Soup;
