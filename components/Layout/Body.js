import React from "react";
import Carousel2 from "../Carousel/Carousel2";
import CarouselPersonalized from "../Carousel/CarouselPersonalized";
import Services from "../ServicesComponent/Services";
import Contact from "../Contact/Contact";

const Body = () => {
  return (
    <>
      <Carousel2></Carousel2>
      <Services></Services>
      <CarouselPersonalized></CarouselPersonalized>
      <Contact></Contact>
    </>
  );
};

export default Body;
