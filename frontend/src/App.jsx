import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Appetizer from "./pages/Appetizer";
import MainCourse from "./pages/MainCourse";
import Soup from "./pages/Soup";
import Dessert from "./pages/Dessert";
import Recipe from "./pages/Recipe";
import { loadData } from './pages/Contents'

loadData().then(() => {
  console.log('Data loaded successfully');
  // Now you can start your application or perform other operations
});

import RecipeUploadForm from './components/RecipeUpload';

function App() {
  return (
    <>
      <Router basename="/recipe_demo">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appetizer" element={<Appetizer />} />
            <Route path="/maincourse" element={<MainCourse />} />
            <Route path="/soup" element={<Soup />} />
            <Route path="/dessert" element={<Dessert />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/upload" element={<RecipeUploadForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
