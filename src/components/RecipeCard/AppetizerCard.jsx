import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import appetizerIcon from '../../assets/appetizerIcon.png';

function AppetizerCard() {
  return (
    <RecipeCard title="Appetizer" description="I love Appetizer" img_path={appetizerIcon} />
  );
}

export default AppetizerCard;
