import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

const category = "MainCourse";

function MainCourse(contents) {
    const mainCourses = contents["contents"].filter(item => item.category === category);
    return (
        <RecipeListsDashBoardTemplate
            recipe_info_list={mainCourses}
            category="Main Course"
            backgroundImage="https://img.freepik.com/premium-photo/background-food-dishes-meat-fish-dishes-salad-wooden-background-top-view-free-space-your-text_187166-33463.jpg"
        />
    );
}

export default MainCourse;
