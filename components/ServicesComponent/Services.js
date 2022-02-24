import React from "react";
import Image from "next/image";
import DienteService from "../../assets/Iconos/DienteService.svg";
import { useDimension } from "../../hooks/useDimension";
import { Carousel } from "react-responsive-carousel";
import {
  imagenesServices,
  imagenesServices2,
} from "../ServicesComponent/ServicesImg.js";

const Services = () => {
  const { windowSize } = useDimension();

  const serviciosData = [
    {
      nombre: "Coronas de porcelana sobre metal",
      /* descripcion: "Descripcion servicio 1", */
    },
    {
      nombre: "Libres de metal",
    },
    {
      nombre: "Carillas de porcelana pura",
    },
    {
      nombre: "Carillas e.max",
    },
    {
      nombre: "Zircornio",
    },
    {
      nombre: "Total",
    },
    {
      nombre: "PPR de acnilicio",
    },
    {
      nombre: "Coronas de invocron",
    },
    {
      nombre: "PPR Base metálica",
    },
    {
      nombre: "Ferulas de acetato",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#09B6BD] to-[#5DC1B9] text-white flex items-center flex-col md:flex-row">
      <div className="md:w-1/2 xl:px-28 px-12 w-full h-full flex flex-col items-center overflow-hidden">
        <h2 id="servicio" className="text-[32px] mb-4 mt-[10%]">SERVICIOS</h2>
        <Carousel
          className="w-full overflow-hidden"
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows={false}
          showArrows={false}
          emulateTouch={true}
          dynamicHeight={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
        >
          {imagenesServices2.map((serviceImage, index) => (
            <Image
              key={index}
              className="rounded-lg"
              src={serviceImage}
              layout="responsive"
              height={1200}
              quality={100}
            ></Image>
          ))}
          {imagenesServices.map((serviceImage, index) => (
            <Image
              key={index}
              className="rounded-lg"
              src={serviceImage}
              layout="fill"
              quality={100}
            ></Image>
          ))}
        </Carousel>
      </div>
      <Carousel
        className="w-full md:w-1/2"
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={false}
        showArrows={false}
        emulateTouch={true}
        dynamicHeight={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div className="mt-[10%]">
          <h1 className="text-[32px]">CORONAS DE PORCELANA</h1>
          <div className="w-full grid gap-4 py-12 md:grid-cols-2">
            {serviciosData.slice(0, 5).map((servicioD, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="md:w-[30%] w-[28%]">
                  <Image src={DienteService} layout="intrinsic"></Image>
                </div>
                <h2 className="text-[25px]">{servicioD.nombre}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[10%]">
          <h1 className="text-[32px]">PRÓTESIS DE ACRÍLICO</h1>
          <div className="w-full grid gap-5 py-12 md:grid-cols-2">
            {serviciosData.slice(5, 10).map((servicioD, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="md:w-[30%] w-[28%]">
                  <Image src={DienteService} layout="intrinsic"></Image>
                </div>
                <h2 className="text-[25px]">{servicioD.nombre}</h2>
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;