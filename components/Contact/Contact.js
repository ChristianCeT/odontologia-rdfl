import React from "react";
import Image from "next/image";
import Telf from "../../assets/Iconos/bx-mobile.svg";
import Fondo from "../../assets/fondo-Nuevo.jpg";
import Compromiso from "../../assets/Iconos/compromiso.svg";
import Calidad from "../../assets/Iconos/bxs-calidad.svg";
import Estelar from "../../assets/Iconos/bxs-estelar.svg";
import Comunidad from "../../assets/Iconos/bxs-Comunidad.svg";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#09B6BD] w-full h-96  text-center items-center">
        <div className="flex flex-col ">
          <h1 className="text-[24px] mt-[55px] text-[#ffffff]">
            Ponte en contacto con nosotros
          </h1>
          <p className="text-[18px] mt-[25px] text-[#ffffff]">
            Escríbenos a través de nuestro correo, formulario, chat en línea o
            llamarnos a nuestros números telefónicos.
          </p>
        </div>
        <div className="flex  w-full  justify-center  ">
          <div className="backdrop-opacity-10 backdrop-invert bg-white/30 w-[207px] h-[79px] flex flex-row items-center justify-center rounded-[15px] mt-[30px] cursor-pointer">
            <Image
              src={Telf}
              width={45}
              height={60}
              className="animate-bounce"
            />{" "}
            <a href="tel:+51934120533">
              <span className="text-[#ffffff] ">LLÁMENOS</span>
            </a>
          </div>
        </div>
      </div>

      <div className="  w-full  h-96 flex flex-col items-center justify-center">
        <h1 className="text-[#09B6BD] text-[24px]">VIDEO</h1>
        <iframe
          className="mt-[15px]"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/UGLPABj6tTo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="w-full brightness-50">
        <Image src={Fondo} height={250} layout="responsive" quality={100} />
      </div>

      <div className="w-full  relative bottom-[250px]">
        <h1 className="text-center text-[24px] text-[#ffffff] font-semibold">
          Porqué elergirnos
        </h1>
        <div className="w-full flex justify-evenly  ">
          <Image src={Compromiso} width={150} height={150} />
          <Image src={Calidad} width={150} height={150} />
          <Image src={Comunidad} width={150} height={150} />
          <Image src={Estelar} width={150} height={150} />
        </div>
        <div className="w-full flex justify-evenly ">
          <span className="text-[18px] text-[#ffffff]  font-semibold">
            Compromiso
          </span>
          <span className="text-[18px] text-[#ffffff] font-semibold">
            Calidad
          </span>
          <span className="text-[18px] text-[#ffffff] font-semibold">
            Profesionalismo
          </span>
          <span className="text-[18px] text-[#ffffff] font-semibold">
            Eficiencia
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
