import React from "react";

import { Link } from "react-router-dom";
import food1 from "../img/food.jpg";

const mainCourses = [
  {
    id: 3,
    title: "MainCourse 1",
    image: "food1",
  },
  {
    id: 4,
    title: "MainCourse 2",
    image: "../img/food.jpg",
  },
];

const MainCourse = () => {
    return (
      <div>
        <h2>MainCourse</h2>
        <p>This is the mainCourse content.</p>
  
        {mainCourses.map((mainCourse) => (
          <div key={mainCourse.id}>
            <Link to={`/recipe_demo/recipe/${mainCourse.id}`}>
              <img src={mainCourse.image} alt={"mainCourse.title"} />
              <h3>{mainCourse.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default MainCourse;