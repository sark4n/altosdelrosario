import Head from "next/head";
import AboutUs from "./components/main/AboutUs";
import Caracteristicas from "./components/main/Caracteristicas";
import Hero from "./components/main/Hero";
import Mapa from "./components/main/Mapa";
import MasterPlan from "./components/main/MasterPlan";
import Proyecto from "./components/main/Proyecto";
import Slider from "./components/main/galeria/Slider";
import { SliderData } from "./components/main/galeria/SliderData"
import Instagram from "./components/main/social/Instagram";


export default function Home() {
  return (
    <>
      <Head>
        <title>Altos del Rosario Elqui</title>
        <meta name='description' content='Nuevas parcelas para que construyas tu sueño inmobiliario.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    
      <Hero/>
      <AboutUs/>
      <Proyecto/>
      <MasterPlan/>
      <Mapa/>
      <Slider slides={SliderData} />
      <Caracteristicas/>
      <Instagram/>
    </>    
  )
}
