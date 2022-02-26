import Head from "next/head";
import React from "react";
import Body from "../components/Layout/Body";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const index = () => {
  return (
    <>
      <Head>
        <title>Rodo Lab | Laboratorio dental</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta title="Rodo Lab | Laboratorio dental"></meta>
        <meta name="keywords" content="diente, laboratorio, dientes"/>
        <meta
          name="description"
          content="En Rodo Lab podemos construir y hacer toda clase de dientes, permitiendo una mejor comodidad y apoyando al bienestar de la salud"
        ></meta>
        <meta name="robots" content="index, follow"></meta> 
        <meta
          property="og:title"
          content="Rodo Lab | Laboratorio dental"
        ></meta>
        <meta
          property="og:url"
          content="https://odontologia-rdfl.vercel.app/"
        ></meta>
        <meta property="og:type" content="website"></meta>
        
      </Head>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

export default index;
