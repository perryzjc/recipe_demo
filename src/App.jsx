import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Appetizer from "./pages/Appetizer";
import MainCourse from "./pages/MainCourse";
import Soup from "./pages/Soup";
import Dessert from "./pages/Dessert";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/recipe_demo/" exact element={<Home />} />
            <Route path="/recipe_demo/appetizer" element={<Appetizer />} />
            <Route path="/recipe_demo/maincourse" element={<MainCourse />} />
            <Route path="/recipe_demo/soup" element={<Soup />} />
            <Route path="/recipe_demo/dessert" element={<Dessert />} />
            <Route path="/recipe_demo/recipe/:id" element={<Recipe />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
