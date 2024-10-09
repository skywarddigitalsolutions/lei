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

const productionOptions = [
  { name: 'ZWAP', href: '/Proyectos/Producciones/ZWAP' },
  { name: 'Travis', href: '/Proyectos/Producciones/Travis' },
  { name: 'Chiara', href: '/Proyectos/Producciones/Chiara' },
  { name: 'Bastard', href: '/Proyectos/Producciones/Bastard' },
];

const images = [
  { src: '/bastard.webp', alt: 'bastard 1', className: 'md:col-span-2 md:row-span-3' },
  { src: '/bastard2.webp', alt: 'bastard 2', className: 'md:col-span-1 md:row-span-2' },
  { src: '/bastard3.webp', alt: 'bastard 3', className: 'md:col-span-1 md:row-span-2' },
  { src: '/bastard4.webp', alt: 'bastard 4', className: 'md:col-span-1 md:row-span-2' },

];

export default function Bastard() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isProductionOpen, setIsProductionOpen] = useState(false);

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
                  onClick={() => setIsProjectOpen(!isProjectOpen)}
                >
                  Producciones
                  <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
                </button>
                {isProjectOpen && (
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
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-grisclaro">/</span>
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-yellow-200 hover:text-yellow-50 focus:outline-none"
                  onClick={() => setIsProductionOpen(!isProductionOpen)}
                >
                  Bastard
                  <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
                </button>
                {isProductionOpen && (
                  <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-gris ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {productionOptions.map((option) => (
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
        <h4 className="text-5xl md:text-7xl lg:text-9xl font-bold text-left mb-2 lg:mb-4 text-yellow-200 tracking-wider break-words">Bastard</h4>
        <h5 className='text-xl md:text-2xl lg:text-4xl text-yellow-200 mb-6 lg:mb-12'>Estilismo y producción</h5>
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