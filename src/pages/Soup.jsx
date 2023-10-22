import React from "react";
import RecipeListsDashBoardTemplate from "../components/RecipeDashboard/RecipeListsDashBoardTemplate";
// import soup image
import SoupPageBackground from "../assets/bg/bg_soup.jpg";

const soups = [
  {
    id: 11,
    title: "A2",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/vegetable-soup-500x375.jpg",
    description: "Delicious appetizer A2"  // Example description
  },
  {
    id: 11,
    title: "A2",
    image: "https://hips.hearstapps.com/hmg-prod/images/chicken-noodle-soup-index-644c2bec1ce0c.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    description: "Delicious appetizer A2"  // Example description
  },
];

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
