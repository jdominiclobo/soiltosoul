import React from "react";
import HomeSection from "../../HomeSection";
import Pricing from "../../Pricing";
import { homeObjThree } from "./Data";

const Account = () => {
  return (
    <>
      <Pricing />
      <HomeSection {...homeObjThree} />
    </>
  );
};
export default Account;
