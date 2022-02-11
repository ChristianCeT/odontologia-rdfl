import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import slider4 from "../../assets/img/slider4.jpg";
import slider5 from "../../assets/img/slider5.jpg";
import slider6 from "../../assets/img/slider6.jpg";
import slider7 from "../../assets/img/slider7.jpg";
import slider8 from "../../assets/img/slider8.jpg";
import slider9 from "../../assets/img/slider9.jpg";
import slider10 from "../../assets/img/slider10.jpg";
import slider11 from "../../assets/img/slider11.jpg";
import slider12 from "../../assets/img/slider12.jpg";
import ModalComponent from "../ModalComponent/ModalComponent";

const imagenes = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
  slider11,
  slider12,
];

const CarouselPersonalized = () => {
  const [open, setOpen] = useState(false);
  const [posicion, setPosicion] = useState("");

  const onClick = (index) => {
    setOpen(true);
    setPosicion(index);
  };

  useEffect(() => {
    setPosicion(posicion);
  }, [posicion]);

  return (
    <div>
      <div className="bg-green-500 h-52 mt-40"></div>
      <Carousel
        className="bg-blue-300"
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={false}
        showArrows={false}
        dynamicHeight={false}
      >
        <div className="flex flex-wrap gap-1 justify-center bg-red-400">
          {imagenes.slice(0, 6).map((imagen, index) => (
            <button key={index} onClick={() => onClick(index + 1)}>
              <Image
                priority={true}
                src={imagen}
                width={400}
                height={400}
                quality={100}
              ></Image>
            </button>
          ))}
        </div>
        <div>
          {imagenes.slice(6, 12).map((imagen, index) => (
            <button onClick={() => onClick(index + 7)} key={index}>
              <Image
                priority={true}
                src={imagen}
                width={400}
                height={400}
                quality={100}
              ></Image>
            </button>
          ))}
        </div>
      </Carousel>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        posicion={posicion}
      ></ModalComponent>
    </div>
  );
};

export default CarouselPersonalized;
