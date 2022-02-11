import React from "react";
import { Modal } from "react-responsive-modal";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import slider4 from "../../assets/img/slider4.jpg";
import slider5 from "../../assets/img/slider5.jpg";
import slider6 from "../../assets/img/slider6.jpg";
import slider7 from "../../assets/img/slider7.jpg";
import slider8 from "../../assets/img/slider8.jpg";
import slider9 from "../../assets/img/slider9.jpg";
import slider10 from "../../assets/img/slider10.jpg";
import slider11 from "../../assets/img/slider11.jpg";
import slider12 from "../../assets/img/slider12.jpg";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const imagenes = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
  slider11,
  slider12,
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
      <div className="bg-red-100 w-[30rem] h-[30rem]">
        <Image
          src={imagenes[posicion - 1]}
          width={480}
          height={480}
          objectFit="cover"
          priority
        ></Image>
      </div>
    </Modal>
  );
};

export default ModalComponent;
