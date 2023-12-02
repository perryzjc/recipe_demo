import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Appetizer from "./pages/Appetizer";
import MainCourse from "./pages/MainCourse";
import Soup from "./pages/Soup";
import Dessert from "./pages/Dessert";
import Recipe from "./pages/Recipe";
import RecipeUploadForm from './components/RecipeUpload';
import IntroAnimation from './components/IntroAnimation'; // Import your intro animation component
import UserPage from "./pages/UserPage";

import getContents from "./utils/getContent.js";

function App() {
  const [contents, setContents] = useState([]);
  const [user, setUser] = useState([]);
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getContents();
      console.log("Loading data...");
      console.log(data);
      if (data instanceof Uint8Array) {
        // Convert Uint8Array to regular array
        setContents(Array.from(data));
      } else {
        setContents(data);
      }
    }

    fetchData().then(() => {
      console.log("Data loaded successfully kjasfkjaskfjaskjfkasjfkasjfka");
    });
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setFirstVisit(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleAnimationComplete = () => {
    setFirstVisit(false);
  };

  return (
      <>
        <Router basename="/recipe_demo">
          <div>
            <Navbar contents={contents} user={user} setUser={setUser} />
            <Routes>
              return (
              );
              <Route path="/" element={(firstVisit && contents.length !== 0) ? <IntroAnimation contents={contents} onAnimationComplete={handleAnimationComplete}/> : <Home />} />
              <Route
                  path="/appetizer"
                  element={<Appetizer contents={contents} />}
              />
              <Route path="/maincourse" element={<MainCourse contents={contents} />} />
              <Route path="/soup" element={<Soup contents={contents} />} />
              <Route path="/dessert" element={<Dessert contents={contents} />} />
              <Route path="/recipe/:id" element={<Recipe contents={contents} />} />
              <Route path="/upload" element={<UserPage user={user} />} />
            </Routes>
          </div>
        </Router>
      </>
  );
}

export default App;
