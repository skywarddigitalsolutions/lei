'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavBar } from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

const categories = [
    {
      id: 'ZWARP',
      title: "ZWARP",
      imageUrl: "/alteracion.jpeg",
    },
    {
      id: 'Travis',
      title: "Travis",
      imageUrl: "/travis.png",
    },
    {
      id: 'Chiara',
      title: "Chiara",
      imageUrl: "/chiara.png",
    },
    {
        id: 'Bastard',
        title: "Bastard",
        imageUrl: "/bastard.png",
      },
  ]
  

const projectOptions = [
  { name: 'Diseños', href: '/Proyectos/Disenos' },
  { name: 'Producciones', href: '/Proyectos/Producciones' },
  { name: 'Tendencias', href: '/Proyectos/Tendencias' },
];



export default function Producciones() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar />
      <nav className="flex px-4 bg-gris pt-12" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          <li className="inline-flex items-center">
            <Link href="/" className="text-sm font-medium text-grisclaro hover:text-yellow-200">
              Inicio
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-grisclaro">/</span>
              <Link href="/Proyectos" className="text-sm font-medium text-grisclaro hover:text-yellow-200">
                Proyectos
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-grisclaro">/</span>
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-yellow-200 hover:text-yellow-50 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Producciones
                  <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
                </button>
                {isOpen && (
                  <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-gris ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {projectOptions.map((option) => (
                        <Link
                          key={option.name}
                          href={option.href}
                          className="block px-4 py-2 text-sm text-grisclaro hover:bg-yellow-200 hover:text-gris"
                          role="menuitem"
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ol>
      </nav>

      <div className='min-h-screen bg-gris py-24 px-4'>
        <h4 className="text-5xl md:text-7xl lg:text-9xl font-bold text-left mb-2 lg:mb-4 text-yellow-200 tracking-wider break-words">PRODUCCIONES</h4>
        <h5 className='text-xl md:text-2xl lg:text-4xl text-yellow-200 mb-6 lg:mb-12'> ÚNICAS </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-24">
              {categories.map((category) => (
                <Link href={`/Proyectos/Producciones/${category.id}`} key={category.id} className="block group">
                  <div className="relative h-[70vh] overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={category.imageUrl}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex items-end justify-center p-6">
                      <h3 className="text-3xl lg:text-4xl font-light text-grisclaro text-center ">{category.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>  
      </div>
      <Footer />
    </>
  );
}