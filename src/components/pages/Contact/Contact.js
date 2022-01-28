import React from "react";
import HomeSection from "../../HomeSection";
import Pricing from "../../Pricing";
import { homeObjOne } from "./Data";

const Contact = () => {
  return (
    <>
      <Pricing />
      <HomeSection {...homeObjOne} />
    </>
  );
};
export default Contact;
