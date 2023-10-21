import React from 'react';
import './App.css';
import BackgroundPattern from './components/BackgroundPattern/BackgroundPattern';
import RecipeDashboard from './components/RecipeDashboard/RecipeDashboard';

function App() {
  return (
    <BackgroundPattern>
      <RecipeDashboard />
    </BackgroundPattern>
  );
}

export default App;
