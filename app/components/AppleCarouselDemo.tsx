"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import Link from "next/link";

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


const data = [
  {
    category: "Diseño",
    title: "Alteración mochila",
    src: "/alteracion.webp",
    url: "/Proyectos/Disenos", 
  },
  {
    category: "Producciones",
    title: "ZWAP",
    src: "/zwap.webp",
    url: "/Proyectos/Producciones/ZWAP", 
  },
  {
    category: "Producciones",
    title: "Travis",
    src: "/travis2.webp",
    url: "/Proyectos/Producciones/Travis", 
  },
  {
    category: "Producciones",
    title: "Chiara",
    src: "/chiara.webp",
    url: "/Proyectos/Producciones/Chiara", 
  },
  {
    category: "Producciones",
    title: "Bastard",
    src: "/bastard.webp",
    url: "/Proyectos/Producciones/Bastard", 
  },
];

