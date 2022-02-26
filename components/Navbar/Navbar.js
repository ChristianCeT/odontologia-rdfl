import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/logo/WhatsApp Image 2022-02-22 at 9.26.31 PM_preview_rev_1.png";
import { useDimension } from "../../hooks/useDimension.js";
import MenuH from "../../assets/Iconos/MenuHamburguesa.svg";
import MenuX from "../../assets/Iconos/Eliminar.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { windowSize } = useDimension();
  const [medicionLogo, setMedicionLogo] = useState({
    widthL: 280,
    heighL: 90,
  });

  const data = [
    { name: "Servicios", link: "#servicio" },
    { name: "Galeria", link: "#galeria" },
    { name: "¿Por qué elegirnos?", link: "#por" },
    { name: "Contactos", link: "#contact" },
  ];

  const onClick = () => {
    setOpen(!open);
  };

  const onClickButton = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open && windowSize.widthW >= 1024) {
      setOpen(false);
    }
  }, [windowSize, open]);

  useEffect(() => {
    if (windowSize.widthW <= 760) {
      setMedicionLogo({ widthL: 220, heighL: 80 });
    } else {
      setMedicionLogo({ widthL: 300, heighL: 90 });
    }
  }, [windowSize]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#5DC1B9] lg:p-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <div className="logo">
          <div>
            <Image
              alt="laboratorio-dental"
              src={Logo}
              quality={100}
              priority={true}
              width={medicionLogo.widthL}
              height={medicionLogo.heighL}
              objectFit="unset"
            ></Image>
          </div>
        </div>
      </div>
      <div className="block lg:hidden px-3 py-2">
        {open ? (
          <button
            onClick={onClickButton}
            className={`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`}
          >
            <Image alt="laboratorio-dental" src={MenuX}></Image>
          </button>
        ) : (
          <button
            onClick={onClickButton}
            className={`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`}
          >
            <Image alt="laboratorio-dental" src={MenuH}></Image>
          </button>
        )}
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div
          className={`lg:flex-grow lg:block ${
            open ? "block" : "hidden"
          } lg:p-0 p-6`}
        >
          {data.map((dataI, index) => (
            <a
              key={index}
              href={dataI.link}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6 text-[20px]"
              onClick={onClick}
            >
              {dataI.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
