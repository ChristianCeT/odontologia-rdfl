import React from "react";
import Image from "next/image";
import DienteService from "../../assets/Iconos/DienteService.svg";

const Services = () => {
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
    <div className="bg-gradient-to-r from-[#09B6BD] to-[#06BB82] h-[35rem] text-white flex items-center">
      <div className="w-1/2 px-20">
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
      <div className="w-1/2 grid grid-rows-2 grid-cols-2 gap-5 p-5">
        {serviciosData.map((servicioD, index) => (
          <div key={index}>
            <Image
              src={DienteService}
              width={104}
              height={115}
              priority
            ></Image>
            <h2 className="text-[25px]">{servicioD.nombre}</h2>
            <p className="text-[15px]">{servicioD.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
