import React from "react";
import HomeSection from "../../HomeSection";
import Pricing from "../../Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjThree} />
      <HomeSection {...homeObjTwo} />
      <HomeSection {...homeObjFour} />
      <Pricing />
    </>
  );
};
export default Home;
