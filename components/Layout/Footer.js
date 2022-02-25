import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import WhastAppW from "../../assets/Iconos/bxl-whatsappW.svg";
import Image from "next/image";
import Whatsapp from "../../assets/Iconos/bxl-whatsapp.svg";
import Facebook from "../../assets/Iconos/bxl-facebook.svg";
import Twitter from "../../assets/Iconos/bxl-twitter.svg";
import Instagram from "../../assets/Iconos/bxl-instagram.svg";
import Logo from "../../assets/logo/WhatsApp Image 2022-02-22 at 9.26.31 PM_preview_rev_1.png";

const Footer = () => {
  const [formDatos, setFormDatos] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    descripcion: "",
  });

  const iconosA = [
    { red: Whatsapp, link: "https://api.whatsapp.com/send?phone=+51934120533" },
    { red: Facebook, link: "https://www.facebook.com/rodceram" },
    { red: Twitter, link: "https://twitter.com/rodceram20" },
    { red: Instagram, link: "https://www.instagram.com/tavrvs7/" },
  ];

  const [message, setMessage] = useState(null);
  const [itsOk, setItsOk] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { nombre, apellido, correo, descripcion } = formDatos;

    if ((nombre && apellido && correo && descripcion) === "") {
      setItsOk(false);
      setMessage("Debes rellenar todos los campos");
    } else {
      await emailjs
        .send(
          "service_cb2kld5",
          "template_zob5jh9",
          formDatos,
          "user_L5vVaEPsXKcGpeoAsMoZy"
        )
        .then((res) => {
          e.target.reset();
          setItsOk(true);
          setMessage("Mensaje enviado con éxito");
          const respuesta = setTimeout(() => {
            setMessage(null);
            setFormDatos({
              nombre: "",
              apellido: "",
              correo: "",
              descripcion: "",
            });
            setItsOk(false);
          }, 4500);

          return () => clearTimeout(duration);
        })
        .then((err) => {
          return err;
        });
    }
  };

  const handleChange = (e) => {
    setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-[550px] md:mt-[250px]">
      <div className="w-full pb-3 flex flex-col justify-center md:flex-row md:h-[30rem] md:w-[99%] md:items-center">
        <div className="w-full h-full pb-16 flex flex-col items-center md:w-1/2">
          <div>
            <h2 id="contact" className="text-[#06BB82] text-[29px] font-[600]">
              CONTACTO
            </h2>
          </div>
          <div className="bg-black mb-3 rounded-lg">
            <Image
              alt="laboratorio-dental"
              src={Logo}
              width={290}
              height={100}
              quality={100}
            />
          </div>
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
              <p className="text-[#06BB82] text-[19px] font-[500]">
                Redes sociales:
              </p>
              <div className="flex flex-row gap-[6px]">
                {iconosA.map((icono, index) => (
                  <a
                    href={icono.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image alt="laboratorio-dental" src={icono.red}></Image>
                  </a>
                ))}
              </div>
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
                  className={`h-[37px] w-full outline-none border border-gray-200 rounded-lg shadow-sm focus:border-[#06BB82] focus:shadow-md caret-[#06BB82]
                  `}
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
            <div className="flex flex-col items-center">
              <motion.button
                className="mt-3 w-4/5 flex justify-center bg-[#5DC1B9] py-3 px-16 rounded-lg text-white font-[500]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
              >
                Enviar
              </motion.button>

              {message ? (
                <div
                  className={`mt-1 rounded-xl ${
                    itsOk ? "bg-green-600" : "bg-red-500"
                  }`}
                >
                  <p className="text-white py-3 px-4">{message}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className=" fixed right-5 bottom-9 translate-x-0 hover:scale-110 duration-300">
        <a
          href="https://api.whatsapp.com/send?phone=+51934120533"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="laboratorio-dental"
            src={WhastAppW}
            width={49}
            height={50}
            className="bg-[#186A60] rounded-full cursor-pointer py-12"
          />
        </a>
      </div>

      <div className="bg-[#5DC1B9] h-9 flex justify-center items-center text-white">
        <p>&copy; 2022 Creado por FIREDEV</p>
      </div>
    </div>
  );
};

export default Footer;
