import React, { useRef } from "react";
import Image from "next/image";
import DienteService from "../../assets/Iconos/DienteService.svg";
import { useDimension } from "../../hooks/useDimension";

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
      <div className="w-full grid gap-5 py-12 md:grid-rows-2 md:grid-cols-2 md:w-1/2 justify-center">
        {serviciosData.map((servicioD, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="md:w-[38%] w-[30%]">
              <Image src={DienteService} layout="intrinsic"></Image>
            </div>
            <h2 className="text-[25px]">{servicioD.nombre}</h2>
            <p className="text-[15px]">{servicioD.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
