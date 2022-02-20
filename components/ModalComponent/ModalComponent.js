import React from "react";
import { Modal } from "react-responsive-modal";

import Imagen1 from "../../assets/img/Imagen1.jpeg"
import Imagen2 from "../../assets/img/Imagen2.jpeg"
import Imagen3 from "../../assets/img/Imagen3.jpeg"
import Imagen4 from "../../assets/img/Imagen4.jpeg"
import Imagen5 from "../../assets/img/Imagen5.jpeg"
import Imagen6 from "../../assets/img/Imagen6.jpeg"
import Imagen7 from "../../assets/img/Imagen7.jpeg"
import Imagen8 from "../../assets/img/Imagen8.jpeg"
import Imagen9 from "../../assets/img/Imagen9.jpeg"
import Imagen10 from "../../assets/img/Imagen10.jpeg"
import Imagen11 from "../../assets/img/Imagen11.jpeg"
import Imagen12 from "../../assets/img/Imagen12.jpeg"
import Imagen13 from "../../assets/img/Imagen13.jpeg"
import Imagen14 from "../../assets/img/Imagen14.jpeg"
import Imagen15 from "../../assets/img/Imagen15.jpeg"

import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const imagenes = [
  Imagen1,
  Imagen2,
  Imagen3,
  Imagen4,
  Imagen5,
  Imagen6,
  Imagen7,
  Imagen8,
  Imagen9,
  Imagen10,
  Imagen11,
  Imagen12,
  Imagen13,
  Imagen14,
  Imagen15,
];

const ModalComponent = ({ open, setOpen, posicion }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeIcon={
        <AiFillCloseCircle
          size={32}
          style={{ color: "#000" }}
        ></AiFillCloseCircle>
      }
      center
      blockScroll={false}
    >
      <Image
        src={imagenes[posicion - 1]}
        width={480}
        height={480}
        objectFit="cover"
        priority
      ></Image>
    </Modal>
  );
};

export default ModalComponent;
