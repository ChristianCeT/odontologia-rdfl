import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formDatos, setFormDatos] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    descripcion: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await emailjs
      .send(
        "service_cb2kld5",
        "template_zob5jh9",
        formDatos,
        "user_L5vVaEPsXKcGpeoAsMoZy"
      )
      .then((res) => {
        if (res.status == "200") {
          console.log("ENVIADO CORRECTO");
        }
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-full pb-3 flex flex-col justify-center md:flex-row md:h-[30rem] md:w-[99%] md:items-center">
        <div className="w-full h-full pb-16 flex flex-col items-center md:w-1/2">
          <div>
            <h2 className="text-[#06BB82] text-[29px] font-[600]">CONTACTO</h2>
          </div>
          <div>LOGO</div>
          <div>
            <h3>
              <p className="text-[#06BB82] text-[19px] font-[500]">
                Dirección:
              </p>
              Av. Fray A. Alcalde 10, 44100 Gd l., Jal., México
            </h3>
            <h3>
              <p className="text-[#06BB82] text-[19px] font-[500]">Correo:</p>
              firedev@hotmail.com
            </h3>

            <h3>
              <p className="text-[#06BB82] text-[19px] font-[500]">Teléfono:</p>
              +51-940323222
            </h3>
          </div>
        </div>

        <div className="px-[12%] h-full md:flex md:flex-col md:items-center md:w-1/2 md:px-0">
          <div className="flex justify-center">
            <h2 className="text-[#06BB82] text-[29px] font-[600]">MENSAJE</h2>
          </div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col justify-between md:flex-row">
              <div>
                <p className="text-[#06BB82] text-[19px] font-[500] mt-2">
                  Nombre:
                </p>
                <input
                  name="nombre"
                  onChange={handleChange}
                  className="h-[37px] w-full outline-none border border-gray-200 rounded-lg shadow-sm focus:border-[#06BB82] focus:shadow-md caret-[#06BB82]"
                ></input>
              </div>
              <div className="ml-1">
                <p className="text-[#06BB82] text-[19px] font-[500] mt-2">
                  Apellido:
                </p>
                <input
                  name="apellido"
                  onChange={handleChange}
                  className="h-[37px] w-full outline-none border border-gray-200 rounded-lg shadow-sm focus:border-[#06BB82] focus:shadow-md caret-[#06BB82]"
                ></input>
              </div>
            </div>

            <div>
              <p className="text-[#06BB82] text-[19px] font-[500] mt-2">
                Email:
              </p>
              <input
                type="email"
                name="correo"
                onChange={handleChange}
                className="pl-1 w-full h-[37px] outline-none border border-gray-200 rounded-lg shadow-sm focus:border-[#06BB82] focus:shadow-md caret-[#06BB82]"
              ></input>

              <p className="text-[#06BB82] text-[19px] font-[500] mt-2">
                Déjanos un mensaje:
              </p>
              <textarea
                name="descripcion"
                onChange={handleChange}
                className="pl-1 w-full h-[8rem] outline-none resize-none border border-gray-200 rounded-lg shadow-sm focus:border-[#06BB82] focus:shadow-md caret-[#06BB82]"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-3 w-4/5 flex justify-center bg-gradient-to-r from-[#09B6BD] to-[#06BB82] py-3 px-16 rounded-lg text-white font-[500] "
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#09B6BD] to-[#06BB82] h-9 flex justify-center items-center text-white">
        <p>&copy; 2022 Creado for FIREDEV</p>
      </div>
    </>
  );
};

export default Footer;
