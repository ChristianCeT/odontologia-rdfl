import React, { useState } from "react";
import Logo from "../../assets/logo/png-transparent-logo-dentistry-graphic-design-design-blue-text-logo_preview_rev_1.png";
import Image from "next/image";
import Menu from "../../assets/Iconos/bx-align-right.svg";

export const NavbarDental = () => {
  let Links = [
    { name: "Servicios", link: "/" },
    { name: "Galeria", link: "/" },
    { name: "¿Por qué elegirnos?", link: "/" },
    { name: "Contactos", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-gray-800"
        >
          <span className="text-3xl  mr-1 pt-2">
            <Image src={Logo} width={150} height={85} />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <Image src={Menu} width={50} height={50} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
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
