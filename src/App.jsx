import React from 'react';
import './App.css';
import RecipeDashboard from './components/RecipeDashboard/RecipeDashboard';

function App() {
  return (
    <div className="App">
      <RecipeDashboard />
      {/* You can add more <RecipeCard /> components with different props here */}
    </div>
  );
}

export default App;
