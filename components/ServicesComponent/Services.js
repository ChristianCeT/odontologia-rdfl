import React, { useRef } from "react";
import Image from "next/image";
import DienteService from "../../assets/Iconos/DienteService.svg";
import { useDimension } from "../../hooks/useDimension";
import { Carousel } from "react-responsive-carousel";

const Services = () => {
  const { windowSize } = useDimension();

  const serviciosData = [
    {
      nombre: "SERVICIO 1",
      descripcion: "Descripcion servicio 1",
    },
    {
      nombre: "SERVICIO 2",
      descripcion: "Descripcion servicio 2",
    },
    {
      nombre: "SERVICIO 3",
      descripcion: "Descripcion servicio 3",
    },
    {
      nombre: "SERVICIO 4",
      descripcion: "Descripcion servicio 4",
    },
    {
      nombre: "SERVICIO 5",
      descripcion: "Descripcion servicio 5",
    },
    {
      nombre: "SERVICIO 6",
      descripcion: "Descripcion servicio 6",
    },
    {
      nombre: "SERVICIO 7",
      descripcion: "Descripcion servicio 7",
    },
    {
      nombre: "SERVICIO 8",
      descripcion: "Descripcion servicio 8",
    },
    {
      nombre: "SERVICIO 9",
      descripcion: "Descripcion servicio 9",
    },
    {
      nombre: "SERVICIO 10",
      descripcion: "Descripcion servicio 10",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#09B6BD] to-[#06BB82] text-white flex items-center flex-col md:flex-row">
      <div className="md:w-1/2 px-20 py-5">
        <h2 className="text-[32px] mb-4">SERVICIOS</h2>
        <h3 className="text-[20px] mb-4">Laboratorio Dental</h3>
        <p>
          Haz clic aquí para agregar tu contenido y personalizar el texto. Es un
          lugar id eal para contar cómo comenzó tu compañía y hacer que los
          usuarios sepan un poco más sobre su historia, los comienzos del equipo
          u otra información que desees compartir. Haz clic en Editar texto para
          empezar.
        </p>
      </div>
      <Carousel
        className="w-full md:w-1/2"
        dynamicHeight={false}
        showThumbs={false}
        showStatus={false}
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
                <p className="text-[15px]">{servicioD.descripcion}</p>
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
                <p className="text-[15px]">{servicioD.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
