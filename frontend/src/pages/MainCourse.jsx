import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

// import { contents } from "./Contents";
import { getData } from "../pages/Contents"

const category = "MainCourse";
const mainCourses = getData().filter(item => item.category === category);

const MainCourse = () => {
    return (
        <RecipeListsDashBoardTemplate
            recipe_info_list={mainCourses}
            category="Main Course"
            backgroundImage="https://img.freepik.com/premium-photo/background-food-dishes-meat-fish-dishes-salad-wooden-background-top-view-free-space-your-text_187166-33463.jpg"
        />
    );
}

export default MainCourse;
