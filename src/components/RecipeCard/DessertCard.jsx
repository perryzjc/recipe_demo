import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import dessertIcon from '../../assets/dessertIcon.png';

function DessertCard() {
  return (
    <RecipeCard title="Dessert" description="I love Dessert" img_path={dessertIcon} />
  );
}

export default DessertCard;
