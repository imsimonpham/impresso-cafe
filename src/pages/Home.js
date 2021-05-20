import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { SliderData } from "../data/SliderData";
import FoodSection from "../components/FoodSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection />
      <FoodSection />
      <Testimonials />
    </>
  );
};

export default Home;
