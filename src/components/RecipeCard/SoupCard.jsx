import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import soupIcon from '../../assets/soupIcon.png';

function SoupCard() {
  return (
    <RecipeCard title="Soup" description="I love Soup" img_path={soupIcon} />
  );
}

export default SoupCard;
