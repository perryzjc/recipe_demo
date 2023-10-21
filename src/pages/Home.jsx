import React from "react";
import BackgroundPattern from "../components/BackgroundPattern/BackgroundPattern";
import RecipeDashboard from "../components/RecipeDashboard/RecipeDashboard";

function Home() {
  return (
    <>
      <BackgroundPattern>
        <RecipeDashboard />
      </BackgroundPattern>
    </>
  );
}

export default Home;
