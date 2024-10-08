"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function NavBar() {
  const navItems = [
    {
      name: "Inicio",
      link: "#",
    },
    {
      name: "Proyectos",
      link: "/Proyectos",
     
    },
    {
      name: "Sobre mi",
      link: "/Sobremi",
    }
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}