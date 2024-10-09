'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavBar } from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

const projectOptions = [
  { name: 'Diseños', href: '/Proyectos/Disenos' },
  { name: 'Producciones', href: '/Proyectos/Producciones' },
  { name: 'Tendencias', href: '/Proyectos/Tendencias' },
];

const images = [
  { src: '/tendencia.webp', alt: 'tendencia 1', className: 'md:col-span-2 md:row-span-3' },
  { src: '/tendencia2.webp', alt: 'tendencia 2', className: 'md:col-span-1 md:row-span-2' },
  { src: '/tendencia3.webp', alt: 'tendencia 3', className: 'md:col-span-1 md:row-span-2' },
  { src: '/tendencia4.webp', alt: 'tendencia 4', className: 'md:col-span-1 md:row-span-2' },
];

export default function Tendencias() {
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
                  Tendencias
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
        <h4 className="text-5xl md:text-7xl lg:text-9xl font-bold text-left mb-2 lg:mb-4 text-yellow-200 tracking-wider break-words">TENDENCIAS </h4>
        <h5 className='text-xl md:text-2xl lg:text-4xl text-yellow-200 mb-6 lg:mb-12'> Detección</h5>
        <p className='text-lg md:text-xl lg:text-xl text-grisclaro mb-12 lg:mb-40'>A partir de la observación de la Colección Fall 23´ Ready-to-wear de Jil Sander, desactiva lo lineal y la uniformidad para presentar tipologías aerodinámicas con una dirección centrada en el movimiento, en la fluidez de los mismos por un lado, y a la vez, mezclando la rigidez y la tensión</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-48">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg ${image.className}`}>
              <div className="w-full h-0 pb-[150%] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>        
      </div>
      <Footer />
    </>
  );
}