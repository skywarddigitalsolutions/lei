"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import Link from "next/link";
import ShimmerButton from "./ui/shimmer-button";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 pb-24 bg-gris">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-yellow-100 font-sans">
        Conocé todos los proyectos
      </h2>
      <Carousel items={cards} />
      <Link href={"/Proyectos"}>
        <div className=" flex justify-center items-center">
          <button className="shadow-[inset_0_0_0_2px_#fef08a] text-yellow-200 px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-yellow-200 hover:text-gris transition duration-200">
            Ver más
          </button>
        </div>
      </Link>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      
          <Link href={"/Proyectos"}>
             <div className="z-10 flex min-h-64 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-gris dark:from-white dark:to-slate-900/10 lg:text-lg">
          Ver todas las fotos
        </span>
      </ShimmerButton>
    </div>
          </Link>
      
    </>
  );
};
const data = [
  {
    category: "Diseño",
    title: "Alteración mochila",
    src: "/alteracion.jpeg",
    url: "/Proyectos/Disenos", 
  },
  {
    category: "Producciones",
    title: "ZWARP",
    src: "/zwarp.jpeg",
    url: "/Proyectos/Producciones/ZWARP", 
  },
  {
    category: "Producciones",
    title: "Travis",
    src: "/travis2.png",
    url: "/Proyectos/Producciones/Travis", 
  },
  {
    category: "Producciones",
    title: "Chiara",
    src: "/chiara.png",
    url: "/Proyectos/Producciones/Chiara", 
  },
  {
    category: "Producciones",
    title: "Bastard",
    src: "/bastard.png",
    url: "/Proyectos/Producciones/Bastard", 
  },
];

