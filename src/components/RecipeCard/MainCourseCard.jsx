import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import mainCourseIcon from '../../assets/mainCourseIcon.png';

function MainCourseCard() {
  return (
    <RecipeCard title="Main Course" description="I love Main Course" img_path={mainCourseIcon} />
  );
}

export default MainCourseCard;
