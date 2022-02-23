import React from "react";
import Image from "next/image";
import Telf from "../../assets/Iconos/bx-mobile.svg";
import Compromiso from "../../assets/Iconos/compromiso.svg";
import Calidad from "../../assets/Iconos/bxs-calidad.svg";
import Estelar from "../../assets/Iconos/bxs-estelar.svg";
import Comunidad from "../../assets/Iconos/bxs-Comunidad.svg";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#5DC1B9] w-full h-96  text-center items-center">
        <div className="flex flex-col ">
          <h1 className="text-[24px] mt-[55px] text-[#ffffff]">
            Ponte en contacto con nosotros
          </h1>
          <p className="text-[18px] mt-[25px] text-[#ffffff]">
            Escríbenos a través de nuestro correo, formulario, chat en línea o
            llamarnos a nuestros números telefónicos.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="backdrop-opacity-10 backdrop-invert bg-white/30 w-[207px] h-[79px] flex flex-row items-center justify-center rounded-[15px] mt-[30px] cursor-pointer translate-y-1.5 hover:scale-110 duration-300 ">
            <Image src={Telf} width={45} height={60} />{" "}
            <a href="tel:+51934120533">
              <span className="text-[#ffffff] ">LLÁMENOS</span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-96 flex flex-col items-center justify-center">
        <h1 className="text-[#09B6BD] text-[24px]">VIDEO</h1>

        <div className="w-full flex  flex-col items-center md:flex-row justify-evenly">
          <iframe
            src="https://www.youtube.com/embed/UGLPABj6tTo"
            width="315"
            height="200"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="hidden  md:block"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/GUgvT_NfIlU"
            width="315"
            height="200"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>

      <div className='bg-[url("https://images.pexels.com/photos/7788508/pexels-photo-7788508.jpeg?cs=srgb&dl=pexels-ivan-babydov-7788508.jpg&fm=jpg")] w-full h-[650px] bg-center brightness-50 md:h-80 bg-fixed'></div>
      <div className="w-full relative  bottom-[590px]   md:bottom-[280px] ">
        <h1
          id="por"
          className="text-center text-[24px] text-[#ffffff] font-semibold 
      md:mb-[35px] "
        >
          Porqué elergirnos
        </h1>
        <div className="w-full flex flex-col justify-evenly md:flex-row">
          <div className=" flex flex-col items-center ">
            <Image
              src={Compromiso}
              width={100}
              height={100}
              className="translate-x-0 hover:scale-110 duration-300"
            />
            <span className="text-[18px] text-[#ffffff] font-semibold">
              Compromiso
            </span>
          </div>

          <div className=" flex flex-col items-center ">
            <Image
              src={Calidad}
              width={100}
              height={100}
              className="translate-x-0 hover:scale-110 duration-300"
            />
            <span className="text-[18px] text-[#fdfdfd] font-semibold">
              Calidad
            </span>
          </div>

          <div className=" flex flex-col items-center ">
            <Image
              src={Comunidad}
              width={100}
              height={100}
              className="translate-x-0 hover:scale-110 duration-300"
            />
            <span className="text-[18px] text-[#fdfdfd] font-semibold">
              Comunidad
            </span>
          </div>

          <div className=" flex flex-col items-center ">
            <Image
              src={Estelar}
              width={100}
              height={100}
              className="translate-x-0 hover:scale-110 duration-300"
            />
            <span className="text-[18px] text-[#fdfdfd] font-semibold">
              Eficiencia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
