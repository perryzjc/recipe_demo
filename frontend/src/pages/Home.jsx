import React from "react";
import BackgroundPattern from "../components/BackgroundPattern/BackgroundPattern";
import HomePageDashboard from "../components/RecipeDashboard/HomePageDashBoard";

function Home() {
  return (
    <>
      <BackgroundPattern>
        <HomePageDashboard />
      </BackgroundPattern>
    </>
  );
}

export default Home;
