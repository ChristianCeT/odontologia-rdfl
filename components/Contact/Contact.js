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
          <h1 className="text-[24px] mt-[55px] font-semibold text-[#ffffff]">
            Ponte en contacto con nosotros
          </h1>
          <p className="text-[18px] mt-[25px] font-semibold text-[#ffffff]">
            Escríbenos a través de nuestro correo, formulario, chat en línea o
            llamarnos a nuestros números telefónicos.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="backdrop-opacity-10 backdrop-invert bg-white/30 w-[207px] h-[79px] flex flex-row items-center justify-center rounded-[15px] mt-[30px] cursor-pointer translate-y-1.5 hover:scale-110 duration-300 ">
            <Image alt="laboratorio-dental" src={Telf} width={45} height={60} />{" "}
            <a href="tel:+51934120533">
              <span className="text-[#ffffff] font-semibold ">LLÁMENOS</span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[920px] flex flex-col items-center justify-center">
        <h1 className="text-[#5DC1B9] text-[24px] font-semibold mb-10">VIDEO</h1>

        <div className="w-full flex  flex-col items-center md:flex-row justify-evenly">
          <iframe
            src="https://www.youtube.com/embed/GUgvT_NfIlU"
            width="315"
            height="200"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="hidden rounded-lg md:block"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/FIQsQ8NfjQI"
            width="315"
            height="200"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className=" rounded-lg "
          ></iframe>
        </div>
        <div className="w-full flex  flex-col items-center md:flex-row justify-evenly mt-24">
          <iframe
            src="https://www.youtube.com/embed/a1qpwC-WHek"
            width="315"
            height="200"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="hidden rounded-lg md:block"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/35G9c-f6qlo"
            width="315"
            height="200"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className=" rounded-lg "
          ></iframe>
        </div>

        <div className="w-full flex  flex-col items-center md:flex-row justify-evenly mt-24">
        <iframe
          src="https://www.youtube.com/embed/a1qpwC-WHek"
          width="315"
          height="200"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="hidden rounded-lg md:block"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/JPfkUkrhVk8"
          width="315"
          height="200"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className=" rounded-lg "
        ></iframe>
      </div>


      </div>

      <div className="relative">
        <div className='bg-[url("https://images.pexels.com/photos/7788508/pexels-photo-7788508.jpeg?cs=srgb&dl=pexels-ivan-babydov-7788508.jpg&fm=jpg")] w-full h-[540px] bg-center brightness-50  absolute  md:h-[250px] bg-fixed'></div>

        <div className="w-full absolute">
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
                alt="laboratorio-dental"
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
                alt="laboratorio-dental"
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
                alt="laboratorio-dental"
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
                alt="laboratorio-dental"
                src={Estelar}
                width={100}
                height={100}
                className="translate-x-0 hover:scale-110 duration-300"
              />
              <span className="text-[18px]  text-[#fdfdfd] font-semibold">
                Eficiencia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;