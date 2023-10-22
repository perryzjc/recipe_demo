import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";

const mainCourses = [
  {
    id: 11,
    title: "A2",
    image: "https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
];

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
