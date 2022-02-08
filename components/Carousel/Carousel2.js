import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import diente1 from "../../assets/diente1.jpg";
import diente2 from "../../assets/diente2.jpg";
import diente3 from "../../assets/diente3.jpg";

const Carousel2 = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows={false}
      showArrows={false}
      emulateTouch={true}
      dynamicHeight={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      <div>
        <Image
          src={diente1}
          objectFit="cover"
          layout="responsive"
          quality={100}
          height={750}
        ></Image>
      </div>
      <div>
        <Image
          src={diente2}
          objectFit="cover"
          layout="responsive"
          quality={100}
          height={750}
        ></Image>
      </div>
      <div>
        <Image
          src={diente3}
          objectFit="cover"
          layout="responsive"
          quality={100}
          height={750}
        ></Image>
      </div>
    </Carousel>
  );
};

export default Carousel2;
