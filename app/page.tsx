"use client"
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import { AppleCardsCarouselDemo } from "./components/AppleCarouselDemo";
import Transformando from "./components/transformando";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import Sobremi from "./components/Sobremi";
import Head from "next/head";
import { useEffect,useState } from "react";
import Loader from "./components/loader";


export default function Home() {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  
  return (
    <>
 {" "}
      {!loaded && <Loader />}
      {loaded && (
    <div>
        <Head>
                <title>Leila Abalos - Diseño y Gestión de Moda</title>
                <meta name="description" content="Productora y pronosticadora de tendencias, buscando nuevas sintaxis de imagen e identificando moviemientos emergentes. Creando diferentes narrativas " />
                <meta name="keywords" content="diseño, gestión, moda, pronosticadora de tendencias, productora, ropa, fashion, nuevo, diseñador, indumentaria, diseñador de ropa, diseñador de moda, gestión de moda" />
        </Head>
        <NavBar />
        <HeroParallaxDemo/>
        <Transformando />
        <AppleCardsCarouselDemo />
        <Sobremi />
        <Footer />
    </div>
      )}
    </>
  );
}
