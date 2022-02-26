import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import fondo1 from "../../assets/fondo1.PNG";
import fondo2 from "../../assets/fondo2.jpeg";
import fondo3 from "../../assets/fondo3.jpeg";
import fondo5 from "../../assets/fondo5.jpeg";
import { motion } from "framer-motion";

const Carousel2 = () => {
  return (
    /* asdasdsad */
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
        autoPlay={true}
        interval={4000}
      >
        <Image
          alt="laboratorio-dental"
          src={fondo1}
          layout="fill"
          objectFit="inherit"
          priority={true}
          quality={100}
        ></Image>

        <Image
          alt="laboratorio-dental"
          src={fondo2}
          layout="fill"
          objectFit="fill"
          quality={100}
        ></Image>

        <Image
          alt="laboratorio-dental"
          src={fondo3}
          layout="fill"
          objectFit="inherit"
          priority={true}
          quality={100}
        ></Image>

       
        <Image
        alt="laboratorio-dental"
        src={fondo5}
        layout="responsive"
        quality={100}
        height={600}
      ></Image>
      </Carousel>
      <div className="absolute left-[5%] top-[20%] md:bottom-[40%] md:left-[5%] md:top-[40%]">
        <p className="text-[#186A60] font-semibold text-[1.7rem] break-all sm:text-[3rem] lg:w-[70%] ">
          LABORATORIO DENTAL
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-1 flex justify-center  bg-gradient-to-r from-[#186A60] to-[#186A60] py-3 px-16 rounded-lg text-white font-[500]"
        >
          Visítanos
        </motion.button>
      </div>
    </div>
  );
};

export default Carousel2;
