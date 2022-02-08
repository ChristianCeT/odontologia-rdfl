import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Image from "next/image";
import diente1 from "../../assets/diente1.jpg";
import diente2 from "../../assets/diente2.jpg";
import diente3 from "../../assets/diente3.jpg";

const Carousel = () => {
  return (
    <CarouselProvider
      className="bg-red-200"
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={3}
      isPlaying={true}
      interval={4000}   
    >
      <Slider>
        <Slide index={0}>
          <Image src={diente1} objectFit="cover" quality={100}></Image>
        </Slide>
        <Slide index={1}>
          <Image src={diente2} objectFit="cover" quality={100}></Image>
        </Slide>
        <Slide index={2}>
          <Image src={diente3} objectFit="cover" quality={100}></Image>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
