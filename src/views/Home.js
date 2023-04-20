import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles className="illustration-section-02" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-03"
      />
      <Testimonial topDivider className="illustration-section-04"/>
    </>
  );
};

export default Home;
