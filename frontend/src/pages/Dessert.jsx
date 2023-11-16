import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

import { contents } from "./Contents";

const category = "Dessert";

const desserts = contents.filter(item => item.category === category);

const Dessert = () => {
    return (
        <RecipeListsDashBoardTemplate
            recipe_info_list={desserts}
            category="Dessert"
            backgroundImage="https://thumbs.dreamstime.com/z/autumn-food-frame-table-scene-selection-pies-appetizers-desserts-top-view-over-rustic-wood-background-copy-space-159176820.jpg"
        />
    );
}

export default Dessert;
