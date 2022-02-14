import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../assets/Iconos/bxl-facebook.svg";
import instagram from "../../assets/Iconos/bxl-instagram.svg";
import whatsapp from "../../assets/Iconos/bxl-whatsapp.svg";

const Header = () => {
  return (
    <div className="h-44">
      <div className=" w-full flex">
        <div className="bg-[#09B6BD] h-[14px] w-1/4 "></div>
        <div className="bg-[#1F90CB] h-[14px] w-[45%]"></div>
        <div className="bg-[#06BB82] h-[14px] w-[10%]"> </div>
        <div className="bg-[#06BB82] h-[85px] w-1/5 fixed z-10 right-0">
          <div className=" w-full flex pt-[19px] justify-evenly ">
            <a href="https://www.instagram.com/nicolas25dev/" target="_blank">
              {" "}
              <Image
                src={instagram}
                width={35}
                height={35}
                className="translate-x-0 hover:scale-110 duration-300"
              />
            </a>
            <a href="https://www.instagram.com/nicolas25dev/" target="_blank">
              {" "}
              <Image
                src={facebook}
                width={35}
                height={35}
                className="translate-x-0 hover:scale-110 duration-300"
              />
            </a>
            <a href="https://www.instagram.com/nicolas25dev/" target="_blank">
              {" "}
              <Image
                src={whatsapp}
                width={35}
                height={35}
                className="translate-x-0 hover:scale-110 duration-300"
              />
            </a>
          </div>
          <p className="text-white text-center text-[18px] font-[500]">
            {" "}
            Redes Sociales{" "}
          </p>
        </div>
      </div>
      <div className="text-[70px]">logo</div>

      <div className="bg-[#F2F2F2] w-full flex justify-center h-[40px] items-center">
        <Link href="/">
          <a className="pr-[15px] pl-[15px]  hover:text-[#09B6BD]">Inicio</a>
        </Link>
        <Link href="/">
          <a className="pr-[15px] pl-[15px]  hover:text-[#09B6BD]">Galeria</a>
        </Link>
        <Link href="/">
          <a className="pr-[15px] pl-[15px]  hover:text-[#09B6BD]">
            ¿Por qué elegirnos?
          </a>
        </Link>
        <Link href="/">
          <a className="pr-[15px] pl-[15px]  hover:text-[#09B6BD]">Contactos</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
