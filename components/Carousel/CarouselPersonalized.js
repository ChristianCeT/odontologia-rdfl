import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Imagen1 from "../../assets/img/Imagen1.jpeg";
import Imagen2 from "../../assets/img/Imagen2.jpeg";
import Imagen3 from "../../assets/img/Imagen3.jpeg";
import Imagen4 from "../../assets/img/Imagen4.jpeg";
import Imagen5 from "../../assets/img/Imagen5.jpeg";
import Imagen6 from "../../assets/img/Imagen6.jpeg";
import Imagen7 from "../../assets/img/Imagen7.jpeg";
import Imagen8 from "../../assets/img/Imagen8.jpeg";
import Imagen9 from "../../assets/img/Imagen9.jpeg";
import Imagen10 from "../../assets/img/Imagen10.jpeg";
import Imagen11 from "../../assets/img/Imagen11.jpeg";
import Imagen12 from "../../assets/img/Imagen12.jpeg";
import Imagen13 from "../../assets/img/Imagen13.jpeg";
import Imagen14 from "../../assets/img/Imagen14.jpeg";

import DienteGalery from "../../assets/Iconos/GaleryDiente.svg";
import ModalComponent from "../ModalComponent/ModalComponent";

const data = [
  {
    image: Imagen1,
    nombre: "ZIRCONIO",
  },
  {
    image: Imagen2,
    nombre: "PRÓTESIS TOTAL",
  },
  {
    image: Imagen3,
    nombre: "PREPARACIÓN DE CORONAS DE PORCELANA EN DURALAY",
  },
  {
    image: Imagen4,
    nombre: "PRESENTACIÓN DE ENVÍO",
  },
  {
    image: Imagen5,
    nombre: "NOMBRE 5",
  },
  {
    image: Imagen6,
    nombre: "FÉRULA DE ACETATO",
  },
  {
    image: Imagen7,
    nombre: "NOMBRE 7",
  },
  {
    image: Imagen8,
    nombre: "CARILLAS E.MAX",
  },
  {
    image: Imagen9,
    nombre: "CERÁMICA EN PROCESO",
  },
  {
    image: Imagen10,
    nombre: "BASE METÁLICA",
  },
  {
    image: Imagen11,
    nombre: "NOMBRE 11",
  },
  {
    image: Imagen12,
    nombre: "NOMBRE 12",
  },
  {
    image: Imagen13,
    nombre: "PRÓTESIS TOTAL",
  },
  {
    image: Imagen14,
    nombre: "PREPARACIÓN DE METAL PARA PORCELANA",
  },
];

const CarouselPersonalized = () => {
  const [open, setOpen] = useState(false);
  const [posicion, setPosicion] = useState("");
  const [nombreSeleccion, setNombreSeleccion] = useState("");

  const cssTransform =
    "relative overflow-hidden  after:rounded-lg after:content-[attr(before)] after:text-[2rem] after:text-white after:bg-gradient-to-r from-[#5DC1B9] after:absolute after:inset-0 after:bottom-[6px] after:grid after:place-items-center after:translate-x-full hover:after:translate-x-0 hover:after:transition hover:after:duration-700 after:overflow-hidden";

  const onClick = (index, nombre) => {
    setOpen(true);
    setPosicion(index);
    setNombreSeleccion(nombre);
  };

  return (
    <div>
      <div className="h-52 flex items-center justify-center flex-col mt-11">
        <Image
          alt="laboratorio-dental"
          src={DienteGalery}
          width={100}
          height={130}
          className=""
        ></Image>
        <h2 id="galeria" className="text-[25px] text-[#09B6BD]">
          GALERIA
        </h2>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={false}
        showArrows={false}
        dynamicHeight={false}
      >
        <div className="flex flex-wrap justify-center">
          {data.slice(0, 7).map((dataI, index) => (
            <button
              key={index}
              onClick={() => onClick(index + 1, { nombre: dataI.nombre })}
              className="m-1"
            >
              <div before={dataI.nombre} className={cssTransform}>
                <Image
                  alt="laboratorio-dental"
                  className="rounded-lg"
                  priority={true}
                  src={dataI.image}
                  width={400}
                  height={400}
                  quality={100}
                ></Image>
              </div>
            </button>
          ))}
        </div>
        <div>
          {data.slice(7, 14).map((dataI, index) => (
            <button
              onClick={() => onClick(index + 8, { nombre: dataI.nombre })}
              key={index}
              className="m-1"
            >
              <div before={dataI.nombre} className={cssTransform}>
                <Image
                  alt="laboratorio-dental"
                  className="rounded-lg"
                  priority={true}
                  src={dataI.image}
                  width={400}
                  height={400}
                  quality={100}
                ></Image>
              </div>
            </button>
          ))}
        </div>
      </Carousel>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        posicion={posicion}
        nombreSeleccion={nombreSeleccion}
      ></ModalComponent>
    </div>
  );
};

export default CarouselPersonalized;
