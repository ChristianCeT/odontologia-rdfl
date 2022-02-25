import React, { useState } from "react";
import Logo from "../../assets/logo/WhatsApp Image 2022-02-22 at 9.26.31 PM_preview_rev_1.png";
import Image from "next/image";
import Menu from "../../assets/Iconos/bx-align-right.svg";



export const NavbarDental = () => {
  let Links = [
    { name: "Servicios", link: "#servicio" },
    { name: "Galeria", link: "#galeria" },
    { name: "¿Por qué elegirnos?", link: "#por" },
    { name: "Contactos", link: "#contact"},
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full  ">
      <div className="md:flex items-center justify-between bg-[#5DC1B9] h-44 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer  flex items-center font-[Poppins] 
          "
        >
          <div className="logo">
            <Image alt="laboratorio-dental" src={Logo} width={250} height={150} quality={100} priority={true}/>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-0 top-6  cursor-pointer md:hidden"
        >
          <Image alt="laboratorio-dental" src={Menu} width={50} height={50} />
        </div>

        <ul
          className={`md:flex  h-44  md:items-center md:pb-0 pb-3 absolute md:static bg-[#5DC1B9] md:z-[100] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-44 " : "top-[-480px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-[24px] md:mt-[9px]text-[14px]">
              <a
                href={link.link}
                className="text-white hover:text-[#000000]  duration-500 font-normal"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};  
