import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import diente1 from "../../assets/diente1.jpg";
import diente2 from "../../assets/diente2.jpg";
import diente3 from "../../assets/diente3.jpg";
import doctora from "../../assets/img/doctora.png";
import { motion } from "framer-motion";

const Carousel2 = () => {
  return (
    <div className="relative">
      <Carousel
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={false}
        showArrows={false}
        emulateTouch={true}
        dynamicHeight={false}
        infiniteLoop={true}
      >
        <Image
          src={diente1}
          objectFit="cover"
          layout="responsive"
          quality={100}
          height={750}
          priority={true}
        ></Image>

        <Image
          src={diente2}
          objectFit="cover"
          layout="responsive"
          quality={100}
          height={750}
        ></Image>

        <Image
          src={diente3}
          objectFit="cover"
          layout="responsive"
          quality={100}
          height={750}
        ></Image>
      </Carousel>
      <div className="absolute left-[5%] top-[20%] md:bottom-[40%] md:left-[15%] md:top-[40%]">
        <p className="text-[#06BB82] text-[1.7rem] break-all sm:text-[3rem] lg:w-[70%]">
          LABORATORIO DENTAL
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-1 flex justify-center bg-gradient-to-r from-[#09B6BD] to-[#06BB82] py-3 px-16 rounded-lg text-white font-[500]"
        >
          Visítanos
        </motion.button>
      </div>
    </div>
  );
};

export default Carousel2;
