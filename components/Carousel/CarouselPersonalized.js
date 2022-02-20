import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Imagen1 from "../../assets/img/Imagen1.jpeg"
import Imagen2 from "../../assets/img/Imagen2.jpeg"
import Imagen3 from "../../assets/img/Imagen3.jpeg"
import Imagen4 from "../../assets/img/Imagen4.jpeg"
import Imagen5 from "../../assets/img/Imagen5.jpeg"
import Imagen6 from "../../assets/img/Imagen6.jpeg"
import Imagen7 from "../../assets/img/Imagen7.jpeg"
import Imagen8 from "../../assets/img/Imagen8.jpeg"
import Imagen9 from "../../assets/img/Imagen9.jpeg"
import Imagen10 from "../../assets/img/Imagen10.jpeg"
import Imagen11 from "../../assets/img/Imagen11.jpeg"
import Imagen12 from "../../assets/img/Imagen12.jpeg"
import Imagen13 from "../../assets/img/Imagen13.jpeg"
import Imagen14 from "../../assets/img/Imagen14.jpeg"
import Imagen15 from "../../assets/img/Imagen15.jpeg"

import DienteGalery from "../../assets/Iconos/GaleryDiente.svg";
import ModalComponent from "../ModalComponent/ModalComponent";

const imagenes = [
  Imagen1,
  Imagen2,
  Imagen3,
  Imagen4,
  Imagen5,
  Imagen6,
  Imagen7,
  Imagen8,
  Imagen9,
  Imagen10,
  Imagen11,
  Imagen12,
  Imagen13,
  Imagen14,
  Imagen15,
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
        <h2 id="galeria" className="text-[25px] text-[#09B6BD]">
          GALERIA
        </h2>
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
          {imagenes.slice(0, 7).map((imagen, index) => (
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
          {imagenes.slice(8, 15).map((imagen, index) => (
            <button
              onClick={() => onClick(index + 9)}
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
