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
import DienteGalery from "../../assets/Iconos/GaleryDiente.svg";
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
      <div className="h-52 flex items-center justify-center flex-col mt-11 text-[#06BB82]">
        <Image src={DienteGalery} width={100} height={130} className=""></Image>
        <h2 className="text-[25px] text-[#09B6BD]">GALERIA</h2>
      </div>
      <Carousel
        className=""
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={false}
        showArrows={false}
        dynamicHeight={false}
      >
        <div className="flex flex-wrap justify-center">
          {imagenes.slice(0, 6).map((imagen, index) => (
            <button
              key={index}
              onClick={() => onClick(index + 1)}
              className="m-1 mt-0"
            >
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
            <button
              onClick={() => onClick(index + 7)}
              key={index}
              className="m-1 mt-0"
            >
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
