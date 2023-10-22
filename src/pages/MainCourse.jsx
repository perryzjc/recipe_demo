import React from "react";

import { Link } from "react-router-dom";
import { contents } from "./Contents.jsx";
import './Page.css';

const category = "MainCourse";

const mainCourses = contents.filter(item => item.category === category);

const MainCourse = () => {
    return (
      <div className="categoryPage">
        <h2>MainCourse</h2>
        <p>This is the mainCourse content.</p>
  
        {mainCourses.map((mainCourse) => (
          <div key={mainCourse.id}>
            <Link to={`/recipe_demo/recipe/${mainCourse.id}`}>
              <img src={mainCourse.image} alt={"mainCourse.title"}  className="contentImg"/>
              <h3>{mainCourse.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default MainCourse;