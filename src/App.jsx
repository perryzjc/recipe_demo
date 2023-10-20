import React from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <div className="App">
      <RecipeCard 
        title="Delicious Dish" 
        description="A delightful fusion of flavors and textures that promises an unforgettable culinary journey."
      />
      {/* You can add more <RecipeCard /> components with different props here */}
    </div>
  );
}

export default App;
