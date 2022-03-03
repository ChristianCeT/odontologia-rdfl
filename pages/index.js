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
        <meta
          name="description"
          content="Rodo lab nuestra mejor garantía es que trabajamos con materiales Bío compatibles para sus pacientes, note la real diferencia en un laboratorio que requiere de materiales excelentes para una mejor precisión en sus trabajos."
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          property="og:title"
          content="Rodo Lab | Laboratorio dental"
        ></meta>
        <meta property="og:url" content="https://www.rdlflab.com"></meta>
      </Head>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

export default index;
