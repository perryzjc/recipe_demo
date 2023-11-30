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

import getContents from "./utils/getContent.js";

function App() {
    const [contents, setContents] = useState([]);
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        // Check if the intro animation has been shown
        if (!localStorage.getItem("introShown")) {
            setShowIntro(true);
        }

        async function fetchData() {
            const data = await getContents();
            console.log('Loading data...');
            console.log(data);
            if (data instanceof Uint8Array) {
                setContents(Array.from(data));
            } else {
                setContents(data);
            }
        }

        fetchData().then(() => {
            console.log('Data loaded successfully');
        });
    }, []);

    // Function to hide the intro and set the flag in local storage
    const hideIntro = () => {
        localStorage.setItem("introShown", "true");
        setShowIntro(false);
    };

    return (
        <>
            {showIntro ? (
                <IntroAnimation onEnd={hideIntro} />
            ) : (
                <Router basename="/recipe_demo">
                    <div>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/appetizer" element={<Appetizer contents={contents} />} />
                            <Route path="/maincourse" element={<MainCourse />} />
                            <Route path="/soup" element={<Soup />} />
                            <Route path="/dessert" element={<Dessert />} />
                            <Route path="/recipe/:id" element={<Recipe />} />
                            <Route path="/upload" element={<RecipeUploadForm />} />
                        </Routes>
                    </div>
                </Router>
            )}
        </>
    );
}

export default App;
